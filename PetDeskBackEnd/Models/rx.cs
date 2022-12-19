using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace petdesk
{
    [Table("rx")]
    public class rx
    {
        [Key]
        public int id { get; set; }
        public int pet_id { get; set; }
        public string pet_name { get; set; }
        public string rx_name { get; set; }
        public string rx_reminder { get; set; }
        public string rx_notes { get; set; }


        //CRUD - Read All
        public static List<rx> GetAll()
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            var result = db.GetAll<rx>().ToList();
            db.Close();
            return result;
        }

        //CRUD - Read One
        public static rx GetOne(int id)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            var result = db.Get<rx>(id);
            db.Close();
            return result;
        }

        //CRUD - Create
        public static rx Add(rx rx)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            db.Insert(rx);
            db.Close();
            return rx;
        }

        //CRUD - Delete
        public static void Delete(int id)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            rx rx = new rx();
            rx.id = id;
            db.Delete<rx>(rx);
            db.Close();
        }

        //CRUD - Update/Edit
        public static void Update(rx rx)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            db.Update(rx);
            db.Close();
        }
    }
}
   