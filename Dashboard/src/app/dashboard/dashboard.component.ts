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
    this.highchartsS.createChart(this.chartEl2.nativeElement, this.lineChartOptions);
  }

  myOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Stocks Consumption'
    },
    xAxis: {
      categories: ['2010', '2015', '2020', '2022', '2024']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Asset Allocation'
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
  
  lineChartOptions = {
    title: {
      text: 'Performance Metrics (Yearly Earnings)'
  },

  accessibility: {
      point: {
          valueDescriptionFormat:
              '{xDescription}{separator}{value} million(s)'
      }
  },

  xAxis: {
      title: {
          text: 'Year'
      },
      categories: [1995, 2000, 2005, 2010, 2015, 2020, 2023]
  },

  yAxis: {
      type: 'logarithmic',
      title: {
          text: 'Earnings (in millions)'
      }
  },

  tooltip: {
      headerFormat: '<b>{series.name}</b><br />',
      pointFormat: '{point.y} million(s)'
  },

  series: [{
      name: 'Earnings',
      keys: ['y', 'color'],
      data: [
          [16, '#0000ff'],
          [361, '#8d0073'],
          [1018, '#ba0046'],
          [2025, '#d60028'],
          [3192, '#eb0014'],
          [4673, '#fb0004'],
          [5200, '#ff0000']
      ],
      color: {
          linearGradient: {
              x1: 0,
              x2: 0,
              y1: 1,
              y2: 0
          },
          stops: [
              [0, '#0000ff'],
              [1, '#ff0000']
          ]
      }
  }]
  }
  
}
