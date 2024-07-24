import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import * as HighCharts from "highcharts"; 
import { HighchartsService } from '../highcharts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  @ViewChild('charts') public chartEl: ElementRef;
  @ViewChild('charts2') public chartEl2: ElementRef;
 
  constructor(public highchartsS: HighchartsService) {
  }
  
  ngAfterViewInit(){
    this.highchartsS.createChart(this.chartEl.nativeElement, this.myOptions);
    this.highchartsS.createChart(this.chartEl2.nativeElement, this.myOptions);
  }
  
  myOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: ['2010', '2015', '2020', '2022', '2024']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total stocks consumption'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Manufacturing',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Development',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Sales & Distribution',
      data: [3, 4, 4, 2, 5]
    }]
  };
    
  
}
