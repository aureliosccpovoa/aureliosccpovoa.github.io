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