import { Component, OnInit } from '@angular/core';
import { Employee, Amounts } from '../model/employee/employee';
import { FormControl, Validators } from '@angular/forms';

// initial amounts to be displayed in the form
const initAmounts: Amounts = {
  basic: 0,
  da: 0,
  conAllowance: 1600,
  medAllowance: 1200,
  telAllowance: 2000,
  spAllowance: 0,
  internetAllowance: 250,
  maintenance: 500,
  loyalty: 0,
  accomp: 0,
  arrears: 0,
  tds: 0,
  profTax: 200,
  adv: 0,
  other: 0,
  hra: 0,
  regular: 0,
  pf: 0,
  monthlyGross: 0,
  total: 0,
  monthlyNet: 0
};

// needs to be deleted when data is fetched over http
const loadAmounts: Amounts = {
  basic: 0,
  da: 0,
  conAllowance: 1600,
  medAllowance: 1200,
  telAllowance: 2000,
  spAllowance: 0,
  internetAllowance: 250,
  maintenance: 500,
  loyalty: 0,
  accomp: 0,
  arrears: 0,
  tds: 0,
  profTax: 200,
  adv: 0,
  other: 0,
  hra: 0,
  regular: 0,
  pf: 0,
  monthlyGross: 0,
  total: 0,
  monthlyNet: 0
};

// dummy data to fill-up the dropdown menu
const employees: Employee[] = [
  {
    emp_id: 'e001', name: 'Mohil', designation: 'Programmer Analyst', email: 'mohil@argusoft.com',
    bankAc: '123456', amount: loadAmounts
  },
  {
    emp_id: 'e002', name: 'Shailendra', designation: 'Business Analyst', email: 'shailendra@argusoft.com',
    bankAc: '123457', amount: loadAmounts
  },
  {
    emp_id: 'e003', name: 'Manshi', designation: 'Programmer Analyst', email: 'manshi@argusoft.com',
    bankAc: '123458', amount: loadAmounts
  },
  {
    emp_id: 'e004', name: 'Nimmi', designation: 'Programmer Analyst', email: 'nimmi@argusoft.com',
    bankAc: '123459', amount: loadAmounts
  },
  {
    emp_id: 'e005', name: 'Helisha', designation: 'Programmer Analyst', email: 'helisha@argusoft.com',
    bankAc: '123460', amount: loadAmounts
  },
  {
    emp_id: 'e006', name: 'Honey', designation: 'Programmer Analyst', email: 'honey@argusoft.com',
    bankAc: '123461', amount: loadAmounts
  }
];

@Component({
  selector: 'app-generate-payslip',
  templateUrl: './generate-payslip.component.html',
  styleUrls: ['./generate-payslip.component.css']
})
export class GeneratePayslipComponent implements OnInit {
  employees: Employee[];          // holds the retrieved employees
  selectedEmployee: Employee;     // selected employee
  amountHolder: Amounts;          // holds the amount entered in the form
  formControls = {};

  constructor() { }

  ngOnInit() {
    this.employees = employees;         // retrieve employees
    this.amountHolder = initAmounts;    // load form with the initial values

    const keys = Object.keys(this.amountHolder);
    for (const key of keys) {
      this.formControls[key] = new FormControl(this.amountHolder[key], [
        Validators.required,
        Validators.min(0)
      ]);
    }
  }

  // changes the values dispalyed in the form when selectedEmployee changes
  loadValues(): void {
    // this.amountHolder.basic = this.selectedEmployee.amount['basic'];
  }

  // update the results as values are changed in the form
  updateValues(): void {
    this.amountHolder.hra = Math.round(0.4 * this.amountHolder.basic);
    this.amountHolder.regular = Math.round(0.2 * this.amountHolder.basic);

    this.amountHolder.monthlyGross = this.amountHolder.basic + this.amountHolder.da
      + this.amountHolder.hra + this.amountHolder.conAllowance + this.amountHolder.medAllowance
      + this.amountHolder.telAllowance + this.amountHolder.spAllowance + this.amountHolder.internetAllowance
      + this.amountHolder.maintenance + this.amountHolder.regular + this.amountHolder.loyalty
      + this.amountHolder.accomp + this.amountHolder.arrears;

    this.amountHolder.pf = this.amountHolder.basic < 15001 ? (0.12 * this.amountHolder.basic) : 1800;

    this.amountHolder.total = this.amountHolder.tds + this.amountHolder.profTax + this.amountHolder.pf
      + this.amountHolder.adv + this.amountHolder.other;

    this.amountHolder.monthlyNet = this.amountHolder.monthlyGross - this.amountHolder.total;
  }
}