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
                return BadRequest();
            }

            var customer = getCustomer(dbObject.Customer.secNumber);

            if(customer == null) {
                customer = dbObject.Customer;
                customer.Loans.Append(dbObject.Loan);
                _context.customers.Add(customer);
            } else {
                customer.Loans.Append(dbObject.Loan);
                _context.Update(customer);
            }
            
            _context.SaveChanges();

            return new OkObjectResult("Post ok");
        }


        private Customer getCustomer(string seccnumber) {
            var res = _context.customers.Where(c => c.secNumber == seccnumber)
                                .Include(c => c.Loans)
                                .DefaultIfEmpty(null)
                                .Single();

            return res;
        }

        // // PUT api/values/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody]string value)
        // {
        // }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }
    }
}
