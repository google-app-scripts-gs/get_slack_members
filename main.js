function main() {
  const slackUrl = "https://slack.com/api/reactions.get";
  const token_   = returnSlackAPITokens();

  const channelId = "C03PK8ZG6DC";

  const options = {
      "payload": {
        token: token_,
        channel: channelId,
        full: true,
        timestamp: "165985.7591016229"
    }
  }


  var result = UrlFetchApp.fetch(slackUrl, options);
  // Logger.log(result);
  // const obj = result.get("ok");
  Logger.log(typeof result)
  let json = JSON.parse(result);
  Logger.log(json["message"]["reactions"]);
  Logger.log(typeof json["message"]["reactions"]);
}
