using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class WorkerRepository : IWorkerRepository
    {
        private readonly DataContext _context;

        public WorkerRepository(DataContext context)
        {
            _context = context;
        }
        public async void DodajZaposlenika(Zaposlenik zaposlenik)
        {
            zaposlenik = new Zaposlenik{
                Ime=zaposlenik.Ime,
                Prezime = zaposlenik.Prezime,
                Slika = zaposlenik.Slika,
                Spol = zaposlenik.Spol,
                GodinaRodenja = zaposlenik.GodinaRodenja,
                PocetakRada = zaposlenik.PocetakRada,
                VrstaUgovora = zaposlenik.VrstaUgovora,
                TrajanjeUgovora = zaposlenik.TrajanjeUgovora,
                Odjel = zaposlenik.Odjel
            };

            _context.Zaposlenici.Add(zaposlenik);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Zaposlenik>> DohvatiSveZaposlenike()
        {
            var upit = from A in _context.Zaposlenici
                       select new Zaposlenik
                       {
                           Id = A.Id,
                           Ime = A.Ime,
                           Prezime = A.Prezime,
                           Slika = A.Slika,
                           Spol = A.Spol,
                           GodinaRodenja = A.GodinaRodenja,
                           PocetakRada = A.PocetakRada,
                           VrstaUgovora = A.VrstaUgovora,
                           TrajanjeUgovora = A.TrajanjeUgovora,
                           Odjel = A.Odjel,
                           BrojDanaGodišnjegOdmora = A.BrojDanaGodišnjegOdmora,
                           BrojSlobodnihDana = A.BrojSlobodnihDana,
                           BrojDanaPlacenogDopusta = A.BrojDanaPlacenogDopusta

                       };
            return await upit.ToListAsync();
        }

        public async Task<Zaposlenik> DohvatiZaposlenika(int Id)
        {
            return await _context.Zaposlenici.SingleOrDefaultAsync(x=>x.Id == Id);
        }

        public async void AzurirajZaposlenika(int id,Zaposlenik zaposlenik)
        {
            var zaposlenikZaAzuriranje = await DohvatiZaposlenika(id);
            zaposlenikZaAzuriranje.Ime=zaposlenik.Ime;
            zaposlenikZaAzuriranje.Prezime = zaposlenik.Prezime;
            zaposlenikZaAzuriranje.Slika= zaposlenik.Slika;
            zaposlenikZaAzuriranje.Spol = zaposlenik.Spol;
            zaposlenikZaAzuriranje.GodinaRodenja = zaposlenik.GodinaRodenja;
            zaposlenikZaAzuriranje.PocetakRada = zaposlenik.PocetakRada;
            zaposlenikZaAzuriranje.VrstaUgovora = zaposlenik.VrstaUgovora;
            zaposlenikZaAzuriranje.TrajanjeUgovora = zaposlenik.TrajanjeUgovora;
            zaposlenikZaAzuriranje.Odjel = zaposlenik.Odjel;
            zaposlenikZaAzuriranje.BrojDanaGodišnjegOdmora = zaposlenik.BrojDanaGodišnjegOdmora;
            zaposlenikZaAzuriranje.BrojSlobodnihDana = zaposlenik.BrojSlobodnihDana;
            zaposlenikZaAzuriranje.BrojDanaPlacenogDopusta = zaposlenik.BrojDanaPlacenogDopusta;

            _context.Zaposlenici.Update(zaposlenikZaAzuriranje);
            await _context.SaveChangesAsync();
        }

        
    }
}