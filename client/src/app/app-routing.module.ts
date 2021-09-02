import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfWorkersComponent } from './_components/list-of-workers/list-of-workers.component';

const routes: Routes = [
  {path:'zaposlenici', component:ListOfWorkersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
