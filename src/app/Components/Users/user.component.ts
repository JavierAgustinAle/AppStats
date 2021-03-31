import { Component, OnInit } from '@angular/core';

// Service
import { UserService } from '../../Services/user.service';
// Model
import { IUser } from '../../Models/IUser.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadData();
  }


  loadData(): void {
    // this.userService.getUsers().subscribe((response: any) => {
    //   response.data.map(user => {
    //     this.userService.getUserByID(user.id).subscribe((fullData: IUser) => {
    //       this.users.push(fullData);
    //     })
    //   });
    // });
  }

}
