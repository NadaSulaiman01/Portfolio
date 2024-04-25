import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  showCopyIcon = false;
  isCopied = false;

  constructor(private _clipboardService: ClipboardService) {}

  copyEmail() {
    this._clipboardService.copy("nadamohkh@gmail.com");
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 2000); // Reset the copied status after 2 seconds
  }
}
