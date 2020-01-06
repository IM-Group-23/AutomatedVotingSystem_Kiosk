import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otpenter-page',
  templateUrl: './otpenter-page.page.html',
  styleUrls: ['./otpenter-page.page.scss'],
})
export class OTPEnterPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  moveFocus(event, nextElement, previousElement) {
    if (event.keyCode === 8 && previousElement) {
      previousElement.setFocus();
    } else if (event.keyCode >= 48 && event.keyCode <= 57) {
      if (nextElement) {
        nextElement.setFocus();
      }
    } else {
      event.path[0].value = '';
    }

  }

}
