import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaculteComponent } from './pages/faculte/faculte.component';
import { LieuComponent } from './pages/lieu/lieu.component';
import { SpecialiteComponent } from './pages/specialite/specialite.component';
import { StageComponent } from './pages/stage/stage.component';
import { StagiaireComponent } from './pages/stagiaire/stagiaire.component';
import { TypeComponent } from './pages/type/type.component';

const routes: Routes = [
  {path : "faculte", component : FaculteComponent},
  {path : "stage-type", component : TypeComponent},
  {path : "specialite", component : SpecialiteComponent},
  {path : "lieu", component : LieuComponent},
  {path : "stage", component : StageComponent},
  {path : "stagiaire", component : StagiaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
