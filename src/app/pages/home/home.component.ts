import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { CardComponent } from '../../component/card/card.component';
import { FooterComponent } from '../../component/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NavbarComponent, FooterComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
