import { Component, OnInit } from '@angular/core';
import { Icricketer } from '../../models/cricketer';
import { cricketers } from '../../const/cricketer';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  {

 crickterArr:Array<Icricketer>=cricketers 

}
