import { Component, OnInit, inject } from '@angular/core';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private homeService = inject(HomeService);

  ngOnInit(): void {
    this.homeService.getPredection()
      .subscribe((resp) => {
        console.log(resp);
      });
  }


}
