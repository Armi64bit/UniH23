import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent {

  constructor(private yourComponent: AppComponent) {}

  ngOnInit() {
    // Hide the navigation bar in the other component
    this.yourComponent.showNavBar = false;
  }

}
