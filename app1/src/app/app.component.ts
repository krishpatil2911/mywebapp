import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';

  router:Router

  constructor(router: Router) {
    this.router = router
  }
  goToPage(page) {
    let url = ''
    switch (page) {
      case 1: url = '/product-list'; break;
      case 2: url = '/product-add'; break;
      case 3: url = '/category-list'; break;
      case 4: url = '/brand-list'; break;
      case 5: url = '/my-orders'; break;
      case 6: url = '/about-us'; break;
      default: break;
    }

    this.router.navigate([url])
  }
}
