import { Component, OnInit } from '@angular/core'
import { first } from 'rxjs/operators'
import { APIService } from '../_services'
import { ActivatedRoute } from '@angular/router'

@Component({ templateUrl: 'movie-detail.component.html' })
export class MovieDetailComponent implements OnInit {
    
    data:any=[]

    index:string=''

    loading = false
    submitted = false

    constructor(
        public api: APIService,
        private route: ActivatedRoute,) {
    }

    ngOnInit(): void {
        this.index = this.route.snapshot.params['title']
        this.getData()
    }

    getData(){
        this.api.moviedetail(this.index)
            .pipe(first())
            .subscribe((response: any) => {
                this.data.push(response)
                this.data=this.data[0]
                console.log(this.data)
            })
    }

    changeSource(event:any) { event.target.src = "../assets/corrupt.png"; }
}