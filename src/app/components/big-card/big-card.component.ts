import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  photoCover: string = ""
  cardTitle: string = ""
  cardDescription: string = ""
  @Input() id: string = ""

  ngOnInit(): void {
    const data = dataFake.filter((item) => item.id === this.id)[0];
    if (data) {
      this.cardDescription = data.description;
      this.cardTitle = data.title;
      this.photoCover = data.photo;
    }
  }
}
