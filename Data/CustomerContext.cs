using Microsoft.EntityFrameworkCore;
using Bankloaner.Data.Models;

namespace Bankloaner.Data
{
    public class CustomerContext : DbContext
    {
        public CustomerContext(DbContextOptions<CustomerContext> options): base(options)
        {
        
        }

        public DbSet<Customer> customers { get; set; }
    }
}