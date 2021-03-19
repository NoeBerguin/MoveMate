import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  hours: number = 0;
  weekend:boolean = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  events: string = '';

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.events = `${event.value}`;
    if(this.events[0]==="S"){
      this.weekend= true;
    }else{
      this.weekend= false;
    }
    console.log(`${event.value}` , this.weekend);
  }

  onChange(event: MatSliderChange): void {
    this.hours = event.value;
    console.log(this.hours);
  }

  calculPrice():number{
    if(this.weekend){
      return this.hours*150;
    }
    return this.hours*100;
  }

}
