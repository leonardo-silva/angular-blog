import { Component, Input, OnInit } from '@angular/core';

import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  photo: string = ""
  title: string = ""
  @Input() id: string = "0"

  ngOnInit(): void {
    const data = dataFake.filter((item) => item.id === this.id)[0];
    if (data) {
      this.photo = data.photo;
      this.title = data.title;
    }
  }
}
