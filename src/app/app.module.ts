import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { Page404Component } from './pages/page404/page404.component';
import { Page500Component } from './pages/page500/page500.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainHeaderComponent } from './headers/main-header/main-header.component';
import { HomeHeaderComponent } from './headers/home-header/home-header.component';
import { HomeComponent } from './screens/home/home.component';
import { FeaturedArticlesComponent } from './screens/home/featured-articles/featured-articles.component';
import { CarouselComponent } from './screens/home/carousel/carousel.component';
import { QuickLinksComponent } from './screens/home/quick-links/quick-links.component';
import { PopulationComponent } from './screens/population/population.component';
import { PopulationPyramidComponent } from './screens/population/population-pyramid/population-pyramid.component';
import { PopulationProfileComponent } from './screens/population/population-profile/population-profile.component';
import { TopPopulatedComponent } from './screens/population/top-populated/top-populated.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SpComponent } from './components/officials/sp/sp.component';
import { MunicipalComponent } from './components/officials/municipal/municipal.component';
import { BarangayComponent } from './components/officials/barangay/barangay.component';
import { MunicipalitiesComponent } from './components/filters/municipalities/municipalities.component';
import { ProvincesComponent } from './components/filters/provinces/provinces.component';
import { BarangaysComponent } from './components/filters/barangays/barangays.component';
import { MapComponent } from './components/filters/map/map.component';
import { MandateComponent } from './screens/about/mandate/mandate.component';
import { VmgComponent } from './screens/about/vmg/vmg.component';
import { CoreValuesComponent } from './screens/about/core-values/core-values.component';
import { OrgStructureComponent } from './screens/about/org-structure/org-structure.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Page404Component,
    Page500Component,
    SidebarComponent,
    MainHeaderComponent,
    HomeHeaderComponent,
    HomeComponent,
    FeaturedArticlesComponent,
    CarouselComponent,
    QuickLinksComponent,
    PopulationComponent,
    PopulationPyramidComponent,
    PopulationProfileComponent,
    TopPopulatedComponent,
    FiltersComponent,
    SpComponent,
    MunicipalComponent,
    BarangayComponent,
    MunicipalitiesComponent,
    ProvincesComponent,
    BarangaysComponent,
    MapComponent,
    MandateComponent,
    VmgComponent,
    CoreValuesComponent,
    OrgStructureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
