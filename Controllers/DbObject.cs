using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Bankloaner.Data.Models;

namespace Bankloaner.Controllers
{
    public class DbObject
    {
        [Required]
        public Customer Customer { get; set; }
        
        [Required]
        public Loan Loan { get; set; }
    }
}