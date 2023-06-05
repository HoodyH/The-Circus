import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";

export interface Option {
  id: number;
  value: string;
}


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() label: string;
  @Input() options: Option[] = [];
  @Output() valueSelected = new EventEmitter<Option | null>();

  valueControl = new FormControl();
  showDropdown: boolean = false;
  selectedValue: Option | null = null;
  filteredOptions: Option[] = [];

  @ViewChild('valueInput') inputElement!: ElementRef;

  ngOnInit() {
    this.valueControl.valueChanges.subscribe((value: string) => {
      if (value.length >= 1) {
        this.filteredOptions = this.filterOptions(value);
        this.showDropdown = true;
      } else {
        this.filteredOptions = this.options;
        this.showDropdown = false;
      }
    });
  }

  filterOptions(value: string): Option[] {
    return this.options.filter((option: Option) => {
      return option.value.toLowerCase().includes(value.toLowerCase());
    });
  }


  selectName(option: Option) {
    this.selectedValue = option;
    this.valueControl.disable();
    this.valueControl.setValue(this.selectedValue.value);
    this.valueSelected.emit(option);
    this.showDropdown = false;
  }

  clearName() {
    this.valueControl.setValue('');
    this.selectedValue = null;
    this.valueControl.enable();
    this.valueSelected.emit(null);
  }
}
