import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Foyer } from 'src/app/models/foyer.model';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.css']
})
export class UpdateFoyerComponent {
  // In this component, the @Input() decorator is used to receive the selectedFoyer from the parent component.
  @Input() selectedFoyer: Foyer | undefined;
  updatedFoyerName: string = '';
  updatedFoyerCapacity: number = 0;

  constructor(private foyerService: FoyerService, private modalService: NgbModal) {}

  ngOnInit(): void {
    // Initialize the input fields with current values when the component is initialized
    if (this.selectedFoyer) {
      this.updatedFoyerName = this.selectedFoyer.nomFoyer;
      this.updatedFoyerCapacity = this.selectedFoyer.capaciteFoyer;
    }
  }
  isCapacityValid(): boolean {
    const trimmedCapacity = this.updatedFoyerCapacity.toString().trim();
    const isNumeric = /^\d+$/.test(trimmedCapacity);
    const numericValue = +trimmedCapacity; // Convert to numeric value
  
    return isNumeric && numericValue >= 0 && numericValue <= 1000;
  }
  
  
  updateFoyer(): void {
    if (this.selectedFoyer) {
      // Update the foyer details using the service
      this.selectedFoyer.nomFoyer = this.updatedFoyerName;
      this.selectedFoyer.capaciteFoyer = this.updatedFoyerCapacity;

      this.foyerService.editFoyer(this.selectedFoyer).subscribe(
        (updatedFoyer: any) => {
          console.log('Foyer updated successfully:', updatedFoyer);
          this.close();
        },
        (error: any) => {
          console.error('Error updating foyer:', error);
        }
      );
    }
  }

  close(): void {
    this.modalService.dismissAll();
  }

}

