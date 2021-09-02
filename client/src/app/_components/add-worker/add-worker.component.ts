import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WorkersService } from 'src/app/_services/workers.service';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  zaposlenikForm: FormGroup;
  validationErrors: string[] = [];
  constructor(private workerService: WorkersService, private toastr: ToastrService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.zaposlenikForm = this.fb.group({
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      slika: ['', Validators.required],
      spol: ['', Validators.required],
      godinaRodenja: ['', Validators.required],
      pocetakRada: ['', Validators.required],
      vrstaUgovora: ['', Validators.required],
      trajanjeUgovora: ['', Validators.required],
      odjel:['',Validators.required]

    })
  }

  dodajZaposlenika(){
    this.workerService.dodajZaposlenika(this.zaposlenikForm.value).subscribe(response =>{
      this.toastr.success("Uspješno dodan zaposlenik");
      this.router.navigateByUrl('/zaposlenici');
    }, error =>{
        this.validationErrors = error;
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
