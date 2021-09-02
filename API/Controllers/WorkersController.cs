using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class WorkersController :BaseApiController
    {
        private readonly IWorkerRepository _workerRepository;
        private readonly DataContext _context;

        public WorkersController(IWorkerRepository workerRepository, DataContext context)
        {
            _workerRepository = workerRepository;
            _context = context;
        }

        [HttpGet("workers")]
        public async Task<ActionResult<IEnumerable<Zaposlenik>>> DohvatiSveZaposlenike()
        {
            var zaposlenici = await _workerRepository.DohvatiSveZaposlenike();
            return Ok(zaposlenici);
        }

        [HttpGet("workers/{id}")]
        public async Task<ActionResult<Zaposlenik>> DohvatiZaposlenika(int id)
        {
            var zaposlenik = await _workerRepository.DohvatiZaposlenika(id);
            return zaposlenik;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> AzurirajZaposlenika(int id , Zaposlenik zaposlenik)
        {
            _workerRepository.AzurirajZaposlenika(id,zaposlenik);
            return Ok();
        }

        [HttpPost("dodajZaposlenika")]
        public async Task<ActionResult> dodajZaposlenika(Zaposlenik zaposlenik)
        {
            _workerRepository.DodajZaposlenika(zaposlenik);
             return Ok();
        }
    }
}