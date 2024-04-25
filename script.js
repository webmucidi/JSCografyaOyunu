let areas,secilenBolgeAdi,secilenBolgeNo;

//Imagemap üzerindeki tıklanabilir her alan için olay yakalayıcı yazdık.
document.addEventListener('DOMContentLoaded', function() {
    const areas = document.querySelectorAll('map[name="harita"] area');
    areas.forEach((area,index) => {
      area.addEventListener('click', function() {
        secilenBolgeAdi = area.getAttribute('title');
        secilenBolgeNo=index;
        bolgeyiGoster(secilenBolgeAdi,secilenBolgeNo);
      });
    });
  });

async function bolgeyiGoster(secilenBolgeAdi,secilenBolgeNo) {
    const sunucudanGelen = await fetch("http://localhost:3000/bölgeler");
    const bolgeler = await sunucudanGelen.json();
    console.log(bolgeler[secilenBolgeNo]);
    alert("Seçilen Bölge: "+secilenBolgeAdi);
  }