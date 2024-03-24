'use strict';

const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
const config = document.createElement('script');

config.setAttribute("type", "application/json");
config.setAttribute("id", "chat_config");
fetch(chrome.runtime.getURL('chat.json'))
    .then(response => response.text())
    .then(data => config.textContent = data)
    .catch((error) => console.error('Error:', error));
head.insertBefore(config, head.lastChild);

const script = document.createElement('script');
script.setAttribute("type", "module");
script.setAttribute("src", chrome.runtime.getURL('main.js'));
head.insertBefore(script, head.lastChild);
