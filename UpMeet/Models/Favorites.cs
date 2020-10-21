﻿using Dapper.Contrib.Extensions;
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
        public long id { get; set; }
        public string username { get; set; }
        public long eventID { get; set; }
    }
}
