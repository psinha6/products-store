import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingIndicatorService } from './loading-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLoader = false;
  constructor(
    private router: Router,
    private loadingIndicatorService: LoadingIndicatorService
    ) {}
  title = 'Products Store';

  ngOnInit() {
    this.loadingIndicatorService.showLoader.subscribe((data) => {
      this.showLoader = data;
    });
  }

  home() {
    console.log('home');
    this.router.navigate(['']);
  }

}
