$(document).ready(function() {
  var serverId = "772432560903028746";
  var botToken = "MTA2OTM0ODUxMzcxODIwNjU3NA.GdWt1O.kPT-WMQ3A27Gb-PqjPPXz2s-TuW0Kv-wemtak0";
  var apiUrl = "https://discord.com/api/guilds/" + serverId;

  $.ajax({
    type: "GET",
    url: apiUrl,
    headers: {
      "Authorization": "Bot " + botToken
    },
    success: function(data) {
      $("#member-count").text(data.member_count + " members");
    },
    error: function(xhr, status, error) {
      console.error(error);
    }
  });
});
