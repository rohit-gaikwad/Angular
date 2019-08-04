import { Component } from '@angular/core';
import { SelectorContext } from '@angular/compiler';


@Component({
    selector: 'app-server',
   //selector:'[app-server]'  //to convert component in html atrribute
//selector:'.app.server',    //to convert componenet into html class
    templateUrl:'./server.component.html'
})
export class ServerComponent{

    serverId : number=10;
    serverStatus: String='online';
    buttonStatus : Boolean= false;

constructor()
{
    setTimeout(() => { this.buttonStatus=true;}, 2000);
}

     getServerStatus ()
    {
        return this.serverStatus;
    }

}