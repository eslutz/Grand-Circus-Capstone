using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using UpMeet.Models;

namespace UpMeet.Services
{
    public class DAL: IDAL
    {
        private string connString;
        public DAL(IConfiguration config)
        {
            connString = config.GetConnectionString("Tyler");
        }
        public IEnumerable<Events> GetAllEvents()
        {
            SqlConnection conn = new SqlConnection(connString);
            string command = "SELECT * FROM Events";
            IEnumerable<Events> result = conn.Query<Events>(command);
            conn.Close();
            return result;
        }
        public Events GetEvent(long ID)
        {
            SqlConnection conn = new SqlConnection(connString);
            string command = $"SELECT * FROM Events WHERE EventID={ID}";
            Events result = conn.QueryFirst<Events>(command, new { EventID = ID });
            conn.Close();
            return result;

        }
        public void AddEvent(Events newEvent)
        {
            SqlConnection conn = new SqlConnection(connString);
            conn.Insert(newEvent);
        }

        public IEnumerable<Events> GetAllFavorites(string username)
        {
            SqlConnection conn = new SqlConnection(connString);
            string command = "SELECT Events.EventID, Events.Name, Events.Description, Events.Date FROM dbo.Favorites full join dbo.Events on dbo.Events.EventID = dbo.Favorites.EventID where Username = '@username';";  //semicolon?
            IEnumerable<Events> result = conn.Query<Events>(command);
            conn.Close();
            return result;
        }

        public void AddFavorite(Favorites fav)
        {
            SqlConnection conn = new SqlConnection(connString);
            conn.Insert(fav);
        }

        public void RemoveFavorite(Favorites fav)
        {
            SqlConnection conn = new SqlConnection(connString);
            conn.Delete(new Favorites() {ID = fav.ID });
        }
    }
}
