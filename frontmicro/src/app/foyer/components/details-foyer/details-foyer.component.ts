import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Foyer } from 'src/app/models/foyer.model';

@Component({
  selector: 'app-details-foyer',
  templateUrl: './details-foyer.component.html',
  styleUrls: ['./details-foyer.component.css']
})
export class DetailsFoyerComponent {
  // In this component, the @Input() decorator is used to receive the selectedFoyer from the parent component.
  @Input() selectedFoyer: Foyer | undefined;

  constructor(private modalService: NgbModal) {}

 // Open details Foyer modal
 openDetails(targetModal: any, p: Foyer) {
  console.log('Details modal opened for:', this.selectedFoyer);
  this.selectedFoyer = p;
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });

  // Set the values of the input fields in the modal
  const nomInput = document.getElementById('nomFoyer1') as HTMLInputElement;
  const capaciteInput = document.getElementById('capaciteFoyer1') as HTMLInputElement;
  const blocsInput = document.getElementById('blocs1') as HTMLInputElement;

  nomInput.value = p.nomFoyer;
  capaciteInput.value = p.capaciteFoyer.toString(); // Convert quantity to a string
  blocsInput.value = p.blocList.map(bloc => bloc.nomBloc).join(', ');
}

// Close modal
close(): void {
  this.modalService.dismissAll();
}
}
