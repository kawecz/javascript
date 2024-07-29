function carregar () {
    var msg = window.document.getElementById('msg')
    
    var img = window.document.getElementById('imagem')
    
    var data = new Date()
    var minute = data.getMinutes()
    var sec = data.getSeconds()
    
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas ${minute} Minutos e ${sec} Segundos.`
    
    if (hora >= 0 && hora < 12){
       img.src = 'manha.jpg'
       document.body.style.background = '#9CA5B6'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#372336'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#141924'
    }
}