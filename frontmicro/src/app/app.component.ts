import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unihaven';
  showNavBar = true; // Set it to false when you want to hide the navigation bar


  showEtudiantsOptions = false;
  showchOptions: boolean = false;
  showblOptions: boolean = false;
  showfoOptions: boolean = false;

    toggleEtudiants(): void {
        this.showEtudiantsOptions = !this.showEtudiantsOptions;
    }
    togglech(): void {
      this.showchOptions = !this.showchOptions;
  }togglebloc(): void {
    this.showblOptions = !this.showblOptions;
}
togglef(): void {
  this.showfoOptions = !this.showfoOptions;
}
}
