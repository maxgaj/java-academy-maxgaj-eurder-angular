import { Component, OnInit } from '@angular/core';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading-component',
  templateUrl: './loading-component.component.html',
  styleUrls: ['./loading-component.component.scss']
})
export class LoadingComponentComponent implements OnInit {

  faSpinner = faSpinner;

  constructor() { }

  ngOnInit() {
  }

}
