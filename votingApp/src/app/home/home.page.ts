import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 

  showImage = true;
   
 

  constructor(private router: Router) {}

ngOnInit() {
    // do init at here for current route.

    setTimeout(() => {
        this.router.navigate(['/login']);
    }, 4000);
   }

  onClicked() {

  }

  gotoNext(){
    this.router.navigate(['/login']);
  }
  
}
