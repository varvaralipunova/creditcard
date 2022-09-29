import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardNumber = '' as string;
  @Input() name = '' as string;
  @Input() expiration = '' as string;

  constructor() { }

  ngOnInit(): void {
  }

}
