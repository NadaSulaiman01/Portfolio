import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectHeroSectionComponent } from './components/project-details/project-hero-section/project-hero-section.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path: "project", loadChildren: () => import('src/app/components/project-details/project-details.module').then(m => m.ProjectDetailsModule)},
  {path: "**", component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
