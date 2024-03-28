import { Component, Input } from '@angular/core';
import HomeData from '../../../../data/home-data.json';
import { Lead } from '../../../../types/lead.interface';

@Component({
  selector: 'app-lead',
  standalone: true,
  imports: [],
  templateUrl: './lead.component.html',
  styleUrl: './lead.component.scss'
})
export class LeadComponent {
  @Input() lead: Lead = HomeData?.lead;
}
