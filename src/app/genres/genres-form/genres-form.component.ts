import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { firstLetterShouldBeUppercase } from '../../shared/functions/validations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GenreCreationDTO } from '../genres.models';

@Component({
  selector: 'app-genres-form',
  imports: [MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, RouterLink],
  templateUrl: './genres-form.component.html',
  styleUrl: './genres-form.component.css'
})
export class GenresFormComponent {

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', {validators: [Validators.required, firstLetterShouldBeUppercase()]}]
  })
  
  @Output()
  postForm = new EventEmitter<GenreCreationDTO>();
  
  getErrorMessagesForName(): string{
    let field = this.form.controls.name;
    if (field.hasError('required')){
      return "The name field is requied";
    }

    if (field.hasError('firstLetterShouldBeUppercase')){
      return field.getError('firstLetterShouldBeUppercase').message
    }

    return "";
  }

  saveChange(){
    // .. save changes
    
    const genre = this.form.value as GenreCreationDTO;
    this.postForm.emit(genre);
  }
}
