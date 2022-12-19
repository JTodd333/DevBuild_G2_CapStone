using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace petdesk
{
    [Table("pet")]
    public class pet
    {
        [Key]
        public int id { get; set; } 
        public string user_name { get; set; }
        public string pet_name { get; set; }
        public string species { get; set; }
        public string breed { get; set; }
        public string dob { get; set; }
        public string pet_notes { get; set; }


        //CRUD - Read All
        public static List<pet> GetAll()
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            var result = db.GetAll<pet>().ToList();
            db.Close();
            return result;
        }

        //CRUD - Read One
        public static pet GetOne(int id)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            var result = db.Get<pet>(id);
            db.Close();
            return result;
        }

        //CRUD - Create
        public static pet Add(pet pt)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            db.Insert(pt);
            db.Close();
            return pt;
        }

        //CRUD - Delete
        public static void Delete(int id)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            pet pt = new pet();
            pt.id = id;
            db.Delete<pet>(pt);
            db.Close();
        }

        //CRUD - Update/Edit
        public static void Update(pet pt)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            db.Update(pt);
            db.Close();
        }
    }
}
  