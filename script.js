function copyIP(ip, button) {
    // Kopyalanacak metni hazırla
    const connectCommand = "connect " + ip;
    
    // Geçici bir input alanı oluşturup kopyalama işlemini yap
    navigator.clipboard.writeText(connectCommand).then(() => {
        // Kullanıcıya geri bildirim ver
        const originalText = button.innerText;
        button.innerText = "Kopyalandı!";
        button.classList.add("copied");

        // 2 saniye sonra butonu eski haline getir
        setTimeout(() => {
            button.innerText = originalText;
            button.classList.remove("copied");
        }, 2000);
    }).catch(err => {
        console.error('Kopyalama başarısız!', err);
    });
}
