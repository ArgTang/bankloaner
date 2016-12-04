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
        [MinLength(2)]
        public string name { get; set; }

        [Required]
        [EmailAddress]
        public string email { get; set; }

        [Required]
        [RegularExpression(@"^[0-9]+$")]
        [MaxLength(8)]
        [MinLength(8)]
        public string phone { get; set; }
        
        public virtual ICollection<Loan> Loans {get; set;} = new List<Loan>{};
    }
}