using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace petdesk.Controllers
{
    [Route("petrxview")]
    [ApiController]
    public class petrxviewController : ControllerBase
    {

        [HttpGet]
        public List<petrxview> GetAll()
        {
            return petrxview.GetAll();
        }

        [HttpGet("pet/{id}")]
        public List<petrxview> GetOne(int id)
        {
            return petrxview.GetOne(id);
        }


    }
}
