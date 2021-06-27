import { Component, OnInit } from '@angular/core';
// Service
import { UserService } from '../../Services/user.service';

// Model
import { IUser } from '../../Models/IUser.model';

// Charts
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as StateActions from '../../store/actions/state.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersGenders = [];
  userAges = [];
  userCountry = [];

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
          color: 'white'
        },
        ticks: {
          beginAtZero: true,
          stepSize: 1,
          fontSize: 16,
          fontColor: 'white',
        }
      }],
      yAxes: [{
        gridLines: {
          display: true,
          color: 'lemonchiffon'
        },
        ticks: {
          beginAtZero: true,
          fontSize: 15,
          fontColor: 'white',
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
  ageChartLabels: Label[] = [['Between 18 & 35'], ['Between 35 & 50'], ['Over 50']];
  ageChartData: number[] = [0, 0, 0];
  ageChartType: ChartType = 'doughnut';
  ageChartColors = [
    {
      backgroundColor: ['rgba(255, 48, 79, 1)', 'rgba(55, 0, 179, 0.7)', 'rgba(3, 218, 198, 0.7)'],
    },
  ];

  constructor(private userService: UserService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadData();
  }


  loadData(): void {
    this.store.dispatch(new StateActions.ChangeIcon('user'));
    this.userService.getUsersGender().subscribe((res: any) => {
      this.usersGenders = res.results;
      this.loadChartGenders();
    }, error => {
      this.store.dispatch(new StateActions.SetError(true));
      this.store.dispatch(new StateActions.SetStatus(error));
    });

    this.userService.getUsersAge().subscribe((response: any) => {
      this.userAges = response.results;
      this.loadChartAges();
    }, error => {
      this.store.dispatch(new StateActions.SetError(true));
      this.store.dispatch(new StateActions.SetStatus(error));
    });

    this.userService.getUsersCountry().subscribe((resp: any) => {
      const allCountries = [];
      resp.results.map(c => allCountries.push(c.nat));

      this.loadStatsCountry(allCountries);
    }, error => {
      this.store.dispatch(new StateActions.SetError(true));
      this.store.dispatch(new StateActions.SetStatus(error));
    });
  }



  loadChartGenders(): void {
    let male = 0;
    let female = 0;
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
    });
    this.genderChartData = [
      { data: [male, 0], label: 'Male', backgroundColor: 'rgba(72, 47, 247, 1)', hoverBackgroundColor: 'rgba(72, 47, 247, 1)' },
      { data: [0, female], label: 'Female', backgroundColor: 'rgba(252, 81, 133, 1)', hoverBackgroundColor: 'rgba(252, 81, 133, 1)' }
    ];
  }


  loadChartAges(): void {
    let gr1 = 0;
    let gr2 = 0;
    let gr3 = 0;
    this.userAges.map((a: IUser) => {
      a.dob.age < 35 ? gr1++
        : a.dob.age <= 50 ?
          gr2++
          : gr3++;
    });
    this.ageChartData = [gr1, gr2, gr3];
  }

  loadStatsCountry(countries: any[]): void {
    for (const country of countries) {
      if (country in this.userCountry) {
        ++this.userCountry[country];
      } else {
        this.userCountry[country] = 1;
      }
    }
  }

}
