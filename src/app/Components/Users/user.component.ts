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

  users = [];

  chartOptions: ChartOptions = {
    responsive: true
  };
  chartLegend = true;

  /*  Gender Chart */
  genderChartLabels: Label[] = ['Male', 'Female'];
  genderChartType: ChartType = 'bar';
  genderChartData: ChartDataSets[] = [
    { data: [0, 0], label: 'Male' },
    { data: [0, 0], label: 'Female' }
  ];
  /* Age Chart */

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadData();
  }


  loadData() {
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res.results;
      this.loadChartGenders();
    })
  }



  loadChartGenders() {
    let male: number = 0, female: number = 0;
    this.users.map(g => {
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
      { data: [male, 0], label: 'Male' },
      { data: [0, female], label: 'Female' }
    ];
  }


}
