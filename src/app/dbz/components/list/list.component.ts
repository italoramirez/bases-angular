import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 12
    }
  ]

  onDeleteCharater(id?: string): void {
    // console.log(index)
    if ( !id ) return //le pregunto que si vieneque detenga la ejecución
    this.onDelete.emit(id)
    // this.characterList.splice(index, 1)
  }
}
