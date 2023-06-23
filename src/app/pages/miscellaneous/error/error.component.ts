import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {errors, Error} from "@core/data/errors"

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  code: number;
  error: Error;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    if (this.route.snapshot.queryParams['code']) {
      this.code = this.route.snapshot.queryParams['code'];
      this.error = errors[this.code]
    }

    if (this.route.snapshot.queryParams['message']) {
      this.error.message = this.route.snapshot.queryParams['message'];
    }
  }

}
