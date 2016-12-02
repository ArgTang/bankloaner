using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Bankloaner.Data.Models
{
    public class Customer
    {
        [Key]
        [Required]
        public string secNumber { get; set; }

        [Required]
        public string name { get; set; }

        [Required]
        [EmailAddress]
        public string email { get; set; }

        [Required]
        [Phone]
        public string phone { get; set; }
        
        public virtual ICollection<Loan> Loans {get; set;} = new List<Loan>{};
    }
}