var restify = require('restify');
var builder = require('botbuilder');
// モジュール追加
require('dotenv').config();
var request = require('request');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});

var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

server.post('/api/messages', connector.listen());

var bot = new builder.UniversalBot(connector, function (session) {

    // デフォルトのメッセージをセット
    var msg = "こんにちは！ドリンクおすすめ Botです。食べ物の写真を送ってね♪";

    // 画像が送られてきたか確認
    if (session.message.attachments.length > 0) {
        // 変数定義
        var tag = "";      // 食べ物カテゴリータグ
        var food = false;  // "food" タグの有無

        // Custom Vision を使う準備
        var customVisionApiRequestOptions = {
            uri: process.env.CUSTOM_VISION_API_URI,
            headers: {
                "Content-Type": "application/json",
                "Prediction-Key": process.env.CUSTOM_VISION_PREDICTION_KEY
            },
            json: {
                "Url": session.message.attachments[0].contentUrl
            }
        };

        // Custom Vision を呼び出してタグを取得
        request.post(customVisionApiRequestOptions, function (error, response, body) {

            // 結果取得OKの場合
            if (!error && response.statusCode == 200) {

                // food タグ および カテゴリーを取得
                if (response.body.Predictions[0].Tag != "food") {
                    if (response.body.Predictions[0].Probability > 0.8) {
                        tag = response.body.Predictions[0].Tag;
                    }
                } else {
                    if (response.body.Predictions[0].Probability > 0.8) {
                        food = true;
                    }
                    if (response.body.Predictions[1].Probability > 0.8) {
                        tag = response.body.Predictions[1].Tag;
                    }
                }

                // 取得したタグに対応してメッセージをセット
                //if (tag != "") {
                //    msg = "この写真は " + tag + " だね♪";
                //}
                switch (tag) {
                    case "curry":
                        msg = "カレーおいしそう！甘いチャイでホッとしよう☕";
                        break;
                    case "gyoza":
                        msg = "やっぱ餃子にはビールだね🍺";
                        break;
                    case "pizza":
                        msg = "ピザには刺激的な炭酸飲料★はどうかな？";
                        break;
                    case "meat":
                        msg = "肉、にく、ニク♪ 赤ワインを合わせてどうぞ🍷";
                        break;
                    case "ramen":
                        msg = "やめられないよねー。ラーメンには緑茶でスッキリ☆";
                        break;
                    case "sushi":
                        msg = "今日はちょっとリッチにお寿司？合わせるなら日本酒かな🍶";
                        break;
                }

                if (tag == "" && food == true) {
                    msg = "この食べ物は分からないです．．．日本の冬は番茶だね！";
                }

                // メッセージ送信
                session.send(msg);

                // 結果取得NGの場合

            } else {
                console.log("error: " + error);
                session.send("画像を判定できませんでした。もう一度食べ物の写真を送ってね♪");
            }
        });

    // 画像がない場合
    } else {
        session.send(msg);
    }

});