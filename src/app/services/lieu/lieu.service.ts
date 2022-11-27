import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LieuService {

  constructor(private http:HttpClient) { }
  public getLieus():Observable<any>{
    return this.http.get("LIEU-SERVICE/lieus");
  }
  public getDelete(id :number){
    return this.http.delete("LIEU-SERVICE/lieus/${id}");
  }
  public searchLieus(keyword :string):Observable<any>{
    return this.http.get("LIEU-SERVICE/lieus");
  }
}