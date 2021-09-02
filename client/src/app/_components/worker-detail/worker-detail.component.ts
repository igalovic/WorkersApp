import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Zaposlenik } from 'src/app/_models/zaposlenik';
import { WorkersService } from 'src/app/_services/workers.service';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit {
  @ViewChild('editForm') editForm:NgForm;
  zaposlenik:Zaposlenik;

  constructor(private workerService:WorkersService, private route:ActivatedRoute, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.ucitajZaposlenika();
  }

  ucitajZaposlenika(){
    this.workerService.dohvatiZaposlenika(this.route.snapshot.params['id']).subscribe(zaposlenik=>{
      this.zaposlenik = zaposlenik;
    })
  }

  azurirajZaposlenika(){
    this.workerService.azurirajZaposlenika(this.zaposlenik).subscribe(()=> {
      this.toastr.success('Zaposlenik uspješno ažuriran');
      this.editForm.reset(this.zaposlenik);
    })
  }

}
