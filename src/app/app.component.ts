import { AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PrimeNGConfig, MenuItem } from 'primeng/api';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  
  public items!: MenuItem[];
  public showMenu: boolean = false;

  constructor(private primengConfig: PrimeNGConfig, private login: LoginComponent) {
    this.login.showMenuEmitter.subscribe(
      show => this.showMenu = show
    )
  }
  
  ngOnInit(): void {
    this.primengConfig.ripple = true;


    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
        label:'Quit',
        icon:'pi pi-fw pi-power-off',
        command: (onclick) => {
          this.login.logout()
        } 
    }
  ];
  }

  public getShowMenu() {
    this.login.showMenuEmitter.subscribe(
      show => this.showMenu = show
    )
    return this.showMenu
  }
}
