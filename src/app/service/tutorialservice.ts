import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Topic } from './topic';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable()
export class TutorilaService {
    constructor(private http: HttpClient) { }
 
    getAllTopics(compName:string) {
        return this.http.get<Topic[]>('http://localhost:3000/'+compName);
    }
 
    getById(compName:string, id: number) {
        return this.http.get<Topic>('http://localhost:3000/ccx/' + id);
    }
 
    /* create(product: Topic) {
        console.log('create service -->',product);
        return this.http.post('http://localhost:3000/ccx/', product, httpOptions);
    }
 
    update(product: Topic) {
        return this.http.put('http://localhost:3000/ccx/' + product.id, product);
    }
 
    delete(id: number) {
        return this.http.delete('http://localhost:3000/ccx/' + id);
    } */
}