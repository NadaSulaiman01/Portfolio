import { Component } from '@angular/core';
import { Iproject } from 'src/app/models/iproject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects : Iproject[] | undefined; 

  /**
   *
   */
  constructor() {
    this.projects = [{
      projectId: 0,
      title: "Online Bookstore",
      description: `An e-commerce website that enables businesses to sell products and services.
      It features a user-friendly interface for customers to browse, select, and purchase items.
       Each product has a detailed description, price, and image.<br>
        The site offers secure payment options and order tracking feature.<br>
         Also, it includes an admin dashboard for effective inventory management and order processing.`,
      imageURL: 'https://res.cloudinary.com/dhazmjqap/image/upload/v1713594719/monitor2_fhllrd.png'
    },
    {
      projectId: 1,
      title: "Internet Movies Database",
      description: `A dynamic web-based platform designed for movie enthusiasts.
       It offers a vast collection of movies with detailed information, including ratings, plot and cast details.
        Users can review the movies and check other users' reviews.<br>
         The platform also features an admin dashboard for content and review management.<br>
          The website uses a cloud-based image and video management service for efficient media handling, which ensures high performance and scalability.`,
      imageURL: 'https://res.cloudinary.com/dhazmjqap/image/upload/v1713597150/monitor_zsggy8.png'
    }
  ];
    
  }

}
