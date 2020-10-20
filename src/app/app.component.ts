import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="Shagnea to Garcia";

  ngOnInit(): void {
    console.log('executing ngOnInit() for app-component...');
  }
}
