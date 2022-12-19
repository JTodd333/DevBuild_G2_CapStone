using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace petdesk
{
    [Table("appointment")]
    public class appointment
    {
        [Key]
        public int id { get; set; }
        public int pet_id { get; set; }
        public string pet_name { get; set; }
        public string appt_date { get; set; }
        public string provider { get; set; }
        public string appt_notes { get; set; }

        //CRUD - Read All
        public static List<appointment> GetAll()
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            var result = db.GetAll<appointment>().ToList();
            db.Close();
            return result;
        }

        //CRUD - Read One
        public static appointment GetOne(int id)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            var result = db.Get<appointment>(id);
            db.Close();
            return result;
        }

        //CRUD - Create
        public static appointment Add(appointment ap)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            db.Insert(ap);
            db.Close();
            return ap;
        }

        //CRUD - Delete
        public static void Delete(int id)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            appointment ap = new appointment();
            ap.id = id;
            db.Delete<appointment>(ap);
            db.Close();
        }

        //CRUD - Update/Edit
        public static void Update(appointment ap)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            db.Update(ap);
            db.Close();
        }
    }
}
    