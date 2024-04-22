import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHeroSectionComponent } from './project-hero-section/project-hero-section.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [

  {path : "**", component: ProjectHeroSectionComponent},

]

@NgModule({
  declarations: [
    ProjectHeroSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectDetailsModule { }
