import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
  /* Tab objects with properties 'name', 'state', and 'path' */
  tabs: Array<{name: string, state: string, path: string}> = [
    /* default active state is true for Home tab */
    {name: 'Home', state: 'active', path: ''},
    {name: 'Our Story', state: '', path: 'ourstory'},
    {name: 'Details', state: '', path: 'details'},
    {name: 'Gallery', state: '', path: 'gallery'},
    {name: 'Guest Book', state: '', path: 'guestbook'},
    {name: 'RSVP', state: '', path: 'rsvp'},
    {name: 'Travel', state: '', path: 'travel'},
    {name: 'Registry', state: '', path: 'registry'}
  ];


  constructor(private route: Router) {}

  ngOnInit(): void {
    console.log('Url route inside menu-bar-component ngOnInit() function: ' + this.route.url);
    //this.setActive();
  }

  ngAfterViewInit() {
    console.log('Url route inside menu-bar-component ngAfterViewInit() function: ' + this.route.url);
    //this.setActive();
  }

  ngAfterViewChecked() {
    console.log('Url route inside menu-bar-component ngAfterViewChecked() function: ' + this.route.url);
    //this.setActive();
  }
  
  ngAfterContentInit() {
    console.log('Url route inside menu-bar-component ngAfterContentInit() function: ' + this.route.url);
    //this.setActive();
  }

  ngAfterContentChecked() {
    console.log('Url route inside menu-bar-component ngAfterContentChecked() function: ' + this.route.url);
    //this.setActive();
  }

  ngOnDestroy() {
    console.log('Url route inside menu-bar-component ngOnDestroy() function: ' + this.route.url);
    //this.setActive();
  }

  setActive() {
    // set inital active tab
    for (var tab of this.tabs) {
      tab.state = '';

      // set current route's tab status to true
      if (('/' + tab.path) === this.route.url) {
        tab.state = 'active';
      }
    }
    console.log('setActive() called. Current URL: ' + this.route.url);
  }
}
