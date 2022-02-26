var whatsappSenderWidget = function(customSettings){
    let settings = Object.assign({
        number : '593000111222',
        buttonId : 'whatsappsender-button',
        conversationId : 'whatsappsender-conversation',
        messageOuterId : 'whatsappsender-conversation-message-outer',
        messageSenderId : 'whatsappsender-send',
        messageInputId : 'whatsappsender-input',
        message : 'Hola, pueden ayudarme con mas información',
        information : '¿Podemos ayudarte?',
    }, customSettings );

    settings.url = 'https://wa.me/'+settings.number+'?text=';

    document.write('<div class="whatsappsender"><div id="whatsappsender-conversation" class="whatsappsender-conversation"><div class="whatsappsender-conversation-header">CONTÁCTANOS</div><div class="whatsappsender-conversation-message">'+settings.information+'</div><div class="whatsappsender-conversation-footer"><div class="whatsappsender-conversation-bar"><div class="whatsappsender-input"><textarea type="text" class="revert-all" id="whatsappsender-input" placeholder="Escribe un mensaje">'+settings.message+'</textarea> </div><a target="_blank" href="javascript://" id="whatsappsender-send" class="whatsappsender-btn"><span class="whatsappsender-send-icon"> &nbsp;</span></a></div><small class="whatsappsender-develop">Creado con <a href="https://github.com/andresdev95/whatsappsenderwidget" target="_blank">Whatsapp Sender generate</a></small></div></div><div id="whatsappsender-conversation-message-outer" class="whatsappsender-conversation-message-outer"><div id="whatsappsender-text-message-outer" class="whatsappsender-text-message-outer">'+settings.information+'</div></div><div class="whatsappsender-button-wrapper"><div class="whatsappsender-button" id="whatsappsender-button"><svg fill="#fff" viewBox="0 0 32 32" class="whatsapp-ico"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path></svg></div></div></div>');


    let button = document.getElementById(settings.buttonId);
    let conversation = document.getElementById(settings.conversationId);
    let messageOuter = document.getElementById(settings.messageOuterId);
    let messageSender = document.getElementById(settings.messageSenderId);
    let messageInput = document.getElementById(settings.messageInputId);

    let chatOpen = false;

    conversation.style.display="none";
    conversation.style.opacity="0";

    button.addEventListener("click", openChat);
    messageOuter.addEventListener("click", openChat);
    messageSender.addEventListener("click", setLinkSender);
    messageInput.addEventListener("input", auto_grow);

    function openChat(){
        (chatOpen == false)
            ? ( conversation.style.display="block", conversation.style.opacity=100, messageOuter.style.display="none" )
            : ( conversation.style.opacity=0, conversation.style.display="none" )
        chatOpen = !chatOpen
    }
    function setLinkSender(){
        messageSender.href = encodeURI(settings.url + messageInput.value);
    }
    function auto_grow() {
        messageInput.style.height = "5px";
        messageInput.style.height = (messageInput.scrollHeight + 5)+"px";
    }
}