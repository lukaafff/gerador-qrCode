const input = document.querySelector('input');
const qrcode = document.querySelector('#qrcode');

document.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        gerarQRCode();
    }
});


function gerarQRCode() {
    /* verifica se tem informação no input
    se tiver consome a api qrserver
    se nao tiver retorna para nao gerar imagem */
    if (!input.value) return;
        
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`;
}

