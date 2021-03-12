import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdHttpServiceService } from '../prod-http-service.service';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent implements OnInit {
  product: Object;

  constructor(
    private prodHttpServiceService: ProdHttpServiceService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      const productId = params.productId;
      if (productId) {
        this.getProdutDetail(productId);
      }
    });
  }

  getProdutDetail(id) {
    this.prodHttpServiceService.getProductDetails(id).subscribe((response) => {
      console.log(response);
      this.product = response;
    });
  }

}
