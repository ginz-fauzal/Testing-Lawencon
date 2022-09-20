import { Component, HostListener, OnInit } from '@angular/core'
import { first } from 'rxjs/operators'
import { APIService } from '../_services'

@Component({ templateUrl: 'product.component.html' })
export class ProductComponent implements OnInit {
    
    data:any=[]
    temp:any=[]

    limit:number=10

    constructor(
        public api: APIService,
    ) {
        this.getData()
    }

    ngOnInit(): void {}

    getData(){
        this.api.productList(this.limit)
            .pipe(first())
            .subscribe((response: any) => {
                this.temp=response
                for(var i in this.temp){
                    if(Number(i)>this.limit-9){
                        this.data.push(this.temp[i])
                    }
                }
                console.log(response)
            })
    }

    clearData() {
        this.data=[]
    }

    loadData(){
        this.limit=10
        this.getData()
    }

    @HostListener("window:scroll", [])
    onScroll(): void {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && this.limit<20) {
        this.limit+=10
        this.getData()
      }
    }

    changeSource(event:any) { event.target.src = "../assets/corrupt.png" }
}