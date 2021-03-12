import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdHttpServiceService } from '../prod-http-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Object;
  searchText: string = '';
  constructor(
    private prodHttpServiceService: ProdHttpServiceService,
    private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.prodHttpServiceService.getProducts().subscribe((response) => {
      console.log(response);
      this.products = response;
    });
  }
  viewProductDescription(product) {
    const productId = product.id;
    this.router.navigate(['product-description',productId]);
  }

}
