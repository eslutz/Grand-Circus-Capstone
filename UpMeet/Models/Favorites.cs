using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UpMeet.Models
{
    [Table("Favorites")]
    public class Favorites
    {
        [Key]
        public long? ID { get; set; }
        public string Username { get; set; }
        public long EventID { get; set; }
    }
}
