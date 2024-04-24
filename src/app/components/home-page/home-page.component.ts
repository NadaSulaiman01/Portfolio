import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((data) =>{
      this.scrollToSection(data);
      }
    );
   
  }

  scrollToSection(section : any){
    const element = document.getElementById(section);
  if (element) {
    const rect = element.getBoundingClientRect();
    let offset = 80;
    if(section == "home"){
      offset = 200;
    }
    const y = rect.top + window.pageYOffset - offset;
    window.scrollTo({top: y, behavior: 'smooth'});
    this.router.navigate([]);
  }
  }

}
