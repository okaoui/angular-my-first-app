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
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  onCreationServer (){
    this.statusServerCreation = "Server created!";
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
