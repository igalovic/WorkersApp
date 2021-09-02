using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface IWorkerRepository
    {
        void AzurirajZaposlenika(int id,Zaposlenik zaposlenik);
        void DodajZaposlenika(Zaposlenik zaposlenik);
        Task<IEnumerable<Zaposlenik>> DohvatiSveZaposlenike();
        Task<Zaposlenik> DohvatiZaposlenika(int id);
    }
}