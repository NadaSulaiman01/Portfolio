import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHeroSectionComponent } from './project-hero-section/project-hero-section.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectLayoutComponent } from './project-layout/project-layout.component';
import { SpecsComponent } from './specs/specs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from '../notfound/notfound.component';

const routes : Routes = [

  {path : "project/:pid", component: ProjectLayoutComponent},
  {path: "", component:NotfoundComponent}

]

@NgModule({
  declarations: [
    ProjectHeroSectionComponent,
    ProjectLayoutComponent,
    SpecsComponent,
    GalleryComponent
  ],
  imports: [
    FormsModule,
    NgbCarouselModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectDetailsModule { }
