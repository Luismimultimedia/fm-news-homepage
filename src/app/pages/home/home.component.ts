import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { LeadComponent } from './components/lead/lead.component';
import { NewsComponent } from './components/news/news.component';
import { TopicsComponent } from './components/topics/topics.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainLayoutComponent,
    LeadComponent, 
    NewsComponent,
    TopicsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
