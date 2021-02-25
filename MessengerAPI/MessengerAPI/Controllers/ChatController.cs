using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessengerAPI.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ChatController : Controller
    {
        public ChatController()
        {

        }

        [HttpGet]
        public IActionResult Test()
        {
            return Ok("Well done!");
        }
    }
}
