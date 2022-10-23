import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string;

  constructor() { }

  isDisabled(){
    return this.username === undefined || this.username.length === 0;
  }

  onReset(){
    this.username = "";
  }

  ngOnInit(): void {
  }

}
