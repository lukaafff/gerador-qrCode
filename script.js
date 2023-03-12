const input = document.querySelector('input');
const qrcode = document.querySelector('#qrcode');
const gerarqrcodeBtn = document.querySelector('#gerarqrcode');
const gerarNovoqrcodeBtn = document.querySelector('#gerarNovoqrcode');

document.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        gerarQRCode();
    }
});

gerarqrcodeBtn.addEventListener("click", () => {
    gerarQRCode();
});

gerarNovoqrcodeBtn.addEventListener("click", () => {
    resetQRCode();
});

function gerarQRCode() {
    /* verifica se tem informação no input
    se tiver consome a api qrserver
    se nao tiver retorna para nao gerar imagem */
    if (!input.value) return;
        
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`;

    gerarqrcodeBtn.style.display = "none";
    gerarNovoqrcode.style.display = "block";
}

function resetQRCode() {
    input.value = "";
    qrcode.src = "";
    gerarqrcodeBtn.style.display = "block";
    gerarNovoqrcode.style.display = "none";
}