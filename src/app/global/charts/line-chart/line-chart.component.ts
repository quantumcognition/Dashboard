import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  title = 'Age vs Weight';

  type='ScatterChart';

  data = [
     [8,12],
     [4, 5.5],
     [11,14],
     [4,5],
     [3,3.5],
     [6.5,7]
  ];

  columnNames = ['Age', 'Weight'];
  options = {   
    width: 550,
    height: 400
  };

  constructor() { }

  ngOnInit() {
    // map => 1{} => object values into array & push array into Parent Array 

  }

}
