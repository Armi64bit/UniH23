import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Foyer } from 'src/app/models/foyer.model';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-foyer-list',
  templateUrl: './foyer-list.component.html',
  styleUrls: ['./foyer-list.component.css']
})
export class FoyerListComponent {
  capacity: number = 0; // or any default value that makes sense
  foyers: Foyer[] = [];

  constructor(private foyerService: FoyerService) {}
  
  retrieveFoyersByCapacity(): void {
    this.foyerService.getFoyersByCapacity(this.capacity).subscribe(
      (data) => {
        this.foyers = data;
      },
      (error) => {
        console.error('Error fetching foyers', error);
      }
    );
  }


}
