using Dapper;
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace petdesk
{
    [Table("pet_rx_list")]
    public class petrxview
    {
        [ExplicitKey]
        public int pet_id { get; set; }
        public string user_name { get; set; }
        public string pet_name { get; set; }
        public string species { get; set; }
        public string dob { get; set; }
        public int rx_id { get; set; }
        public string rx_name { get; set; }
        public string rx_reminder { get; set; }
        public string rx_notes { get; set; }


        //CRUD - Read All
        public static List<petrxview> GetAll()
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            var result = db.GetAll<petrxview>().ToList();
            db.Close();
            return result;
        }

        //CRUD - Read One
        public static List<petrxview> GetOne(int id)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            var param = new { petid = id };
            var result = db.Query<petrxview>("select * from pet_rx_list where pet_id = @petid", param).ToList();
            db.Close();
            return result;
        }



    }
}
