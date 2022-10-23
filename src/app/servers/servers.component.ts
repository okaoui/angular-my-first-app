import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //     <app-server>
  //     </app-server>
  //     `,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  statusServerCreation = "No server created yet";
  serverName = "";
  serverCreated = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  onCreationServer (){
    this.serverCreated = true;
    this.statusServerCreation = "Server created! it's name is "+ this.serverName;
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
