import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang-data-binding';
  //string interpolation//string data type
  userName = 'john doe';
  name = 'sanjana awachat!!!';
  //msg
  msg = 'hello team good morning!!!!!!!!!!';
  //number
  age = 23;
  city = 'Nagpur!!!';
  //String Concatenation
  fname = 'snehabj';
  lname = 'asesdsfgwqjj';
  //string length
  msgs = 'hello angular!!!!!!';

  // Uppercase & Lowercase

  text = 'hello angular 14!!!!!!!';

  //string function
  getmsg() {
    return 'hello angular!!!!!!!';
  }

  //String Condition
  status = 'success';

  //<!-- //String Index Access -->

  word = 'Angular';
  //Combine Multiple Strings -->
  brand: string = 'Tata';
  product: string = 'Car';
  fruits: string = 'apple';

  college = 'RTMNU Nqgpur university!!!';

  showmsg = 'maths';
  // Combine city + state
  state = 'Maharashtra!!';

  // Show first and last letter of a string
  //Convert string to uppercase -->

  institute = 'tuc batch 20';

  ////property binding
  employee = 'Sanjana Awacaht!!!';
  imgUrl = 'https://via.placeholder.com/150';
  isDisabled = true;
  isActive = true;
  bgColor = 'red';
  boxWidth = '200px';
  message='helllo team!!!!!!!!!';


  //Event Binding in Angular

// Definition:
// Event binding is used to handle user actions (like click, input, mouse events) and call a method from the component.

//  Key Points
// Uses parentheses ( )
// Data flows from view → component
// Used to handle user interactions
// Can pass values or events using $event
// Works with click, input, change, mouseover, keyup, etc.
// Common Events
// (click)
// (input)
// (change)
// (mouseover)
// (keyup)
// (keydown)
// (submit)


}
