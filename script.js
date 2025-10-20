// Seleção do interruptor (checkbox) do tema
const themeSwitch = document.querySelector('#checkbox')

// Mudar o tema
function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-mode')
    } else {
        document.body.classList.remove('dark-mode')
    }
}

// Chamar a função switchTheme quando o interruptor é acionado
themeSwitch.addEventListener('change', switchTheme, false);

// Alteração do idioma
const translation = {
    // Português
    "pt-br": {
        "subtitle": "Ferramentas gratuitas e de código aberto para uso cotidiano",
        "qual_1": " Acadêmico do curso de Segurança Cibernética, com foco em segurança da informação e análise de vulnerabilidades em software e sistemas web.",
        "qual_2": " Apaixonado por compreender o funcionamento real de computadores e seus componentes, principalmente no que concerne à parte de segurança, com foco em programação voltada à cibersegurança e áreas como inteligência artificial e blockchain.",
        "qual_3": "Busco oportunidade para desempenhar funções estratégicas, desde o planejamento até a execução, permitindo uma visão ampliada do processo, em constante aprendizado e aprimoramento.",
        "qual_4": " Experiência razoável em diversas áreas, incluindo redes de computadores, ferramentas de diagnóstico de rede, suporte técnico ao usuário de internet, programação em C, Java, Python, Assembly e VBA (Visual Basic for Applications), e desenvolvimento web (HTML5, CSS, JavaScript).",
        "qual_5": " Fluente em Inglês, tendo sido professor terceirizado durante 18 meses.",
        "tool_1_title": "Ferramenta 1", 
        "tool_1_desc": "Previsão de lançamento: 30 de novembro de 2025.",
        "tool_2_title": "Ferramenta 2",
        "tool_2_desc": "Previsão de lançamento: 31 de dezembro de 2025.",
        "tool_3_title": "Ferramenta 3",
        "tool_3_desc": "Previsão de lançamento: 31 de janeiro de 2026",
        "tool_4_title": "Ferramenta 4",
        "tool_4_desc": "Previsão de lançamento: 28 de fevereiro de 2026",
        "tool_5_title": "Ferramenta 5",
        "tool_5_desc": "Previsão de lançamento: 31 de março de 2026",
        "tool_6_title": "Ferramenta 6",
        "tool_6_desc": "Previsão de lançamento: 30 de abril de 2026",
        "tool_7_title": "Ferramenta 7",
        "tool_7_desc": "Previsão de lançamento: 31 de maio de 2026",
        "tool_8_title": "Ferramenta 8",
        "tool_8_desc": "Previsão de lançamento: 30 de junho de 2026",
        "tool_9_title": "Ferramenta 9",
        "tool_9_desc": "Previsão de lançamento: 31 de julho de 2026",
        "tool_10_title": "Ferramenta 10",
        "tool_10_desc": "Previsão de lançamento: 31 de agosto de 2026",
    },  
    // Inglês
    "en": {
        "subtitle": "Free & Open Source tools for daily use",
        "qual_1": " Cybersecurity student, focusing on information security and vulnerability analysis in software and web systems.",
        "qual_2": " Passionate about understanding the real workings of computers and their components, especially regarding security, with a focus on cybersecurity-oriented programming and areas like artificial intelligence and blockchain.",
        "qual_3": " Seeking opportunities to perform strategic roles, from planning to execution, allowing for a broader view of the process, in constant learning and improvement.",
        "qual_4": " Reasonable experience in various areas, including computer networks, network diagnostic tools, internet user technical support, programming in C, Java, Python, Assembly, and VBA (Visual Basic for Applications), and web development (HTML5, CSS, JavaScript).",
        "qual_5": " Fluent in English, having been a third-party teacher for 18 months.",
        "tool_1_title": "Tool 1", 
        "tool_1_desc": "Estimated release date: November 30, 2025.",
        "tool_2_title": "Tool 2",
        "tool_2_desc": "Estimated release date: December 30, 2025.",
        "tool_3_title": "Tool 3",
        "tool_3_desc": "Estimated release date: January 31, 2026.",
        "tool_4_title": "Tool 4",
        "tool_4_desc": "Estimated release date: February 28, 2026.",
        "tool_5_title": "Tool 5",
        "tool_5_desc": "Estimated release date: March 31, 2026.",
        "tool_6_title": "Tool 6",
        "tool_6_desc": "Estimated release date: April 30, 2026.",
        "tool_7_title": "Tool 7",
        "tool_7_desc": "Estimated release date: May 31, 2026.",
        "tool_8_title": "Tool 8",
        "tool_8_desc": "Estimated release date: June 30, 2026.",
        "tool_9_title": "Tool 9",
        "tool_9_desc": "Estimated release date: July 31, 2026.",
        "tool_10_title": "Tool 10",
        "tool_10_desc": "Estimated release date: August 31, 2026.",
    }
};

// Tradução da página
const translatePage = (language) => {
    document.querySelectorAll('[data-lang-key').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[language] && translations[language][key]) {
            element.innerText = translations[language][key];
        }
    });
    document.documentElement.lang = language;
};

// Botões
const langButtons = document.querySelectorall('.lang-btn');

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        langButtons.forEach(btn => btn.classList.remove('active'));
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');

        // Obtém a informação do idioma através do botão e traduz a página
        const selectedLang = button.getAttribute('data-lang');
        translatePage(selectedLang); 
    });
});