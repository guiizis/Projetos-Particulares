import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interesses',
  templateUrl: './interesses.component.html',
  styleUrls: ['./interesses.component.css']
})
export class InteressesComponent implements OnInit {
  age: number = new Date().getFullYear() - 1998
  constructor() { }

  ngOnInit(): void {
  }

}
