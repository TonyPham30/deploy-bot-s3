(function(KoreSDK){

    var KoreSDK=KoreSDK||{};

    var botOptionsWiz = {};
    botOptionsWiz.logLevel = 'debug';
    botOptionsWiz.koreAPIUrl = "https://bots.kore.ai";

    botOptionsWiz.JWTUrl = "/jwt_service";
    botOptionsWiz.userIdentity = 'Tony';// Provide users email id here
    botOptionsWiz.botInfo = { name: "booking", "_id": "st-10ca7bbe-2ffd-5802-a469-c2ceda5bd860" }; // bot name is case sensitive
    botOptionsWiz.clientId = "cs-2b8f13f2-7a6a-5b01-bb99-06fdc0a7df61";
    botOptionsWiz.clientSecret = "F2WlwqEuhBYxYmXyrcJ3AtGelZEF04rg3qusVRa0tRc=";

    var widgetsConfig = {
        botOptions: botOptionsWiz
    };
    
    KoreSDK.widgetsConfig=widgetsConfig
})(window.KoreSDK);