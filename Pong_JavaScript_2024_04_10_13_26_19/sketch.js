class Raquete {
    constructor(posicaoX,posicaoY,keyToUp,keyToDown){
    
    this.altura = 90;
    this.comprimento = 10;
    this.placar = 0;
    this.velocidadeY = 0;
    this.keyToUp = keyToUp;
    this.keyToDown = keyToDown;
    this.posicaoX = posicaoX;
    this.posicaoY = posicaoY;
  }
}

let bolinha = {
  posicaoX : 300,
  posicaoY: 200,
  velocidadeX: 10,
  velocidadeY:10,
  diametro : 30,
  get raio() {
    return this.diametro / 2;
  }
  }

let minhaRaquete = new Raquete(5,150,87,83)
let oponenteRaquete = new Raquete(585,150,38,40)


function setup() {
  createCanvas(600, 400);  
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentarBolinha();
  colidirBolinhaNasBordas();
  mostrarRaquete(minhaRaquete);
  mostrarRaquete(oponenteRaquete);
  movimentarRaquete(minhaRaquete);
  movimentarRaquete(oponenteRaquete);
  //movimentarRaqueteAleatoriamente(oponenteRaquete);
  colidirBolinhaRaquete(minhaRaquete);
  colidirBolinhaRaquete(oponenteRaquete)
  incluirPlacar();
  marcarPonto();
  bolinhaNaoFicaPresa();
       }

function mostrarBolinha(){
  circle(bolinha.posicaoX,bolinha.posicaoY,bolinha.diametro)
}

function movimentarBolinha(){
  bolinha.posicaoX += bolinha.velocidadeX;
  bolinha.posicaoY += bolinha.velocidadeY;
}

function colidirBolinhaNasBordas(){
  if(bolinha.posicaoX + bolinha.raio > width || bolinha.posicaoX - bolinha.raio < 0 ){
    bolinha.velocidadeX *= -1;
  }
  if(bolinha.posicaoY + bolinha.raio > height || bolinha.posicaoY - bolinha.raio < 0 ){
    bolinha.velocidadeY *= -1;
  }
}

function colidirBolinhaRaquete(raquete) {
  let bolinhaEstaDireitaDaRaquete = bolinha.posicaoX - bolinha.raio < raquete.posicaoX + raquete.comprimento;
  let bolinhaEstaEsquerdaDaRaquete = bolinha.posicaoX + bolinha.raio > raquete.posicaoX;
  let bolinhaEstaAbaixoDaRaquete = bolinha.posicaoY + bolinha.raio > raquete.posicaoY 
  let bolinhaEstaAcimaDaRaquete = bolinha.posicaoY - bolinha.raio < raquete.posicaoY + raquete.altura;

  let bolinhaColidiuNaEsquerda =  (
          bolinha.velocidadeX > 0 
       && bolinhaEstaDireitaDaRaquete 
       && bolinhaEstaEsquerdaDaRaquete 
       && bolinhaEstaAbaixoDaRaquete
       && bolinhaEstaAcimaDaRaquete
  )
   let bolinhaColidiuNaDireita =  (
          bolinha.velocidadeX < 0 
       && bolinhaEstaDireitaDaRaquete 
       && bolinhaEstaEsquerdaDaRaquete 
       && bolinhaEstaAbaixoDaRaquete
       && bolinhaEstaAcimaDaRaquete
  )
    
  if (bolinhaColidiuNaEsquerda || bolinhaColidiuNaDireita) {
    bolinha.velocidadeX *= -1;
  }
}

function mostrarRaquete(raquete){
  rect(raquete.posicaoX, 
       raquete.posicaoY, 
       raquete.comprimento, 
       raquete.altura)
}

function movimentarRaquete(raquete){
  if(keyIsDown(raquete.keyToUp)){
    raquete.posicaoY -= 10;
  }
  if(keyIsDown(raquete.keyToDown)){
    raquete.posicaoY += 10;
  }
}
function movimentarRaqueteAleatoriamente(raquete){
  raquete.velocidadeY = bolinha.posicaoY - raquete.posicaoY - (raquete.comprimento / 2) - 30;  
  raquete.posicaoY += raquete.velocidadeY
}

function incluirPlacar(){

  textSize(20)
  textAlign(CENTER)
  
  fill(color(255,140,0))
  rect(150,10,40,20)
  
  fill(255)
  text(minhaRaquete.placar,170,26)
  
  fill(color(255,140,0))
  rect(450,10,40,20)
  
  fill(255)
  text(oponenteRaquete.placar,470,26)
  
}

function marcarPonto(){
  if(bolinha.posicaoX > 585){
    minhaRaquete.placar++;
  }
  if(bolinha.posicaoX < 15){
    oponenteRaquete.placar++;
  }
}

function bolinhaNaoFicaPresa(){
    if (bolinha.posicaoX - bolinha.raio < 0){
    bolinha.posicaoX = 23
    }
  if (bolinha.posicaoX + bolinha.raio > 600){
    bolinha.posicaoX = 577
    }
}