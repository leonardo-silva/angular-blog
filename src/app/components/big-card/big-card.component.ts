import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() photoCover: string = ""
  @Input() cardTitle: string = "Lorem haha ipsum dolor sit amet, consectetur adipiscing elit."
  @Input() cardDescription: string = ""
  @Input() id: string = "0"
}
