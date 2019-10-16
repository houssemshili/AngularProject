import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { Message } from '../message';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
messages : Message[] = [];
  constructor(private alertservice : AlertService) { }

  ngOnInit() {
  }

}
