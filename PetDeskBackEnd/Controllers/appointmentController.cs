using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using petdesk;

namespace petdesk.Controllers
{
    [Route("appointment")]
    [ApiController]
    public class appointmentController : ControllerBase
    {
        [HttpGet]
        public List<appointment> GetAll()
        {
            return appointment.GetAll();
        }

        [HttpGet("{id}")]
        public appointment GetOne(int id)
        {
            return appointment.GetOne(id);
        }

        [HttpPost]
        public appointment Add(appointment ap)
        {
            return appointment.Add(ap);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            appointment.Delete(id);
        }

        [HttpPut]
        public void Update(appointment ap)
        {
            appointment.Update(ap);
        }
    }
}