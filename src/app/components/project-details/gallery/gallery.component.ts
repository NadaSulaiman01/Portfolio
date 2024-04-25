import { KeyValue } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ConcreteProjects } from 'src/app/models/concrete-projects';
import { Ispecs } from 'src/app/models/ispecs';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() projectId: Number |undefined;
  project : Ispecs | any;

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;


  ngOnInit(): void {
    let result = ConcreteProjects.getProject(this.projectId!);
    this.project = result;

  }

  
	togglePaused() {
		if (this.paused) {
			this.carousel!.cycle();
		} else {
			this.carousel!.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}



}
