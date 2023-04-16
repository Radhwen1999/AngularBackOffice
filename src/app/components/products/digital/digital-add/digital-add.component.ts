import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Product} from '../../../../models/product';
import {ProductService} from '../../../../services/product/product.service';

@Component({
  selector: 'app-digital-add',
  templateUrl: './digital-add.component.html',
  styleUrls: ['./digital-add.component.scss']
})


export class DigitalAddComponent implements OnInit {
  product: Product = new Product();
  public counter = 1;
  public Editor = ClassicEditor;
  constructor(private productService: ProductService) { }

  files: File[] = [];

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
  onSubmit() {
    this.productService.addProduct(this.product).subscribe(
        (product: Product) => {
          console.log('Product added successfully', product);
          // Reset the form
          this.product = new Product();
        },
        (error) => {
          console.error('Failed to add product', error);
        }
    );
  }
  ngOnInit() {
  }

}
