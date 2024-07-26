import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'] 
})
export class CardComponent implements OnInit {
  httpClient = inject(HttpClient);
  fb = inject(FormBuilder); 
  data: any[] = [];
  filteredData: any[] = [];
  searchForm = this.fb.nonNullable.group({
    searchValue: ''
  });

  ngOnInit(): void {
    this.fetchData();
    this.searchForm.valueChanges.subscribe(value => {
      this.filter(value.searchValue);
    });
  }

  fetchData() {
    this.httpClient.get('https://www.omdbapi.com/?s=Title&apikey=263d22d8').subscribe(
      (response: any) => {
        if (response.Search) {
          this.data = response.Search;
          this.filteredData = this.data;  
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  filter(searchValue = '') {
    if (!searchValue) {
      this.filteredData = this.data;
      return;
    }
    this.filteredData = this.data.filter((item) => {
      return item.Title.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
