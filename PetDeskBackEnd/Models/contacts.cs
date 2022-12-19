using Dapper;
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace petdesk
{
    [Table("contacts")]
    public class contacts
    {
        [Key]
        public int id { get; set; }
        public string user_name { get; set; }
        public string contact_name { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string address { get; set; }

        //CRUD - Read All
        public static List<contacts> GetAll()
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            var result = db.GetAll<contacts>().ToList();
            db.Close();
            return result;
        }

        //CRUD - Read One
        public static contacts GetOne(int id)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            var result = db.Get<contacts>(id);
            db.Close();
            return result;
        }

        //CRUD - Create
        public static contacts Add(contacts con)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            db.Insert(con);
            db.Close();
            return con;
        }

        //CRUD - Delete
        public static void Delete(int id)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            contacts con = new contacts();
            con.id = id;
            db.Delete<contacts>(con);
            db.Close();
        }

        //CRUD - Update/Edit
        public static void Update(contacts con)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            db.Update(con);
            db.Close();
        }

    }
}