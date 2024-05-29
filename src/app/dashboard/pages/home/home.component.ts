import { Component, OnInit, inject } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { Weather } from '../../interface/weather.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private homeService = inject(HomeService);

  public weatherDate?: Weather;

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        this.homeService.getPredection(lat, long)
          .subscribe((resp) => {
            this.weatherDate = resp;
          });
      });
    }

  }


}
