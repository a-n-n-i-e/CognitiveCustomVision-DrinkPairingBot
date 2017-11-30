# Cognitive Services Custom Vision - DrinkPairingBot

## 概要 | Description

[Microsoft Cognitive Services Custom Vision](https://azure.microsoft.com/ja-jp/services/cognitive-services/custom-vision-service/) および [Microsoft Bot Framework v3.0](https://www.botframework.com/) を利用した アプリケーションサンプルです。
**※こちらは アプリケーションサンプルです。ご自身の責任の下ご利用をお願いいたします。**

This is pitcure-detect sample bot by [Microsoft Cognitive Services Custom Vision](https://azure.microsoft.com/en-us/services/cognitive-services/custom-vision-service/) and [Microsoft Bot Framework v3.0](https://www.botframework.com/). 
**THIS IS SAMPLE and please use this for your infomation and on your own responsibility.**

![](https://msdnshared.blob.core.windows.net/media/2017/06/bluesky_20170624_10-e1498284424569.png)

[アプリケーションをイチから作成する方法]

人工知能パーツ Microsoft Cognitive Services で食べ物画像判定 BOT を作ろう！

[Custom Vision 編](http://qiita.com/annie/items/293525901020685ad5f6)  
Bot Framework 編: [C#](http://qiita.com/annie/items/bd232f67e06c83586ca5) | [Node.js](https://qiita.com/annie/items/41b60b90affe26925761)


## 使用環境 | Environment

Windows 10, Visual Studio 2017 Enterprise で作成されています。
- C# 編: Microsoft Bot Framework v3.0 テンプレート を使用しています。
環境構成方法は [Bot Framework を使うための開発環境](http://qiita.com/annie/items/edc26c0ee9603e84a2e4#bot-framework-%E3%82%92%E4%BD%BF%E3%81%86%E3%81%9F%E3%82%81%E3%81%AE%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83) をご覧ください。 
- Node.js 編: botbuilder, restify, dotenv, request を使用しています。

Developed on Windows 10, Visual Studio 2017 Enterprise.
- C# ver: Microsoft Bot Framework v3.0 Template used
How to get envorpnment, please refer [Environment for Bot Framework development](http://qiita.com/annie/items/edc26c0ee9603e84a2e4#bot-framework-%E3%82%92%E4%BD%BF%E3%81%86%E3%81%9F%E3%82%81%E3%81%AE%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83).
- Node.js var: botbuilder, restify, dotenv & request used.

## 利用方法 | How to Use

ダウンロード後、Visual Studio のソリューションファイル(DrinkPairingBot.sln)を開き、ビルドを行って必要なライブラリの読み込みを行ってください。
Custom Vision の画像判定 App はご自身で作成いただく必要があります。作成方法は [人工知能パーツ Microsoft Cognitive Services で食べ物画像判定 BOT を作ろう！ [Custom Vision 編]](http://qiita.com/annie/items/293525901020685ad5f6) をご覧ください。  

- C# 編:
RootDialog.cs の 35 & 37行目にある、PREDICTION_KEY & PROJECT_ID を作成した Custom Vision App のものに変更してください。
- Node.js 編:
.env の Your_CustomVision_Prediction(byImageURL)Url & Your_CustomVision_PredictionKey を作成した Custom Vision App のものに変更してください。

Webアプリとして起動したら、Bot Framework Channel Emulator でアクセスします。
Emulator の利用方法は [Botアプリケーションのローカル実行とエミュレーターによるアクセス](http://qiita.com/annie/items/edc26c0ee9603e84a2e4#bot%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E5%AE%9F%E8%A1%8C%E3%81%A8%E3%82%A8%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC%E3%81%AB%E3%82%88%E3%82%8B%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9) をご覧ください。


After download bits, open solution file (DrinkPairingBot.sln) and make build so to import nesessary libraries.
You need build your own Custom Vision App. Please refer [How to create food detect app using Microsoft Cognitive Services Custom Vision API](http://qiita.com/annie/items/293525901020685ad5f6)
- C# ver:
Paste PREDICTION_KEY & PROJECT_ID on line 35 & 37 in RootDialog.cs.
- Node.js ver:
Paste Your_CustomVision_Prediction(byImageURL)Url & Your_CustomVision_PredictionKey in .env

While working web app, access via Bot Framework Channel Emulator.
Please refer [How to running bot app locally and accessing via emulator](http://qiita.com/annie/items/edc26c0ee9603e84a2e4#bot%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E5%AE%9F%E8%A1%8C%E3%81%A8%E3%82%A8%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC%E3%81%AB%E3%82%88%E3%82%8B%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9)
