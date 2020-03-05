function sendDiscordMessage(name, message) {
  var url = "Your Discord Webhook URL";
  var options = {
    "content" : "From : "+name+" "+message
  };
  var response = UrlFetchApp.fetch(
    url,
    {
      method: "POST",
      contentType: "application/json",
      payload: JSON.stringify(options),
      muteHttpExceptions: true,
    }
  );
}