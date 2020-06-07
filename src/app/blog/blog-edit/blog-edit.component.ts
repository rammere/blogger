import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/_services';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {

  blogForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(

    private formBuilder: FormBuilder,
    private alertService: AlertService

  ) { }

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
  });
  }
  get f() { return this.blogForm.controls; }
  onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.blogForm.invalid) {
            return;
        }

        this.loading = true;
        // this.authenticationService.login(this.f.username.value, this.f.password.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }


}
