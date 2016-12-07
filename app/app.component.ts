import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html",
})
export class AppComponent {
  name = 'Angular';
  nameColor = "red";

  changeColor() { 
    this.nameColor = (this.nameColor === "red")? "blue" : "red";
  }


  customers = [
    { id: 1, name: "John" },
    { id: 2, name: "Ward" },
    { id: 3, name: "Bill" },
    { id: 4, name: "Elon" },
  ];
}
