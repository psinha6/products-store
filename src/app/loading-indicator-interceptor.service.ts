import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingIndicatorService } from './loading-indicator.service';
import { finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorInterceptorService implements HttpInterceptor {

  constructor(
    private loadingIndicatorService: LoadingIndicatorService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingIndicatorService.show();
    return next.handle(req).pipe(finalize(() => this.loadingIndicatorService.hide()));
  }
}

