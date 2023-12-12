import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Foyer } from 'src/app/models/foyer.model';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-delete-foyer',
  templateUrl: './delete-foyer.component.html',
  styleUrls: ['./delete-foyer.component.css']
})
export class DeleteFoyerComponent {
  // In this component, the @Input() decorator is used to receive the selectedFoyer from the parent component.
  @Input() selectedFoyer: Foyer | undefined;

  constructor(private foyerService: FoyerService, private modalService: NgbModal) {}

  deleteFoyer(): void {
    if (this.selectedFoyer) {
      // Delete the foyer using the service
      this.foyerService.deleteFoyer(this.selectedFoyer.idFoyer).subscribe(
        () => {
          console.log('Foyer deleted successfully');
          this.close();
        },
        (error: any) => {
          console.error('Error deleting foyer:', error);
        }
      );
    }
  }

  close(): void {
    this.modalService.dismissAll();
  }
}
