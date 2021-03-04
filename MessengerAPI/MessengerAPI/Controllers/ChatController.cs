using MessengerAPI.Services.Abstract;
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
        private readonly IChatService chatService;

        public ChatController(IChatService chatService)
        {
            this.chatService = chatService;
        }

        [HttpGet]
        public IActionResult GetMessages([FromQuery]string userId)
        {
            if (string.IsNullOrWhiteSpace(userId)) return BadRequest();
            var messages = chatService.GetChatMessages(userId);
            return Ok(messages);
        }
    }
}
