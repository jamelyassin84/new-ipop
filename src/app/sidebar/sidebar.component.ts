import { Component, OnInit } from '@angular/core';
import * as navs from './sidebar'

@Component({
  selector: 'Sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    
    navs = navs.Sidebar()
    constructor() { }

    ngOnInit(): void {
    }

}
