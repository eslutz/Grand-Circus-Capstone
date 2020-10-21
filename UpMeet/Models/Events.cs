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
        public long eventID { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string date { get; set; }
    }
}
