import { Component, Input } from '@angular/core';
import { toBase64 } from '../../functions/toBase64';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-input-img',
  imports: [MatButtonModule],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css'
})
export class InputImgComponent {
  @Input({required: true})
  title!: string;

  imageBase64?: string;

  change(event: Event){
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0 ){
      const file: File = input.files[0];
      toBase64(file).then((value: string) => this.imageBase64 = value)
      .catch(error => console.log(error))
    }
  }
}
