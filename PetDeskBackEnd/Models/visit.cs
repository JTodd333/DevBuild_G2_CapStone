using Dapper;
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace petdesk
{
    [Table("visit_list")]
    public class visit
    {
        [ExplicitKey]
        public int pet_id { get; set; }
        public int appt_id { get; set; }
        public string pet_name { get; set; }
        public string species { get; set; }
        public string dob { get; set; }
        public string pet_notes { get; set; }
        public string appt_date { get; set; }
        public string provider { get; set; }
        public string appt_notes { get; set; }
        public string user_name { get; set; }

        //CRUD - Read All
        public static List<visit> GetAll()
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            var result = db.GetAll<visit>().ToList();
            db.Close();
            return result;
        }

        //CRUD - Read One
        public static List<visit> GetOne(int id)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            var param = new { petid = id };
            var result = db.Query<visit>("select * from appt_upcoming_list where pet_id = @petid", param).ToList();
            db.Close();
            return result;
        }     

        ////CRUD - Create
        //public static visit Add(visit vt)
        //{
        //    MySqlConnection db = new MySqlConnection(DAL.CS);
        //    db.Open();
        //    db.Insert(vt);
        //    db.Close();
        //    return vt;
        //}

        ////CRUD - Delete
        //public static void Delete(int id)
        //{
        //    MySqlConnection db = new MySqlConnection(DAL.CS);
        //    db.Open();
        //    visit vt = new visit();
        //    vt.pet_id = id;
        //    db.Delete<visit>(vt);
        //    db.Close();
        //}

        ////CRUD - Update/Edit
        //public static void Update(visit vt)
        //{
        //    MySqlConnection db = new MySqlConnection(DAL.CS);
        //    db.Open();
        //    db.Update(vt);
        //    db.Close();
        //}
       
        //public static List<visit> SearchByUserName(string name)
        //{
        //    MySqlConnection db = new MySqlConnection(DAL.CS);
        //    db.Open();
        //    var param = new { userName = $"%{name}%" };
        //    var result = db.Query<visit>("select * from appt_upcoming_list where user_name = @userName", param).ToList();
        //    db.Close();
        //    return result;
        //} 
    }
}
    