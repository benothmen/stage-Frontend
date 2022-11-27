import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FaculteService {

  constructor(private http:HttpClient) { }
  public getFacultes():Observable<any>{
    return this.http.get("FACULTE-SERVICE/facultes");
  }
  public getDelete(id :number){
    return this.http.delete("FACULTE-SERVICE/facultes/${id}");
  }
  public searchFacultes(keyword :string):Observable<any>{
    return this.http.get("FACULTE-SERVICE/facultes");
  }
}