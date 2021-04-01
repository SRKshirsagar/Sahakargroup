import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { StrengthComponent } from './components/strength/strength.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { GovernmentContarctComponent } from './components/government-contarct/government-contarct.component';
import { ToursComponent } from './components/tours/tours.component';
import { RouterModule ,Route } from '@angular/router';

const  appRoute:Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'about'
    ,component : AboutComponent

  },
  {
    path : 'strength',
    component : StrengthComponent
  },
  {
    path : 'service',
    component : ServiceComponent
  },
  {
    path : 'warehouse',
    component : WarehouseComponent
  },
  {
    path : 'government-contarct',
    component : GovernmentContarctComponent
  },
  {
    path : 'tours',
    component : ToursComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    StrengthComponent,
    WarehouseComponent,
    GovernmentContarctComponent,
    ToursComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
      
        // path: '',
        // component: AppComponent
      
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
