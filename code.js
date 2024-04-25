

let alanlar,secilenBolgeAdi,secilenBolgeNo;

//imagemap içindeki alanların herbirini for döngüsüyle dolaşarak olay yakalama
alanlar=document.getElementsByTagName("area");
[...alanlar].forEach((alan,index) => {
  alan.addEventListener("click",()=>{
    secilenBolge=alan.getAttribute("title");
    secilenBolgeNo=index;
    bolgeyiGoster(secilenBolgeAdi,secilenBolgeNo);
  });
});

async function bolgeyiGoster(secilenBolgeAdi,secilenBolgeNo) {
    const sunucudanGelen = await fetch("http://localhost:3000/bölgeler");
    const bolgeler = await sunucudanGelen.json();
    console.log(bolgeler[secilenBolgeNo]);

    alert("Seçili bölge: "+secilenBolgeAdi);
  }
  