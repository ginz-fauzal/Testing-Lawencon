import { Component, HostListener, OnInit } from '@angular/core'
import { first } from 'rxjs/operators'
import { APIService } from '../_services'
import { FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'

@Component({ templateUrl: 'movie.component.html' })
export class MovieComponent implements OnInit {
    
    data:any=[]
    temp:any=[]
    form:any

    search:string='Batman'
    posterModal:string=''
    titleModal:string=''
    page:number=1

    loading = false
    submitted = false

    constructor(
        public api: APIService, 
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,) {
        this.getData()
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            search: ['Batman', Validators.compose([Validators.required, Validators.minLength(3)])],
        })
    }

    get f() { return this.form.controls }

    getData(){
        this.api.movielist(this.search,this.page)
            .pipe(first())
            .subscribe((response: any) => {
                this.temp=response.Search
                for(var i in this.temp){
                    this.data.push(this.temp[i])
                }
            })
    }

    onSubmit() {
        this.submitted = true

        if (this.form.invalid) {
            return
        }

        this.loading = true
        this.search=this.f.search.value
        this.page=1
        this.data=[]
        console.log(this.search)
        this.getData()
    }

    posterChange(poster:string,title:string){
        this.posterModal=poster
        this.titleModal=title
    }

    @HostListener("window:scroll", [])
    onScroll(): void {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.page+=1;
        this.getData()
      }
    }

    detailMovie(title:string){
        this.router.navigate(['./detail',{title:title}], { relativeTo: this.route });
    }

    changeSource(event:any, poster:string) { event.target.src = "../assets/corrupt.png"; }
}