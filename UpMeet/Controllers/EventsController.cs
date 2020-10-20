using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UpMeet.Models;
using UpMeet.Services;

namespace UpMeet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private IDAL dal;
        public EventsController(IDAL dal)
        {
            this.dal = dal;
        }

        [HttpGet]
        public IEnumerable<Events> GetAll()
        {
            return dal.GetAllEvents();
        }

        [HttpGet("{id}")]
        public Events GetEvent(long? id)
        {
            return dal.GetEvent((long)id); // cast?
        }

        [HttpPost]
        public void AddEvent(Events newEvent) {

            dal.AddEvent(newEvent);
        }




    }
}
