using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UpMeet.Models;

namespace UpMeet.Services
{
    public interface IDAL
    {
        IEnumerable<Events> GetAllEvents();

        Events GetEvent(long ID);

        void AddEvent(Events newEvent);

        IEnumerable<Events> GetAllFavorites(string username);

        void AddFavorite(Favorites fav);

        void RemoveFavorite(Favorites fav);
        
    }
}
