using System.Collections.Generic;
using Bankloaner.Data;
using Bankloaner.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Bankloaner.Controllers
{
    [Route("api/[controller]")]
    public class LoanController : Controller
    {
        private readonly CustomerContext _context;

        public LoanController(CustomerContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Test1", "Test2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IEnumerable<Customer> Get(int id)
        {
            var res =  _context.customers
                            .Include(c => c.Loans)
                            .ToList();
            return res;
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] DbObject dbObject)
        {
           
            if(!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            var customer = getCustomer(dbObject.Customer.secNumber);

            if ( customer != null ) {
                ModelState.AddModelError("", "Kunde finnes allerede, Vennligst a kontakt med en kundebehandler");
                return BadRequest(ModelState);
            }
            customer = dbObject.Customer;
            customer.Loans.Add(dbObject.Loan);
            _context.Add(customer);
            _context.SaveChanges();
            return Ok("Søknad sent til behandling");
        }


        private Customer getCustomer(string seccnumber)
        {
            var res = _context.customers.Where(c => c.secNumber == seccnumber)
                                .Include(c => c.Loans)
                                .DefaultIfEmpty(null)
                                .Single();

            return res;
        }
    }
}
