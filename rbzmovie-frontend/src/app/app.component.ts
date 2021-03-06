import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from './services/get-movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RBZ Movie';

  constructor(private getMoviesServies: GetMoviesService) { }

  ngOnInit() {
    this.getMoviesServies.getOnlineData();
  }


}
