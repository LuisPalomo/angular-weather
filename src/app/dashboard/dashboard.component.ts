import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
