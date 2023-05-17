import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@core/data/events";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input() location: Location

  constructor() { }

  ngOnInit(): void {
  }

}
