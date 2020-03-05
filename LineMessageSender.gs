var channel_access_token = "Your channel access token";

// �{�b�g�Ƀ��b�Z�[�W���M/�t�H���[/�A���t�H���[�������̏���
function doPost(e) {
  var events = JSON.parse(e.postData.contents).events;
  events.forEach(function(event) {
    if(event.type == "message") {
      reply(event);
    } else if(event.type == "follow") {
      follow(event);
    } else if(event.type == "unfollow") {
      unFollow(event);
    }
 });
}

function reply(e) {
  var requestHeader = {
    "headers" : {
      "Authorization" : "Bearer " + channel_access_token
    }
  };
  var userID = e.source.userId;
  var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/profile/"+userID, requestHeader);
  
  var message = e.message.text;
  var name = JSON.parse(response.getContentText()).displayName;
  sendDiscordMessage(name, message);
  return response.getResponseCode();
//  var message = {
//    "replyToken" : e.replyToken,
//    "messages" : [
//      {
//        "type" : "text",
//        "text" : ((e.message.type=="text") ? 
//                  (e.message.text.length == 4 ? 
//                                              e.message.text[0]+e.message.text[1]+e.message.text[3]+e.message.text[2]+e.message.text[2] : 
//                                              "|S| = 4") : 
//                  "Text�ȊO�͕Ԃ��܂���c")
//      }
//    ]
//  };
//  var replyData = {
//    "method" : "post",
//    "headers" : {
//      "Content-Type" : "application/json",
//      "Authorization" : "Bearer " + channel_access_token
//    },
//    "payload" : JSON.stringify(message)
//  };
//  var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", replyData);
//  return response.getResponseCode();
}

/* �t�H���[���ꂽ���̏��� */
function follow(e) {

}

/* �A���t�H���[���ꂽ���̏��� */
function unFollow(e){

}
