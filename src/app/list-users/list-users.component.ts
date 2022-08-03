import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //users=["Madhuri","Haritha","Sai Shiva"];
  users=[
    {id:103, name:"sai dheeraj",email:"sai@gmail.com"},
    {id:104, name:"vishal",email:"vishal@gmail.com"},
    {id:105, name:"karthik",email:"karthik@gmail.com"}
  ];
  //ListTaskComponent
  tasks=[
    {id:1,name:"Install Java",status:"COMPLETED"},
    {id:2,name:"Install NodeJS",status:"PENDING"},
  ];

  deleteUser()
  {
    alert("Successfully deleted");
  }

}
