import { Component, OnInit, Input } from '@angular/core';
import { Cake } from '../cake';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {
  @Input () cakeToShow: Cake;
  constructor() { }

  ngOnInit() {
  }

}
