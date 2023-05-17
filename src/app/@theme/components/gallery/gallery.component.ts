import {Component, Input, OnInit} from '@angular/core';
import {Gallery} from "@core/data/galley";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() gallery: Gallery[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
