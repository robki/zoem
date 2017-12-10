import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zm-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let numbers: Array<number>;
    numbers = [1, 2, 3]

    console.log(numbers);


   
    var minmonth = 1;
    var maxmonth = 12;
    let selectmonth = <HTMLInputElement>document.getElementById("month");
    for (var m = minmonth; m <= maxmonth; m++) {
      
      var optmonth = document.createElement('option');
      optmonth.value = 'm';
      optmonth.innerHTML = ""+m;
      selectmonth.appendChild(optmonth);
    }
  
    var maxday = 28;
    if (m % 2 == 0){
      maxday = 30
    }else{
      maxday = 31
    }
    var minday = 1;
    /*var maxday = 31;*/
    let select = <HTMLInputElement>document.getElementById("day");

    for (var i = minday; i <= maxday; i++) {
      
      var opt = document.createElement('option');
      opt.value = 'i';
      opt.innerHTML = ""+i;
      select.appendChild(opt);
    }
    var minyear = 1920;
    var maxyear = 2018;
    let selectyear = <HTMLInputElement>document.getElementById("year");
    for (var y = minyear; y <= maxyear; y++) {
      var optyear = document.createElement('option');
      optyear.value = 'y';
      optyear.innerHTML = ""+y;
      selectyear.appendChild(optyear);
    }
    //TODO change amount of days with month
    /*
    function getNumberOfDays(year, month) {
      var isLeap = ((year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0));
      return [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  }*/
  }
}


