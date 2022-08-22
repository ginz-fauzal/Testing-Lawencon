import { Component, OnInit } from '@angular/core'
import { APIService } from '../_services'

@Component({ templateUrl: 'fungsi.component.html' })
export class FungsiComponent implements OnInit {
    

    constructor(public api: APIService) {
    }

    ngOnInit(): void {
        // this.getData()
    }



}