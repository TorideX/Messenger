using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessengerAPI.Hubs.Models
{
    public static class ClientSource
    {
        public static List<Client> Clients { get; } = new List<Client>();
        public static List<ChatMessage> AllMessages { get; } = new List<ChatMessage>();
    }
}
