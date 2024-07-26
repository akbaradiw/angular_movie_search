import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipe } from 'ng2-search-filter';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ CommonModule, HttpClientModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
 httpsClient = inject(HttpClient);
 data: any[] = [];
 searchValue = '';
ngOnInit(): void {
  this.fetchData()
}

fetchData() {
  this.httpsClient.get('https://www.omdbapi.com/?s=Title&apikey=263d22d8').subscribe(
    (response: any) => {
      console.log(response);
      if (response.Search) {
        this.data = response.Search;
      }
    },
    (error: any) => {
      console.error('Error fetching data:', error);
    }
  );
}

filter = (event: any) => {
  console.log(event.target.value);
  this.data = this.data.filter((item) => {
    return item.Title.toLowerCase().includes(event.target.value.toLowerCase());
  });
};




}
