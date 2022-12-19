using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using petdesk;

namespace petdesk.Controllers
{
    [Route("pet")]
    [ApiController]
    public class petController : ControllerBase
    { 
        [HttpGet]
        public List<pet> GetAll()
        {
            return pet.GetAll();
        }

        [HttpGet("{id}")]
        public pet GetOne(int id)
        {
            return pet.GetOne(id);
        }

        [HttpPost]
        public pet Add(pet pt)
        {
            return pet.Add(pt);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            pet.Delete(id);
        }

        [HttpPut]
        public void Update(pet pt)
        {
            pet.Update(pt);
        }
    }
}