import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild("CollapseButton") collapseBtn : ElementRef | undefined;

  clickButton(){
    let navbar = document.getElementById('navbarNav');
    if (navbar!.classList.contains('show')) {
      this.collapseBtn?.nativeElement.click();
    }
}

}
