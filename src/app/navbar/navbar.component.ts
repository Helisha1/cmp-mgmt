import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  changeTheme(id) {
    const theme = document.getElementById('themeCss');

    switch (id) {
      case 'a': theme.setAttribute('href', 'assets/prebuilt-themes/indigo-pink.css'); break;
      case 'b': theme.setAttribute('href', 'assets/prebuilt-themes/deeppurple-amber.css'); break;
      // case 'c': theme.setAttribute('href', 'assets/prebuilt-themes/pink-bluegrey.css'); break;
      // case 'd': theme.setAttribute('href', 'assets/prebuilt-themes/purple-green.css');
    }
  }
}
