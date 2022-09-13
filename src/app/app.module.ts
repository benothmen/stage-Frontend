import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FaculteComponent } from './pages/faculte/faculte.component';
import { LieuComponent } from './pages/lieu/lieu.component';
import { SpecialiteComponent } from './pages/specialite/specialite.component';
import { StageComponent } from './pages/stage/stage.component';
import { StagiaireComponent } from './pages/stagiaire/stagiaire.component';
import { TypeComponent } from './pages/type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    FaculteComponent,
    LieuComponent,
    SpecialiteComponent,
    StageComponent,
    StagiaireComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
