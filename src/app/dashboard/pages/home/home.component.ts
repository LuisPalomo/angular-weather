import { Component, OnInit, inject } from '@angular/core';
import { HomeService } from '../../../services/home.service';
<<<<<<< HEAD
import { Weather } from '../../interface/weather.interface';
import { CommonModule } from '@angular/common';
=======
>>>>>>> 01a822598d4d6a61efe274d93dc78f6c97555c7e

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private homeService = inject(HomeService);
<<<<<<< HEAD
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
=======

  ngOnInit(): void {
    this.homeService.getPredection()
      .subscribe((resp) => {
        console.log(resp);
      });
>>>>>>> 01a822598d4d6a61efe274d93dc78f6c97555c7e
  }


}
