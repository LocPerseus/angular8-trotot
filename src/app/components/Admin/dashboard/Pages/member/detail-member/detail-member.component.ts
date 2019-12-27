import { Account } from './../../../../../../models/account';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-detail-member',
  templateUrl: './detail-member.component.html',
  styleUrls: ['./detail-member.component.css']
})
export class DetailMemberComponent implements OnInit {
  @Input() users: Account;
  constructor() { }

  ngOnInit() {
  }

}
