function getMember() {
  
  const slackUrl = "https://slack.com/api/users.list";
  const token_   = returnSlackAPITokens();

  const channelId = "C03PK8ZG6DC";

  const options = {
      "payload": {
        token: token_,
    }
  }


  var result = UrlFetchApp.fetch(slackUrl, options);
  // Logger.log(result);
  // const obj = result.get("ok");

  const content = result.getContentText();
  // Logger.log(typeof content);
  // Logger.log(content);
  const output = content.split(',');//改行で分割して1行ごとに要素とした配列
  const SHEET_NAME = 'log';
  const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);

  // for(let i=0;i<output.length;i++){
  //     sheet.getRange(i+1,1).setValue(output[i]+ ",")
  //     // Logger.log(output[i]);
  // }


  let json = JSON.parse(result);
  const members = json["members"];

  for(let i = 0; i < members.length; i++){
    Logger.log("name:"+ members[i]["name"]　+" / id:"+ members[i]["id"])
  }

  // Logger.log(json["members"]["reactions"]);
  // Logger.log(json)
  // Logger.log(json["message"]["reactions"]);
  // Logger.log(typeof json["message"]["reactions"]);




  // https://www.pre-practice.net/2018/02/utf1616_77.html
  var str = "神";
  var utf16 = [];
  var hexadecimal = [];
  var char = "";
  for (var i = 0; i < str.length; i++) {
    utf16.push(str.charCodeAt(i));
    hexadecimal.push(utf16[i].toString(16)); 
    char += String.fromCharCode("0x" + hexadecimal[i]);
  }
  Logger.log([str.length, utf16, hexadecimal, char])
}

