import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // Déclare le composant principal
  ],
  imports: [
    BrowserModule // Importe les modules nécessaires
  ],
  providers: [], // Ajouter ici les services si nécessaires
  bootstrap: [AppComponent] // Définit le composant à démarrer
})
export class AppModule { }
