import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.scss']
})
export class TreeMapComponent implements OnInit {

  title = '';
  type='TreeMap';
  data = [
     ["Global",null,0,0],
     ["America","Global",0,0],
     ["Europe","Global",0,0],
     ["Asia","Global",0,0],
     ["Australia","Global",0,0],
     ["Africa","Global",0,0],

     ["USA","America",52,31],
     ["Mexico","America",24,12],
     ["Canada","America",16,-23],

     ["France","Europe",42,-11],
     ["Germany","Europe",31,-2],
     ["Sweden","Europe",22,-13],

     ["China","Asia",36,4],
     ["Japan","Asia",20,-12],
     ["India","Asia",40,63],

     ["Egypt","Africa",21,0],
     ["Congo","Africa",10,12],
     ["Zaire","Africa",8,10],
         
  ];
  columnNames = ["Location", "Parent","Market trade volume (size)","Market increase/decrease (color)"];
  options = { 
     minColor:"#ff7777",
     midColor:'#ffff77',
     maxColor:'#77ff77',
     headerHeight:15,
     showScale:true
  };
  width = 500;
  height = 400;
  
  constructor() { }

  ngOnInit() {
  }

}
