import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHeroSectionComponent } from './project-hero-section.component';

describe('ProjectHeroSectionComponent', () => {
  let component: ProjectHeroSectionComponent;
  let fixture: ComponentFixture<ProjectHeroSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectHeroSectionComponent]
    });
    fixture = TestBed.createComponent(ProjectHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
