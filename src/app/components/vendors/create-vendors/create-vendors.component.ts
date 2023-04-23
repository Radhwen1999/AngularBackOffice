import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import {Store} from '../../../models/store';
import {Product} from '../../../models/product';
import {StoreService} from '../../../services/store/store.service';

@Component({
  selector: 'app-create-vendors',
  templateUrl: './create-vendors.component.html',
  styleUrls: ['./create-vendors.component.scss']
})
export class CreateVendorsComponent implements OnInit {
  public accountForm: UntypedFormGroup;
  public permissionForm: UntypedFormGroup;
  public active = 1;
  store: Store = new Store();

  constructor(private formBuilder: UntypedFormBuilder, private storeService: StoreService) {
    this.createAccountForm();
    this.createPermissionForm();
  }

  createAccountForm() {
    this.accountForm = this.formBuilder.group({
      fname: [''],
      lname: [''],
      email: [''],
      password: [''],
      confirmPwd: ['']
    });
  }
  createPermissionForm() {
    this.permissionForm = this.formBuilder.group({
    });
  }


  ngOnInit() { }
  onSubmit() {
    this.storeService.addStore(this.store).subscribe(
        (store: Store) => {
          console.log('Store added successfully', store);
          // Reset the form
          this.store = new Store();
        },
        (error) => {
          console.error('Failed to add store', error);
        }
    );
  }
}
