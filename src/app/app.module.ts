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
import { PersonnelDirectoryComponent } from './screens/about/personnel-directory/personnel-directory.component';
import { ProgramsComponent } from './screens/programs/programs.component';
import { ServicesOfferedComponent } from './screens/services-offered/services-offered.component';
import { BirthsComponent } from './screens/demographics/births/births.component';
import { MonthChartsComponent } from './components/month-charts/month-charts.component';
import { IncidenceChartsComponent } from './components/incidence-charts/incidence-charts.component';
import { TechnicalNotesComponent } from './components/technical-notes/technical-notes.component';
import { TotalComponent } from './screens/demographics/births/total/total.component';
import { SummaryComponent } from './screens/demographics/births/summary/summary.component';
import { DeathsComponent } from './screens/demographics/deaths/deaths.component';
import { MigrationsComponent } from './screens/demographics/migrations/migrations.component';
import { ChartsComponent } from './screens/demographics/migrations/charts/charts.component';
import { PmocComponent } from './screens/rpfp/pmoc/pmoc.component';
import { TotalsComponent } from './screens/rpfp/pmoc/totals/totals.component';
import { TeamComponent } from './screens/rpfp/pmoc/team/team.component';
import { MpcFdcComponent } from './screens/rpfp/mpc-fdc/mpc-fdc.component';
import { ListsComponent } from './screens/rpfp/mpc-fdc/lists/lists.component';
import { ShowComponent } from './screens/rpfp/mpc-fdc/show/show.component';
import { PersonnelsComponent } from './screens/rpfp/mpc-fdc/personnels/personnels.component';
import { TeenCentersComponent } from './screens/ahyd/teen-centers/teen-centers.component';
import { FocalPersonsComponent } from './screens/ahyd/teen-centers/focal-persons/focal-persons.component';
import { DistrictsComponent } from './screens/ahyd/teen-centers/districts/districts.component';
import { IssuesAndConcernsComponent } from './screens/ahyd/issues-and-concerns/issues-and-concerns.component';
import { PopulationProfileByMuncipalityComponent } from './screens/others/population-profile-by-muncipality/population-profile-by-muncipality.component';
import { AgeDistributionAndAgeDependencyRatioByMunicipalityComponent } from './screens/others/age-distribution-and-age-dependency-ratio-by-municipality/age-distribution-and-age-dependency-ratio-by-municipality.component';
import { SliderComponent } from './approvals/slider/slider.component';
import { ArticlesComponent } from './approvals/articles/articles.component';
import { AwardsComponent } from './approvals/awards/awards.component';
import { OfficialsComponent } from './approvals/officials/officials.component';
import { ProgramAreasComponent } from './approvals/program-areas/program-areas.component';
import { PmocApprovalsComponent } from './approvals/pmoc-approvals/pmoc-approvals.component';
import { MpcFdcApprovalsComponent } from './approvals/mpc-fdc-approvals/mpc-fdc-approvals.component';
import { AgeDistributionApprovalsComponent } from './approvals/age-distribution-approvals/age-distribution-approvals.component';

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
    PersonnelDirectoryComponent,
    ProgramsComponent,
    ServicesOfferedComponent,
    BirthsComponent,
    MonthChartsComponent,
    IncidenceChartsComponent,
    TechnicalNotesComponent,
    TotalComponent,
    SummaryComponent,
    DeathsComponent,
    MigrationsComponent,
    ChartsComponent,
    PmocComponent,
    TotalsComponent,
    TeamComponent,
    MpcFdcComponent,
    ListsComponent,
    ShowComponent,
    PersonnelsComponent,
    TeenCentersComponent,
    FocalPersonsComponent,
    DistrictsComponent,
    IssuesAndConcernsComponent,
    PopulationProfileByMuncipalityComponent,
    AgeDistributionAndAgeDependencyRatioByMunicipalityComponent,
    SliderComponent,
    ArticlesComponent,
    AwardsComponent,
    OfficialsComponent,
    ProgramAreasComponent,
    PmocApprovalsComponent,
    MpcFdcApprovalsComponent,
    AgeDistributionApprovalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
