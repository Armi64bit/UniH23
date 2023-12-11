

// bloc.model.ts

export class Bloc {
  idBloc: number = 0;
  nomBloc: string = '';
  capacityBloc: number = 0;
  foyer: { idFoyer: number; nomFoyer: string } = { idFoyer: 0, nomFoyer: '' };

  constructor() {

     this.idBloc = 0;
     this.nomBloc = '';
     this.capacityBloc = 0;
     this.foyer = { idFoyer: 0, nomFoyer: '' };
  }
}

