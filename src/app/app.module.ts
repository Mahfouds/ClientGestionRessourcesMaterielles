import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PagesErrorComponent } from './pages-error/pages-error.component';
import { RouterModule } from '@angular/router';
import { BesoinComponent } from './departement/besoin/besoin.component';
import { BesoinComponentResponsable } from './pages/responsbale/besoin/besoin.component';
import { ChefComponent } from './departement/chef/chef.component';
import { DepartementComponent } from './departement/departement.component';
import { EnsignantComponent } from './departement/ensignant/ensignant.component';
import { ServiceDeMaintenanceComponent } from './service-de-maintenance/service-de-maintenance.component';
import { AjouterConstatComponent } from './service-de-maintenance/ajouter-constat/ajouter-constat.component';
import { PannesComponent } from './service-de-maintenance/pannes/pannes.component';
import { ListeConstatsComponent } from './service-de-maintenance/liste-constats/liste-constats.component';
import { CompteComponent } from './compte/compte.component';
import { ProfileComponent } from './profile/profile.component';
import { JwtInterceptor } from './Utils/JwtInterceptor';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menuRespo/menu.component';
import { DashboardComponent } from './pages/dashboardRespo/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FournisseursComponent } from './pages/responsbale/fournisseurs/fournisseurs.component';
import { PropositionsComponent } from './pages/responsbale/propositions/propositions.component';
import { ListenoirComponent } from './pages/responsbale/listenoir/listenoir.component';
import { EnregistererMatComponent } from './pages/responsbale/enregisterer-mat/enregisterer-mat.component';
import { GestionRessourcesComponent } from './pages/responsbale/gestion-ressources/gestion-ressources.component';
import { ResponsbaleComponent } from './pages/responsbale/responsbale.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesErrorComponent,
    DepartementComponent,
    EnsignantComponent,
    BesoinComponent,
    ChefComponent,
    ServiceDeMaintenanceComponent,
    AjouterConstatComponent,
    PannesComponent,
    ListeConstatsComponent,
    CompteComponent,
    ProfileComponent,
    BesoinComponentResponsable,
    MenuComponent,
    DashboardComponent,
    HeaderComponent,
    FournisseursComponent,
    PropositionsComponent,
    ListenoirComponent,
    ResponsbaleComponent,
    EnregistererMatComponent,
    BesoinComponent,
    GestionRessourcesComponent
    
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
