import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from 'rxjs';
export interface User {
  id: number;
  name: string;
  lastName: string;
  fiscalCode: string;
  phone: string;
  email: string;
  province: string;
}  

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userUpdated = new Subject<User>();
  userDeleted = new Subject<User>();
  
  users: User[] = [
    { id: 1, name: "Mario", lastName: "Rossi", fiscalCode: "RSSMRA80A01H501U", phone: "1234567890", email:"mario-rossi@gmail.com", province: "Roma"},
    { id: 2, name: "Luigi", lastName: "Bianchi", fiscalCode: "BNCLGU80A01H501V", phone:"0987654321", email:"luigi-bianchi@gmail.com", province:"Milano"},
    { id: 3, name: "Giulia", lastName: "Verdi", fiscalCode: "VRDGIL80A01H501K", phone:"2345678901", email:"giulia-verdi@gmail.com", province:"Torino"},
    { id: 4, name: "Elena", lastName: "Gialli", fiscalCode: "GLLELN80A01H501S", phone:"3456789012", email:"elena-gialli@gmail.com", province:"Napoli"},
    { id: 5, name: "Marco", lastName: "Neri", fiscalCode: "NRIMRC80A01H501N", phone:"4567890123", email:"marco-neri@gmail.com", province:"Palermo"},
    { id: 6, name: "Alessia", lastName: "Marrone", fiscalCode: "MRRALS80A01H501Q", phone:"5678901234", email:"alessia-marrone@gmail.com", province:"Genova"},
    { id: 7, name: "Andrea", lastName: "Celeste", fiscalCode: "CLSTND80A01H501Z", phone:"6789012345", email:"andrea-celeste@gmail.com", province:"Bologna"},
    { id: 8, name: "Sara", lastName: "Rosa", fiscalCode: "RSASRA80A01H501X", phone:"7890123456", email:"sara-rosa@gmail.com", province:"Firenze"},
    { id: 9, name: "Paolo", lastName: "Viola", fiscalCode: "VLAPAO80A01H501C", phone:"8901234567", email:"paolo-viola@gmail.com", province:"Venezia"},
    { id: 10, name: "Simone", lastName: "Arancio", fiscalCode: "ARNSMN80A01H501M", phone:"9012345678", email:"simone-arancio@gmail.com", province:"Catania"},
    { id: 11, name: "Chiara", lastName: "Azzurra", fiscalCode: "AZZCHR80A01H501R", phone:"0123456789", email:"chiara-azzurra@gmail.com", province:"Bari"},
  ];
  getUsers(): User[] {
    return this.users;
  }
  getUser(id: number): User | null {
    //throw new Error('Method not implemented.');
    const idx = this.users.findIndex(ele => ele.id === id);

    if (idx === -1) {
      return null;
    }
    return { ...this.users[idx] };
  }
  constructor() {
    console.log('user service created')
  }
  deleteUser(user: User): void {

    const idx = this.users.findIndex(ele => ele.id === user.id);

    this.users.splice(idx, 1);

  }
  updateUser(user: User): boolean {

    const idx = this.users.findIndex(ele => ele.id === user.id);

    if (idx === -1) {
      return false;
    }
    this.users[idx] = { ...user };

    return true;
  }
  /*userCreated(user: User): boolean {

  const idx =this.userDeleted.findIndex(ele=> ele.mail === user.email);
  this.users.push(user);

  return: true;
  }*/
}

