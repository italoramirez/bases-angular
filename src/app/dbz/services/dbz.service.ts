import {Injectable} from '@angular/core';
import { v4 as uuid } from 'uuid'

import {Character} from "../interfaces/character.interface";

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characteres: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    }
  ]

  onNewCharacter(character: Character): void {
    const newCharacter = {
      id: uuid(),
      ...character
    }
    // this.characteres.unshift(character)
    this.characteres.push(newCharacter)
  }

  // onDeleteCharacter(index: number): void {
  //   this.characteres.splice(index, 1)
  // }
  deleteCharacterById(id: string): void {
    // this.characteres.splice(index, 1)
    this.characteres = this.characteres.filter( charactrer => charactrer.id !== id)
  }
}
