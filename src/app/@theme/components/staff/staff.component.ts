import {Component, Input, OnInit} from '@angular/core';
import {Staff} from "@core/data/events";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  @Input() staffMember: Staff | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
