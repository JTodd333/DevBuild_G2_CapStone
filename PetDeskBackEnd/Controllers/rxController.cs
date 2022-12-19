using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using petdesk;


namespace petdesk.Controllers
{
    [Route("rx")]
    [ApiController]
    public class rxController : ControllerBase
    {
        [HttpGet]
        public List<rx> GetAll()
        {
            return rx.GetAll();
        }

        [HttpGet("{id}")]
        public rx GetOne(int id)
        {
            return rx.GetOne(id);
        }

        [HttpPost]
        public rx Add(rx rx)
        {
            return rx.Add(rx);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            rx.Delete(id);
        }

        [HttpPut]
        public void Update(rx rx)
        {
            rx.Update(rx);
        }
    }
}