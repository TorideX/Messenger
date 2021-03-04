using MessengerAPI.Hubs.Models;
using MessengerAPI.Services.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessengerAPI.Services.Concrete
{
    public class ChatService : IChatService
    {
        public IEnumerable<ChatMessage> GetChatMessages(string userId)
        {
            var messages = ClientSource.AllMessages.Where(m => m.From == userId || m.To == userId).ToList();
            return messages;
        }
    }
}
