using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace petdesk.Controllers
{
    [Route("visit")]
    [ApiController]
    public class visitController : ControllerBase
    {
        [HttpGet]
        public List<visit> GetAll()
        {
            return visit.GetAll();
        }

        [HttpGet("pet/{id}")]
        public List<visit> GetOne(int id)
        {
            return visit.GetOne(id);
        }

        //[HttpPost]
        //public visit Add(visit vt)
        //{
        //    return visit.Add(vt);
        //}

        //[HttpDelete("pet/{id}")]
        //public void Delete(int id)
        //{
        //    visit.Delete(id);
        //}

        //[HttpPut]
        //public void Update(visit vt)
        //{
        //    visit.Update(vt);
        //}
       
        //[HttpGet("SearchByUserName/pet/{name}")]
        //public List<visit> SearchByPetId(string name)
        //{
        //    return visit.SearchByUserName(name);
        //}       
    }
}