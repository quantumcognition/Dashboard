import { Component, OnInit } from '@angular/core';
import { GetterService } from '../../../services/getter.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  types = 'BubbleChart';

  data = [
     ['Firefox', 45.0],
     ['IE', 26.8],
     ['Chrome', 12.8],  
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7] 
  ];
  
  columnNames = ['Browser', 'Percentage'];
  options = { colors: ['#003F5C', '#58508D', '#BC5090', '#FF6361', '#FFA600'], is3D: true,
  width: 550,
  height: 400
  };
  
  constructor( GetterService: GetterService) { }

  ngOnInit() {
    
  }

  get(){
    
  }

}
