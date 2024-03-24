'use strict';

import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed@1.2.1/dist/web.js"
var scriptTag = document.getElementById('chat_config');
var chatConfig = JSON.parse(scriptTag.textContent);
Chatbot.init({
    chatflowid: chatConfig.chatflowid,
    apiHost: chatConfig.apiHost
})