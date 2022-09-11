import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css'],
})
export class CalculateComponent implements OnInit {
  bill: any
  tipAmountPerPerson: any
  totalAmountPerPerson: any
  tip: any
  noOfPersons: any
  showErrorMessage: boolean = false

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.showErrorMessage = false
    this.bill = null
    this.tipAmountPerPerson = null
    this.totalAmountPerPerson = null
  }

  chooseTip(tip: any) {
    this.tip = tip
    this.calculateTipPerPerson()
  }

  enterPeople(person: any) {
    this.calculateTipPerPerson()
  }

  calculateTipPerPerson() {
    if (this.noOfPersons != undefined || this.noOfPersons != null) {
      this.showErrorMessage = false
      let a = this.tip / 100
      let b = a * this.bill
      this.tipAmountPerPerson = b / this.noOfPersons
      let c = this.bill - b
      this.totalAmountPerPerson = c / this.noOfPersons
    } else {
      this.showErrorMessage = true
    }
  }

  reset() {
    this.bill = null
    this.tip = null
    this.tipAmountPerPerson = null
    this.totalAmountPerPerson = null
    this.noOfPersons = null
    this.showErrorMessage = false
  }
}
