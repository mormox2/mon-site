import { currentLang } from '../core/i18n.js';
import { removeTrapFocus, trapFocus } from '../utils/focus-trap.js';

// ==================== CHATBOT STATE HELPER ====================
function setChatbotState(open) {
    const chatbotBox = document.getElementById('chatbot-box');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    if (!chatbotBox || !chatbotToggle) return;
    
    if (open) {
        chatbotBox.classList.add('open');
        chatbotBox.setAttribute('aria-hidden', 'false');
        chatbotToggle.setAttribute('aria-expanded', 'true');
    } else {
        chatbotBox.classList.remove('open');
        chatbotBox.setAttribute('aria-hidden', 'true');
        chatbotToggle.setAttribute('aria-expanded', 'false');
    }
}

// ==================== CHATBOT ====================
const chatFlows = {
    fr: {
        title: '🦷 Assistant Dr Rtimi', welcome: '👋 Bonjour ! Comment puis-je vous aider ?',
        options: [ { label: '📅 Prendre RDV', key: 'rdv' }, { label: '🦷 Nos services', key: 'services' }, { label: '🕒 Horaires', key: 'hours' }, { label: '📞 Contact', key: 'contact' } ],
        rdv: { msg: 'Je vous redirige vers notre formulaire de rendez-vous !', fn: () => { setChatbotState(false);document.getElementById('rdv').scrollIntoView({ behavior: 'smooth' }); }},     
        services: { msg: 'Nous proposons : Implants, CAD/CAM exocad, Facettes E-max, Orthodontie, Parodontologie (PRF) et Urgences.', fn: () => document.getElementById('services').scrollIntoView({ behavior: 'smooth' }) },
        hours: { msg: '🕒 Lun–Ven : 08h00–18h00\n🕒 Samedi : 08h00–13h00\n📅 Dimanche : Fermé', fn: null },
        contact: { msg: '📞 +216 23 221 454\n✉️ contact@rtimidental.tn\n📍 Immeuble Bouchlaka, El Hamma', fn: () => window.open('https://wa.me/21623221454', '_blank', 'noopener,noreferrer') }
    },
    en: {
        title: '🦷 Dr Rtimi Assistant', welcome: '👋 Hello! How can I help you?',
        options: [ { label: '📅 Book Appt', key: 'rdv' }, { label: '🦷 Services', key: 'services' }, { label: '🕒 Hours', key: 'hours' }, { label: '📞 Contact', key: 'contact' } ],
        rdv: {msg: 'I am redirecting you to our appointment form!',fn: () => { setChatbotState(false);  document.getElementById('rdv').scrollIntoView({ behavior: 'smooth' }); }},
        services: { msg: 'We offer: Implants, CAD/CAM, E-max Veneers, Orthodontics, Periodontics (PRF) and Emergencies.', fn: () => document.getElementById('services').scrollIntoView({ behavior: 'smooth' }) },
        hours: { msg: '🕒 Mon–Fri: 08:00–18:00\n🕒 Saturday: 08:00–13:00\n📅 Sunday: Closed', fn: null },
        contact: { msg: '📞 +216 23 221 454\n✉️ contact@rtimidental.tn\n📍 Bouchlaka Building, El Hamma', fn: () => window.open('https://wa.me/21623221454', '_blank', 'noopener,noreferrer') }
    },
    ar: {
        title: '🦷 مساعد د. رتيمي', welcome: '👋 مرحبًا، كيف يمكنني مساعدتك؟',
        options: [ { label: '📅 حجز موعد', key: 'rdv' }, { label: '🦷 خدماتنا', key: 'services' }, { label: '🕒 ساعات العمل', key: 'hours' }, { label: '📞 اتصل بنا', key: 'contact' } ],
        rdv: { msg: 'سأوجهك إلى نموذج حجز الموعد!', fn: () => {  setChatbotState(false);  document.getElementById('rdv').scrollIntoView({ behavior: 'smooth' }); }},
        services: { msg: 'خدماتنا : زراعة الأسنان، CAD/CAM، طب تجميلي، تقويم الأسنان، علاج اللثة، طوارئ.', fn: () => document.getElementById('services').scrollIntoView({ behavior: 'smooth' }) },
        hours: { msg: '🕒 الاثنين–الجمعة : 08:00–18:00\n🕒 السبت : 08:00–13:00\n📅 الأحد : مغلق', fn: null },
        contact: { msg: '📞 +216 23 221 454\n✉️ contact@rtimidental.tn\n📍 عمارة بوشلاكة الحامة', fn: () => window.open('https://wa.me/21623221454', '_blank', 'noopener,noreferrer') }
    }
};

const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotBox = document.getElementById('chatbot-box');
const chatMsgs = document.getElementById('chatbot-messages');
const chatOpts = document.getElementById('chatbot-options');

function addMsg(text, type) {
    const el = document.createElement('div');
    el.className = type;
    el.textContent = text;
    chatMsgs.appendChild(el);
    chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

// ==================== CHATBOT AVEC ACCESSIBILITÉ CLAVIER ====================
function renderChatOptions(flow) {
    chatOpts.innerHTML = '';
    flow.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'chatbot-opt';
        btn.textContent = opt.label;
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('role', 'button');
        
        const handleAction = () => {
            addMsg(opt.label, 'user-msg');
            const r = flow[opt.key];
            setTimeout(() => {
                addMsg(r.msg, 'bot-msg');
                if (r.fn) setTimeout(r.fn, 600);
                setTimeout(() => renderChatOptions(flow), 400);
            }, 350);
        };
        
        btn.addEventListener('click', handleAction);
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleAction();
            }
        });
        
        chatOpts.appendChild(btn);
    });
    
    if (chatOpts.firstChild) {
        setTimeout(() => chatOpts.firstChild.focus(), 100);
    }
}

function trapChatbotFocus(e) {
    if (!chatbotBox.classList.contains('open')) return;
    if (e.key !== 'Tab') return;
    
    const focusable = Array.from(chatOpts.querySelectorAll('.chatbot-opt'));
    if (focusable.length === 0) return;
    
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    
    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    }
}

document.addEventListener('keydown', trapChatbotFocus);

// Modification du toggle pour le focus
chatbotToggle.addEventListener('click', () => {
    const open = chatbotBox.classList.toggle('open');
    chatbotBox.setAttribute('aria-hidden', open ? 'false' : 'true');
    chatbotToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
        if (!chatMsgs.children.length) {
            initChat();
        } else {
            const firstBtn = chatOpts.querySelector('.chatbot-opt');
            if (firstBtn) firstBtn.focus();
        }
    }
});

function initChat() {
    const flow = chatFlows[currentLang] || chatFlows.fr;
    document.getElementById('chatbot-title').textContent = flow.title;
    chatMsgs.innerHTML = '';
    chatOpts.innerHTML = '';
    setTimeout(() => { addMsg(flow.welcome, 'bot-msg'); renderChatOptions(flow); }, 200);
}


document.getElementById('chatbot-close').addEventListener('click', () => {
    chatbotBox.classList.remove('open');
    chatbotBox.setAttribute('aria-hidden', 'true');
    chatbotToggle.setAttribute('aria-expanded', 'false');
});

['langFr', 'langEn', 'langAr'].forEach(id => {
    document.getElementById(id).addEventListener('click', () => {
        if (chatbotBox.classList.contains('open')) { chatMsgs.innerHTML = ''; initChat(); }
    });
});


