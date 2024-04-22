import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHeroSectionComponent } from './project-hero-section/project-hero-section.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectLayoutComponent } from './project-layout/project-layout.component';
import { SpecsComponent } from './specs/specs.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes : Routes = [

  {path : "**", component: ProjectLayoutComponent},

]

@NgModule({
  declarations: [
    ProjectHeroSectionComponent,
    ProjectLayoutComponent,
    SpecsComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectDetailsModule { }
