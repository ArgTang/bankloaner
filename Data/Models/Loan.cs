using System;
using System.ComponentModel.DataAnnotations;

namespace Bankloaner.Data.Models
{
    public class Loan
    {
        [Required]
        public int loanId { get; set; }

        [Required]
        [Range(10000, 1000000)]
        public decimal amount { get; set; }

        [Required]
        public int timeInMonths { get; set; }

        [Required]
        public DateTime start { get; set; }
    }
}
