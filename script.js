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
    
    //console.log(bolgeler[secilenBolgeNo]);
    //alert("Seçilen Bölge: "+secilenBolgeAdi);
    

// Seçili bölgeye ait tüm bilgileri değişken içine alalım
const secilenBolge = bolgeler[secilenBolgeNo];

// Sorular için dizi tanımla
const sorular = [
    {
        soru: secilenBolgeAdi+" Bölgesinin en önemli gelir kaynağı nedir? "  ,
        cevap: secilenBolge.en_önemli_gelir_kaynağı
    },
    {
        soru: secilenBolgeAdi+" Bölgesinin en kalabalık şehri hangisidir? ",
        cevap: secilenBolge.en_kalabalık_şehri
    }
];

// Sorular dizisi içinden rastgele bir soru seç
const rastgeleSoruNo = Math.floor(Math.random() * sorular.length);
const { soru, cevap } = sorular[rastgeleSoruNo];

// Soruyu göster ve cevabı kontrol et
const kullaniciCevabi = prompt(soru);
if (kullaniciCevabi && kullaniciCevabi.toLowerCase() === cevap.toLowerCase()) {
    alert("Doğru Cevap.Tebrikler!");
} else {
    alert("Yanlış Cevap! Doğrusu: " + cevap);
}
}