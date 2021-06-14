import { PhotoRequestModel } from './../../models/photoRequestModel';
import { PhotoService } from './../../services/photo.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jpeg',
  templateUrl: './jpeg.component.html',
  styleUrls: ['./jpeg.component.css']
})
export class JpegComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private photoService:PhotoService) { }

  photoForm:FormGroup;
  formData:FormData;
  base64textString:String;
  ngOnInit(): void {
    this.createPhotoForm();
  }

  createPhotoForm(){
    this.photoForm = this.formBuilder.group({
      photo:["",],
      name:[""],
      compressionLevel:["",Validators.required],
    });
  }
  
  addPhoto(){
    if(this.photoForm.valid){

      let photoModel = Object.assign({},this.photoForm.value);
      photoModel.photo = this.base64textString;
      debugger;
      this.photoService.addPhoto(photoModel).subscribe(response => {
        debugger;
        this.toastrService.info(response.message);
      },responseError =>{
        debugger;
        this.toastrService.error(responseError.error);
      });
    }
  }

  handleFileSelect(evt:any){
    var files = evt.target.files;
    var file = files[0];

  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}



_handleReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          this.base64textString= btoa(binaryString);
  }
  
}
