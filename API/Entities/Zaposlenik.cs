using System;

namespace API.Entities
{
    public class Zaposlenik
    {
        public int Id { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string Slika { get; set; }
        public string Spol { get; set; }
        public int GodinaRodenja { get; set; }
        public DateTime PocetakRada { get; set; }
        public string VrstaUgovora { get; set; }
        public int TrajanjeUgovora { get; set; }
        public string Odjel { get; set; }
        public int? BrojDanaGodišnjegOdmora { get; set; }
        public int? BrojSlobodnihDana { get; set; }
        public int? BrojDanaPlacenogDopusta { get; set; }
    }
}