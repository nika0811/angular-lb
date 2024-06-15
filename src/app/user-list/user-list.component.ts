import { Component, Input, } from '@angular/core';
import { NgFor,NgStyle } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


export interface User {
  name: string;
  email: string;
}

@Component({
  standalone: true,
  imports:[NgFor, MatListModule,NgStyle,MatButtonModule],
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],

})
export class UserListComponent {
  @Input() users: User[] = [];
  constructor() { }
}
