import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ConcreteProjects } from 'src/app/models/concrete-projects';
import { Ispecs } from 'src/app/models/ispecs';

@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.css']
})
export class SpecsComponent implements OnInit {
  isTabOneOpen : boolean = true;
  isTabTwoOpen : boolean = false;

  
  @Input() projectId: Number |undefined;
  project : Ispecs | any;

  ngOnInit(): void {
    let result = ConcreteProjects.getProject(this.projectId!);
    this.project = result;

  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

}
