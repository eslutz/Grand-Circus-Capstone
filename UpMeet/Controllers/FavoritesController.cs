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
    public class FavoritesController : ControllerBase
    {
        private IDAL dal;
        public FavoritesController(IDAL dal)
        {
            this.dal = dal;
        }

        [HttpGet("{username}")]
        public IEnumerable<Events> GetAll(string username)
        {
            return dal.GetAllFavorites(username);
        }

        [HttpPost]
        public void AddFavorite(Favorites fav)
        {
            dal.AddFavorite(fav);
        }

        [HttpPost]
        public void RemoveFavorite(Favorites fav)
        {
            dal.RemoveFavorite(fav);
        }

    }
}
