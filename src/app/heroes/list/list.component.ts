import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNmes: string[] = ['Windstorm', 'Bombasto', 'Magneto', 'Tornado']
  public deletedHero?: string

  removeLastHero(): void {
    this.deletedHero = this.heroNmes.pop()
  }

}
