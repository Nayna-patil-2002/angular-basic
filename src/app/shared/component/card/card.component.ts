import { Component, OnInit } from '@angular/core';
import { Icard } from '../../models/card';
import { cricketers2 } from '../../const/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  crickters:Array<Icard>=cricketers2

}
