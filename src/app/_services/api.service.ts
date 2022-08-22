import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient  } from '@angular/common/http'

import { environment } from '../../environments/environment'

@Injectable({ providedIn: 'root' })
export class APIService {

    constructor(private http: HttpClient) {
       
    }

    movielist(search:string,page:number) {
        return this.http.get<any>(`${environment.apiUrl}?apikey=faf7e5bb&s=${search}&page=${page}`)
    }

    moviedetail(index:string) {
        return this.http.get<any>(`${environment.apiUrl}?apikey=faf7e5bb&i=${index}&plot=full`)
    }

}