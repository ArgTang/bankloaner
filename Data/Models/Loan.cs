using System;
using System.ComponentModel.DataAnnotations;

namespace Bankloaner.Data.Models
{
    public class Loan
    {
        [Key]
        public int loanId { get; set; }

        [Required]
        public decimal amount { get; set; }

        [Required]
        public int time { get; set; }

        public DateTime start { get; set; } = DateTime.Now;
    }
}
