import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export const navbarData=[
  {
    routeLink:'dashboard',
    icon:'fa fa-home',
    label:'Dashboard'
  },
  {
    routeLink:'coupens',
    icon:'fa fa-face',
    label:'Coupens'
  },
  {
    routeLink:'security',
    icon:'fa fa-lock',
    label:'Security'
  },
  {
    routeLink:'products',
    icon:'fa fa-eye',
    label:'products'
  },
  {
    routeLink:'settings',
    icon:'fa fa-logout',
    label:'Authentication setup'
  },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<Boolean>();
menuStatus : boolean=false;
searchData:any;
  constructor() { }
  navData=navbarData;

  ngOnInit(): void {
  }
  sideNavToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus)
  }
}
