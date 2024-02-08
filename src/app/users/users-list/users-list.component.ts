import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';


/*interface User {
  name: string;
  lastName: string;
  fiscalCode: string;
  phone: string;
  email: string;
  province: string;
}*/

@Component({
  providers:[],
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{

  users: User[] = [];

  constructor(private userService: UserService, private router: Router){
  }

  //@Output() UserDeleted =new EventEmitter<User>();

  trackUser(index: number, user: User): string {
    return user.email; 
  }

  /*constructor (private userService: UserService){
    console.log('constructor');
  }*/

  ngOnInit(): void{
    //console.log('view initiaized')
    this.users = this.userService.getUsers();
  }
   
  deleteUser(user: User): void {
    //alert(user.email)
    //this.UserDeleted.emit(user)
    this.userService.userDeleted.next(user);
  }

  updateUser(user: User): void{
    //this.router.navigateByUrl('users/') //specifica un unico URL
    this.router.navigate(['users', user.id]);
  }

  /*users: User[] = [
    {name: "Mario", lastName: "Rossi", fiscalCode: "RSSMRA80A01H501U", phone: "1234567890", email:"mario-rossi@gmail.com", province: "Roma"},
    {name: "Luigi", lastName: "Bianchi", fiscalCode: "BNCLGU80A01H501V", phone:"0987654321", email:"luigi-bianchi@gmail.com", province:"Milano"},
    {name: "Giulia", lastName: "Verdi", fiscalCode: "VRDGIL80A01H501K", phone:"2345678901", email:"giulia-verdi@gmail.com", province:"Torino"},
    {name: "Elena", lastName: "Gialli", fiscalCode: "GLLELN80A01H501S", phone:"3456789012", email:"elena-gialli@gmail.com", province:"Napoli"},
    {name: "Marco", lastName: "Neri", fiscalCode: "NRIMRC80A01H501N", phone:"4567890123", email:"marco-neri@gmail.com", province:"Palermo"},
    {name: "Alessia", lastName: "Marrone", fiscalCode: "MRRALS80A01H501Q", phone:"5678901234", email:"alessia-marrone@gmail.com", province:"Genova"},
    {name: "Andrea", lastName: "Celeste", fiscalCode: "CLSTND80A01H501Z", phone:"6789012345", email:"andrea-celeste@gmail.com", province:"Bologna"},
    {name: "Sara", lastName: "Rosa", fiscalCode: "RSASRA80A01H501X", phone:"7890123456", email:"sara-rosa@gmail.com", province:"Firenze"},
    {name: "Paolo", lastName: "Viola", fiscalCode: "VLAPAO80A01H501C", phone:"8901234567", email:"paolo-viola@gmail.com", province:"Venezia"},
    {name: "Simone", lastName: "Arancio", fiscalCode: "ARNSMN80A01H501M", phone:"9012345678", email:"simone-arancio@gmail.com", province:"Catania"},
    {name: "Chiara", lastName: "Azzurra", fiscalCode: "AZZCHR80A01H501R", phone:"0123456789", email:"chiara-azzurra@gmail.com", province:"Bari"},
  ];*/

} 
