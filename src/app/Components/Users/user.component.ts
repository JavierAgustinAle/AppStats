import { Component, OnInit } from '@angular/core';

// Service
import { UserService } from '../../Services/user.service';

// Model
import { IUser } from '../../Models/IUser.model';

// Charts
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersGenders = [];
  userAges = []

  chartLegend = true;

  /*  Gender Chart */
  genderChartLabels: Label[] = ['Male', 'Female'];
  genderChartType: ChartType = 'bar';
  genderChartData: ChartDataSets[] = [
    { data: [0, 0], label: 'Male' },
    { data: [0, 0], label: 'Female' }
  ];
  genderChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: true,
          color: "white"
        },
        ticks: {
          beginAtZero: true,
          stepSize: 1,
          fontSize: 16,
          fontColor: "white",
        }
      }],
      yAxes: [{
        gridLines: {
          display: true,
          color: "lemonchiffon"
        },
        ticks: {
          beginAtZero: true,
          fontSize: 15,
          fontColor: "white",
        }
      }]
    },
    legend: {
      position: 'top',
      display: true,
      labels: {
        fontSize: 18,
        fontColor: 'white',
      }
    }
  };

  /* Age Chart */

  ageChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
      labels: {
        fontSize: 15,
        fontColor: 'white',
      }
    }
  };
  ageChartLabels: Label[] = [['Under 18'], ['Between 18 & 35'], ['Over 35']]
  ageChartData: number[] = [0, 0, 0];
  ageChartType: ChartType = 'doughnut';
  ageChartColors = [
    {
      backgroundColor: ['rgba(187, 134, 252, 0.7)', 'rgba(55, 0, 179, 0.7)', 'rgba(3, 218, 198, 0.7)'],
    },
  ];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadData();
  }


  loadData() {
    this.userService.getUsersGender().subscribe((res: any) => {
      this.usersGenders = res.results;
      this.loadChartGenders();
    })

    this.userService.getUsersAge().subscribe((response: any) => {
      this.userAges = response.results;
      this.loadChartAges();
    })
  }



  loadChartGenders() {
    let male: number = 0, female: number = 0;
    this.usersGenders.map((g: IUser) => {
      switch (g.gender) {
        case 'male':
          male++;
          break;
        case 'female':
          female++;
          break;
        default:
          break;
      }
    })
    this.genderChartData = [
      { data: [male, 0], label: 'Male', backgroundColor: 'rgba(72, 47, 247, 1)', hoverBackgroundColor: 'rgba(72, 47, 247, 1)' },
      { data: [0, female], label: 'Female', backgroundColor: 'rgba(252, 81, 133, 1)', hoverBackgroundColor: 'rgba(252, 81, 133, 1)' }
    ];
  }


  loadChartAges() {
    let under: number = 0, between: number = 0, over: number = 0;
    this.userAges.map((a: IUser) => {
      a.dob.age < 18 ? under++
        : a.dob.age <= 35 ?
          between++
          : over++;
    });
    this.ageChartData = [under, between, over];
  }

}
