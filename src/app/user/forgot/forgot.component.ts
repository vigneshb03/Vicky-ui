import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login()
  {
    return this.router.navigate([''])
  }
}
