using MessengerAPI.Hubs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessengerAPI.Services.Abstract
{
    public interface IChatService
    {
        IEnumerable<ChatMessage> GetChatMessages(string userId);
    }
}
