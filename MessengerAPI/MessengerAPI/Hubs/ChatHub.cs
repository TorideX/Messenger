using MessengerAPI.Hubs.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessengerAPI.Hubs
{
    public class ChatHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            //Clients.All.SendAsync("RecieveMessage", this.Clients.Caller).Wait();
            return base.OnConnectedAsync();
        }

        public async Task SendMessage(ChatMessage message)
        {
            await Clients.All.SendAsync("RecieveMessage", message);
        }
    }
}
