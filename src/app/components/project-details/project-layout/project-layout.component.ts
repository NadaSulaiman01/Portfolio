import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcreteProjects } from 'src/app/models/concrete-projects';

@Component({
  selector: 'app-project-layout',
  templateUrl: './project-layout.component.html',
  styleUrls: ['./project-layout.component.css']
})
export class ProjectLayoutComponent implements OnInit {

  projectId: number | undefined;



  constructor(private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let term = params['pid'];
      if (term) {
        if (Number.isNaN(term)) {
          this.router.navigateByUrl('');
        }
        else {
          this.projectId = term;
          let result: any = ConcreteProjects.getProject(term);
          if (result == undefined) {
            this.router.navigateByUrl('');
          }
          else {
            this.projectId = result.projectId;
            // window.scrollTo(0, 0);
          }
        }
      }
      else{
        this.router.navigateByUrl('');
      }


    })

  }

}
