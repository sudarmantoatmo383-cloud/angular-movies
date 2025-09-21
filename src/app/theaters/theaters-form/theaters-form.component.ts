import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TheaterDTO, TheaterCreationDTO } from '../theaters.model';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-theaters-form',
  imports: [ReactiveFormsModule, MatButtonModule, RouterLink, MatFormFieldModule, MatInputModule],
  templateUrl: './theaters-form.component.html',
  styleUrl: './theaters-form.component.css'
})
export class TheatersFormComponent {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', {validators: [Validators.required]}]
  })

  @Input()
  model?: TheaterDTO;
  
  @Output()
  postForm = new EventEmitter<TheaterCreationDTO>();
  
  ngOnInit(): void {
    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  getErrorMessagesForName(): string{
    let field = this.form.controls.name;

    if (field.hasError('required')){
      return "the name field is required";
    }

    return "";
  }

  saveChanges(){
    const theater = this.form.value as TheaterCreationDTO;
    this.postForm.emit(theater)
  }
}
