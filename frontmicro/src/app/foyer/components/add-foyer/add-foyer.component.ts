import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Foyer } from 'src/app/models/foyer.model';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-add-foyer',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.css']
})
export class AddFoyerComponent implements OnInit {


  newFoyer: Foyer = {
    idFoyer: 0,  // Provide a default value for idFoyer, or modify as needed
    nomFoyer: '',
    capaciteFoyer: 0,
    blocList: [],
    universite: {
        idUniversite: 0,  // Provide a default value for idUniversite, or modify as needed
        nomUniversite: '',
        adresse: ''
    }
};

foyerForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,private foyerService: FoyerService, public modal: NgbActiveModal) {}
  
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.foyerForm = this.fb.group({
      nomFoyer: ['', Validators.required],
      capaciteFoyer: [0, [Validators.required, this.validateNumber]],
    });
  }
  validateNumber(control: AbstractControl): { [key: string]: any } | null {
    const value = Number(control.value); // Convert value to number
    console.log('Validating number:', value);
  
    if (isNaN(value) || value < 0 || value > 1000 || !Number.isInteger(value)) {
      return { 'invalidNumber': true };
    }
  
    return null;
  }
  

  onSubmit(): void {
    const capaciteFoyerControl = this.foyerForm.get('capaciteFoyer');

    if (this.foyerForm.valid && capaciteFoyerControl) {
      const newFoyer: Foyer = {
        idFoyer: 0,
        nomFoyer: this.foyerForm.value.nomFoyer,
        capaciteFoyer: capaciteFoyerControl.value,
        blocList: [],
        universite: {
          idUniversite: 0,
          nomUniversite: '',
          adresse: ''
        }
      };

      const headers = { 'Content-Type': 'application/json' };

      this.foyerService.addFoyer(newFoyer, headers).subscribe(
        (foyer) => {
          console.log('Foyer added successfully:', foyer);
          this.modal.close('Foyer added successfully');
        },
        (error) => {
          console.error('Error adding foyer:', error);
          // Handle error and display appropriate message
        }
      );
    }
  }

}

