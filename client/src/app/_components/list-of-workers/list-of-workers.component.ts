import { Component, OnInit } from '@angular/core';
import { Zaposlenik } from 'src/app/_models/zaposlenik';
import { WorkersService } from 'src/app/_services/workers.service';

@Component({
  selector: 'app-list-of-workers',
  templateUrl: './list-of-workers.component.html',
  styleUrls: ['./list-of-workers.component.css']
})
export class ListOfWorkersComponent implements OnInit {
  zaposlenici: Zaposlenik[];

  constructor(private workerService: WorkersService) { 
    this.zaposlenici = [];
  }

  ngOnInit(): void {
    this.ucitajZaposlenike()
  }

  ucitajZaposlenike()
  {
    this.workerService.dohvatiZaposlenike().subscribe(zaposlenici=>{
      this.zaposlenici = zaposlenici;
    })
  }

}
