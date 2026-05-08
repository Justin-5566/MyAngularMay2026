import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './components/toolbar/toolbar';
import { Data } from './services/data';


@Component({
  selector: 'app-root',
  imports: [FormsModule, MatButtonModule, RouterOutlet, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  public pageTitle:string = 'Home';

  constructor(private data: Data){}

  ngOnInit(): void {
    this.data.observeEvent().subscribe((data: any)=>{
      this.pageTitle = data;
    })
  }

 saveData(){
    let age: number = 20;
 }
}