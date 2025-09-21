import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreationDTO, ActorDTO } from '../actors.model';
import { ActorsFormComponent } from '../actors-form/actors-form.component';

@Component({
  selector: 'app-edit-actor',
  imports: [ActorsFormComponent],
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css'
})
export class EditActorComponent {
  @Input({transform: numberAttribute})
  id!: number;

  model: ActorDTO = {id: 1, name: 'Tom Hanks', dateOfBirth: new Date('1978-03-11')};

  saveChanges(actor: ActorCreationDTO){
    console.log('editing the actor', actor);
  }
}
