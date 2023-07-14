function arkaplan() {
    var light = document.getElementById('light');
    var griDiv = document.querySelector('.arkaplan');
    var griMetinler = griDiv.getElementsByClassName('font-weight-normal');
    var todoMetin = document.getElementById('todo');
    var slashMetinler = griDiv.querySelectorAll('#slash');
    var portfolyoMetin = document.querySelector('.portfolyo-metin');

    light.addEventListener('click', function () {
        // Arka plan rengini değiştirir
        document.body.style.backgroundColor = "#35115c";
        // Gri div rengini değiştirir
        griDiv.style.backgroundColor = "white";
        griDiv.style.filter = "opacity(0.8)";

        // Gri div içindeki metinlerin rengini değiştir
        for (var i = 0; i < griMetinler.length; i++) {
            griMetinler[i].style.color = "black";
        }
        
        // Todo: metninin rengini değiştir
        todoMetin.style.color = "#c179db";

        // Slash işaretlerinin rengini değiştir
        for (var i = 0; i < slashMetinler.length; i++) {
            slashMetinler[i].style.color = "#c179db";
        }

        // Portfolyo.js metnini ekranda göster
        portfolyoMetin.style.color = "#c179db";
        portfolyoMetin.textContent = "// Portfolyo.js";
    });
}
