document.getElementById("btnGetir").addEventListener("click",bolgeleriGetir);

async function bolgeleriGetir() {
    const sunucudanGelen = await fetch("http://localhost:3000/bölgeler");
    const bolgeler = await sunucudanGelen.json();
    console.log(bolgeler);
  }
  