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
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IEnumerable<Customer> Get(int id)
        {
            return _context.customers
                            .Include(c => c.Loans)
                            .AsEnumerable();
        }

        // // POST api/values
        // [HttpPost]
        // public void Post([FromBody]string value)
        // {
        // }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] Customer customer, [FromBody] Loan loan )
        {

            var cCustomer = getCustomer(customer.secNumber);

            if (cCustomer != null)
            {
                cCustomer.Loans.Append(loan);
                _context.Update(cCustomer);
                _context.SaveChanges();
            } else {
                customer.Loans.Append(loan);
                _context.customers.Add(customer);   
                _context.SaveChanges();
            }
            return new OkObjectResult("Post ok");
        }


        private Customer getCustomer(string seccnumber) {
            var res = _context.customers.Where(c => c.secNumber == seccnumber)
                                .Include(c => c.Loans)
                                .Single();

            return res ?? null;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
