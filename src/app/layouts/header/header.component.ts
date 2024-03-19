import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @ViewChild('navigation') navigation!:ElementRef;
  @ViewChild('overlay') overlay!:ElementRef;

  onOpenMenu() {
    this.navigation.nativeElement.style.display = "flex";
    this.overlay.nativeElement.style.display = "block";
  }

  onCloseMenu() {
    this.navigation.nativeElement.style.display = "none";
    this.overlay.nativeElement.style.display = "none";
  }

}
