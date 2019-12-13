//Ana Júlia Oliveira Lins - 20191370002

hot = document.querySelector('.row')
function exibepromo(json){
result = ''
for (hoteis of json){
    res = `<div class="col">
            <div id="offer-${hoteis.id}" class="card card-block offer">
              <div class="offer-thumb" style="background-image: url(${hoteis.image.url})"></div>
              <div class="offer-content p-4">
                <div class="offer-title">${hoteis.title}</div>
                <div class="offer-price"><span>R$</span> ${Number(hoteis.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                <div class="offer-market-price"><span>R$</span> ${Number(hoteis.market_price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
              </div>
            </div>
          </div>`
result += res
}
hot.innerHTML = result
}

function gethot(url){
  fetch(url)
    .then(res => res.json())
    .then(json => exibepromo(json))
}

gethot('https://playground.barato.com.br/desafio-front/api/offers')
