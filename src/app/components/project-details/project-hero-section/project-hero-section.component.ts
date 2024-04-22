import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Ispecs } from 'src/app/models/ispecs';
import { ConcreteProjects } from 'src/app/models/concrete-projects';

@Component({
  selector: 'app-project-hero-section',
  templateUrl: './project-hero-section.component.html',
  styleUrls: ['./project-hero-section.component.css']
})
export class ProjectHeroSectionComponent implements OnInit ,OnChanges {


  @Input() projectId: Number |undefined;
  project : Ispecs | any;

  ngOnInit(): void {
    let result = ConcreteProjects.getProject(this.projectId!);
    this.project = result;

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
