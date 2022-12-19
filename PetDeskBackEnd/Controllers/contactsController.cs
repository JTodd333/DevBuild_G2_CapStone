using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using petdesk;

namespace petdesk.Controllers
{
    [Route("contacts")]
    [ApiController]
    public class contactsController : ControllerBase
    {

        [HttpGet]
        public List<contacts> GetAll()
        {
            return contacts.GetAll();
        }

        [HttpGet("{id}")]
        public contacts GetOne(int id)
        {
            return contacts.GetOne(id);
        }

        [HttpPost]
        public contacts Add(contacts con)
        {
            return contacts.Add(con);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            contacts.Delete(id);
        }

        [HttpPut]
        public void Update(contacts con)
        {
            contacts.Update(con);
        }

    }
}
