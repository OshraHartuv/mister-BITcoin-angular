import { User } from '../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser() : User {
    return {
      name: "Oshra Hartuv",
      coins: 100,
      moves: []
     }
     
  }
}
