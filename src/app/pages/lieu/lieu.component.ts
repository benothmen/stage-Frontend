import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Lieu } from 'src/app/Model/lieu.model';
import { LieuService } from 'src/app/services/lieu/lieu.service';

@Component({
  selector: 'app-lieu',
  templateUrl: './lieu.component.html',
  styleUrls: ['./lieu.component.css']
})
export class LieuComponent implements OnInit {
  lieus : any ;
  errorMessage! : object;
  searchFormGroup! :FormGroup;

  constructor(private lieuService:LieuService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword:this.fb.control(null)
    });
    this.handleGetAllLieus();
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
  handleSearchLieus(){
    let keyword=this.searchFormGroup.value.keyword;
    this.lieuService.searchLieus(keyword).subscribe({
      next:(data)=>{
        this.lieus=data;
      }
    });
  }
  handleDeleteLieu(l :Lieu){
    let conf=confirm("are you sure?");
    if(conf==false) return;
    this.lieuService.getDelete(l.id);
  }

}
