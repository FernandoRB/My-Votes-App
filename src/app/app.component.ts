import { Component } from '@angular/core';
import { Link } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[];

  constructor() {
    this.links = [
      new Link('American Independent Party', 'https://es.wikipedia.org/wiki/Partido_Independiente_Americano', 10),
      new Link('Democratic Party', 'https://es.wikipedia.org/wiki/Partido_Dem%C3%B3crata_(Estados_Unidos)', 100),
      new Link('Republican Party', 'https://es.wikipedia.org/wiki/Partido_Republicano_(Estados_Unidos)', 1000)
    ];
  }

  addLink(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.links.push(new Link(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedLinks() {
    return this.links.sort((a: Link, b: Link) => b.votes - a.votes);
  }

}
