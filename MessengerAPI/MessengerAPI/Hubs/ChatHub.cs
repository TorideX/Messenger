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
        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var client = ClientSource.Clients.FirstOrDefault(c => c.ConnectionId == this.Context.ConnectionId);
            ClientSource.Clients.Remove(client);

            var usernames = ClientSource.Clients.Select(c => c.Username).ToList();
            await Clients.All.SendAsync("RecieveClients", usernames);
            
            await base.OnDisconnectedAsync(exception);
        }
        public async Task ClientJoined(string username)
        {
            var client = ClientSource.Clients.FirstOrDefault(c => c.Username == username);
            if(client == null)
            {
                ClientSource.Clients.Add(new Client { ConnectionId = this.Context.ConnectionId, Username = username });
            }
            else
            {
                client.ConnectionId = this.Context.ConnectionId;
            }

            var usernames = ClientSource.Clients.Select(c => c.Username).ToList();
            await Clients.All.SendAsync("RecieveClients", usernames);
        }
        public async Task SendMessage(ChatMessage message)
        {
            ClientSource.AllMessages.Add(message);
            var client = ClientSource.Clients.FirstOrDefault(c => c.Username == message.To);
            if (client == null) return;
            await Clients.Client(client.ConnectionId).SendAsync("RecieveMessage", message);
        }

        public async Task GetMessages(string partner)
        {
            var user = ClientSource.Clients.FirstOrDefault(c => c.ConnectionId == this.Context.ConnectionId);
            if (user == null) return;
            var messages = ClientSource.AllMessages.Where(m => 
                            (m.From == user.Username && m.To == partner) || 
                            (m.From == partner && m.To == user.Username)
                            ).ToList();

            await Clients.Caller.SendAsync("GetMessagesFromPartner", messages);
        }
    }
}
