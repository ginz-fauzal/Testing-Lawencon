import { Component, OnInit } from '@angular/core'
import { APIService } from '../_services'
import { FormBuilder, Validators } from '@angular/forms'

@Component({ templateUrl: 'fungsi.component.html' })
export class FungsiComponent implements OnInit {

    data:any=[]
    temp:any=[]
    hasil:any=[]
    form:any

    loading = false
    submitted = false

    constructor(public api: APIService, private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            arrayInput: ['kita', Validators.compose([Validators.required])],
        })
    }

    get f() { return this.form.controls }

    onSubmit() {
        this.submitted = true

        if (this.form.invalid) {
            return
        }

        this.loading = true
        this.data.push(this.f.arrayInput.value)
        this.temp.push(this.f.arrayInput.value)
    }

    groupIt(arr:any) {
        var n=arr.length
        var hasil=[]
        for(var i in arr)
        {
            if(arr[i].length==0)
            {
                continue;
            }
            var charSet1 = Array(26).fill(false)
            for(var l=0;l<arr[i].length;l++)
            {
                charSet1[arr[i].charAt(l).charCodeAt(0)-'a'.charCodeAt(0)]=true
            }
            var temp=[];
            for(var j=Number(i);j<n;j++)
            {
                var charSet2 = Array(26).fill(false)
                for(var l=0;l<arr[j].length;l++)
                {
                    charSet2[arr[j].charAt(l).charCodeAt(0)-'a'.charCodeAt(0)]=true
                }
                if(this.arraysEqual(charSet2,charSet1))
                {
                    temp.push(arr[j])
                    arr[j]=""
                }
            }
            hasil.push(temp)
        }
        this.hasil=hasil
        for(var i in this.data){
            this.temp.push(this.data[i])
        }
    }

    arraysEqual(a:any, b:any) {
        if (a === b) return true
        if (a == null || b == null) return false
        if (a.length !== b.length) return false
      
        for (var i = 0; i < a.length; ++i) {
          if (a[i] !== b[i]) return false
        }
        return true
    }
}