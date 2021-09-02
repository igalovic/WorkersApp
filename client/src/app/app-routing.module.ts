import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWorkerComponent } from './_components/add-worker/add-worker.component';
import { ListOfWorkersComponent } from './_components/list-of-workers/list-of-workers.component';
import { WorkerDetailComponent } from './_components/worker-detail/worker-detail.component';

const routes: Routes = [
  {path:'',component:ListOfWorkersComponent},
  {path:'zaposlenici', component:ListOfWorkersComponent},
  {path:'zaposlenici/:id',component:WorkerDetailComponent},
  {path:'dodajZaposlenika',component:AddWorkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
