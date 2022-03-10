import { Component } from "@angular/core";

@Component({
    selector: 'app-displaynumber',
    templateUrl: './displaynumber.component.html',
    styles: [`
    .whiteNumber {
        color: white;
    }`]
})

export class DisplayNumber {

  displayDetails = false;
  incrementingNumber = []

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails
    // return this.incrementingNumber.push(this.incrementingNumber.length + 1)

    // looping with index
    return this.incrementingNumber.push(new Date())
  }

}
