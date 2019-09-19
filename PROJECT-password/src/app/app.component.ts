import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  text: string = '';
  status: boolean = false;

  title = 'PROJECT-password';
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
    'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }
  onSubmit() {
    console.log(this.form);
  }

}

