import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  name="Risvana"
  framework={
    name:"Angular",
    version:"15.6",
    year:"2023"
  }
}
