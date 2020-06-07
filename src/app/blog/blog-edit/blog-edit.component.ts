import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/_services';
import { BlogService } from 'src/app/_services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';


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
  editorContent: string = ""
  blogId: any;
  constructor(

    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private blogService: BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {

    this.blogId = this.activatedRoute.snapshot.paramMap.get('blogId');
    if (this.blogId) {
      // then update
      this.getBlog()

    }
    // else it is create new one

  }
  getBlog() {

    this.blogService.getBlogById(this.blogId).subscribe(blog => {
      this.blogForm.patchValue({ name: blog.name, description: blog.description })
    })

  }

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
    if (!this.blogId) {
      // create new one

      this.blogService.postBlog({ name: this.blogForm.value.name, description: this.blogForm.value.description }).subscribe(data => {
        this.router.navigate(['/blog/']);
      }, err => {
        this.alertService.error(err);
        this.loading = false;
      })
    }
    else {
      // update the current
      this.blogService.postBlog({ name: this.blogForm.value.name, description: this.blogForm.value.description }).subscribe(data => {
        this.router.navigate(['/blog/']);
      }, err => {
        // fail
        this.alertService.error(err);
        this.loading = false;

      })
    }

  }


}
