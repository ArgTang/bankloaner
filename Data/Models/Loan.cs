using System;
using System.ComponentModel.DataAnnotations;

namespace Bankloaner.Data.Models
{
    public class Loan
    {
        [Key]
        public int loanId { get; set; }

        [Required]
        [RegularExpression(@"^[0-9]+$")]
        public int amount { get; set; }

        [Required]
        [RegularExpression(@"^[0-9]+$")]
        public int time { get; set; }

        public DateTime start { get; set; } = DateTime.Now;
    }
}
