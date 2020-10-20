using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UpMeet.Models
{
    [Table("Events")]
    public class Events
    {
        [Key]
        public long? EventID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
    }
}
