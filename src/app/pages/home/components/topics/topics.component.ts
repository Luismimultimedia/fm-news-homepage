import { Component, Input } from '@angular/core';
import HomeData from "../../../../data/home-data.json";
import { Topic } from '../../../../types/topics.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent {
  @Input()
  topics: Array<Topic> = HomeData.topics;
}
