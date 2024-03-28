import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { New } from '../../../../types/new.interface';
import HomeData from "../../../../data/home-data.json";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
@Input()
news: Array<New> = HomeData.news;
}
