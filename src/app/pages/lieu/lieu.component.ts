import { Component, OnInit } from '@angular/core';
import { LieuService } from 'src/app/services/lieu/lieu.service';

@Component({
  selector: 'app-lieu',
  templateUrl: './lieu.component.html',
  styleUrls: ['./lieu.component.css']
})
export class LieuComponent implements OnInit {
  lieus : any ;
  errorMessage! : object;
  constructor(private lieuService:LieuService) { }

  ngOnInit(): void {
  }
  handleGetAllLieus(){
    this.lieuService.getLieus().subscribe({
      next : (data)=>{
        this.lieus=data._embedded.lieus;
      },
      error : (err)=>{
        this.errorMessage=err.message;
      }
    })
  }
  handleDeleteLieu(l :Lieu){
    let conf=confirm("are you sure?");
    if(conf==false) return;
    this.lieuService.getDelete(l.id);
  }

}
