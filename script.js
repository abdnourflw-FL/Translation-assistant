function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (message === '') return;
    
    displayMessage(message, 'user');
    input.value = '';
    
    setTimeout(() => {
        const response = getBotResponse(message);
        displayMessage(response, 'bot');
    }, 1000);
}

function quickQuestion(type) {
    const questions = {
        'سعر': 'كم سعر الترجمة؟',
        'وقت': 'ما هي مدة التسليم؟',
        'عينة': 'هل تقدم عينات مجانية؟',
        'دفع': 'ما هي طرق الدفع؟'
    };
    
    const input = document.getElementById('user-input');
    input.value = questions[type];
    sendMessage();
}

function displayMessage(message, sender) {
    const chatContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = message;
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('سعر') || lowerMsg.includes('price') || lowerMsg.includes('كم')) {
        return "💰 أسعار الترجمة:\n• 1-500 كلمة: 5 دولار\n• 501-1000 كلمة: 10 دولار\n• خصم 15% للمشاريع الكبيرة";
    }
    else if (lowerMsg.includes('وقت') || lowerMsg.includes('time') || lowerMsg.includes('مدة')) {
        return "⏰ مدة التسليم:\n• 1-500 كلمة: 24 ساعة\n• 501-1000 كلمة: 48 ساعة\n• خدمة عاجلة متاحة";
    }
    else if (lowerMsg.includes('دفع') || lowerMsg.includes('payment')) {
        return "💳 طرق الدفع:\n• بطاقات هدايا رقمية\n• ويسترن يونيون\n• 50% مقدماً، 50% بعد التسليم";
    }
    else if (lowerMsg.includes('عينة') || lowerMsg.includes('sample')) {
        return "📄 عينات مجانية:\n• 100 كلمة مجاناً\n• 300 كلمة تجريبية بخصم 50%\nللتواصل: abdnoun.flw@gmail.com";
    }
    else {
        return "❓ اسألني عن: الأسعار، مدة التسليم، طرق الدفع، أو عينات مجانية\n📧 للتواصل: abdnoun.flw@gmail.com";
    }
}
sendMessage();
