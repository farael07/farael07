let palavra;



function setup() {
  createCanvas(400, 400);
  
 palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["sarinha te amo", "gerim bucha", "roberto podi",   "nicolau noob", "pezinho"];
  return palavra = random(palavras);
  
  
}

function startColors () {
  background("brown");
  fill("violet");
  textSize(50);
  textAlign(CENTER, CENTER);
  
}
  
  function palavraParcial() {
    
    let maximo = width;
    let minimo = 0;
    
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
    return parcial;
  }

function draw() {
 startColors();
 
 
  
  let parcial = palavraParcial();
  text(parcial, 200, 200);
 
}