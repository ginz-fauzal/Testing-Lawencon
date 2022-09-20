import { Injectable } from '@angular/core'
import { HttpClient  } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({ providedIn: 'root' })
export class APIService {

    constructor(private http: HttpClient) {}

    productList(limit:number) {
        return this.http.get<any>(`https://fakestoreapi.com/products?limit=${limit}`)
    }
}