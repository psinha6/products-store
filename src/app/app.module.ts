import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { FilterPipe } from './filter.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { LoadingIndicatorInterceptorService } from './loading-indicator-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductDescComponent,
    FilterPipe,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingIndicatorInterceptorService,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
