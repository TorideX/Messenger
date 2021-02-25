using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessengerAPI.Hubs.Models
{
    public class ChatMessage
    {
        public string From { get; set; }
        public string To { get; set; }
        public string Message { get; set; }
        public string Date { get; set; }
    }
}
