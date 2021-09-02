export interface Zaposlenik{
     id :number
     ime: string; 
     prezime:string;
     slika:string;
     spol:string; 
     godinaRodenja:number; 
     pocetakRada:Date; 
     vrstaUgovora:string;
     trajanjeUgovora:number;
     odjel:string; 
     brojDanaGodišnjegOdmora :number;
     brojSlobodnihDana:number;
     brojDanaPlacenogDopusta:number; 
}