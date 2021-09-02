import { Component, Input, OnInit } from '@angular/core';
import { Zaposlenik } from 'src/app/_models/zaposlenik';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.css']
})
export class WorkerCardComponent implements OnInit {
  @Input() zaposlenik : Zaposlenik;

  constructor() { }

  ngOnInit(): void {
  }

}
