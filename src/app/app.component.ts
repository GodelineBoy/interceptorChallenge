import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getApi().subscribe((response) => {});
  }
  title = 'interceptor';
}
