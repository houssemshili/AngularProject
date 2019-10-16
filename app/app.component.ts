import { Component, OnInit, NgModule } from '@angular/core';
import { Contact} from './contact';
import { AlertService } from './alert.service';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  version = '1.0';

ngOnInit()
{

}

UpdateSelectedMenu(menu :string)
{
  this.currentMenu = menu;
  console.log(this.currentMenu);
}
currentMenu : string;
constructor(private alertService : AlertService)
{ 
}


}
