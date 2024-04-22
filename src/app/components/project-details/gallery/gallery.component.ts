import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ConcreteProjects } from 'src/app/models/concrete-projects';
import { Ispecs } from 'src/app/models/ispecs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() projectId: Number |undefined;
  project : Ispecs | any;

  ngOnInit(): void {
    let result = ConcreteProjects.getProject(this.projectId!);
    this.project = result;

  }



}
