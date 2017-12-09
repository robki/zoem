import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zm-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*var num: number = 5;
    var i: number;
    var factorial = 1;

       for(i = num;i>=1;i--) {
          console.log(i);
          return `<select><option id="test">i</option></select>`;
      } */
    /*  var nums = new Array(12, 13, 14, 15); 
     console.log("Printing original array......"); 
     
     for (var i = 0; i < nums.length; i++) { 
        return `<select><option id="test">i</option></select>`
     }  */
  
  let numbers:Array<number>;
  numbers = [1,2,3]

  console.log(numbers);
  
  
    }
}


