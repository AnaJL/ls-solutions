const pokedexa = document.querySelector('.pokedex')
let result = ''
for( const pokemon of poke){
    res= `<div class="pokemon" data-name="${pokemon.name}" data-type="${pokemon.type[0]},${pokemon.type[1]}" tabindex="${pokemon.id}">
     <figure class="pokemon-figure">
       <img src="img/${pokemon.name[0].toLowerCase() + pokemon.name.substring(1)}.png" alt="${pokemon.name}">
     </figure>
     <section class="pokemon-description">
       <span class="pokemon-id">#00${pokemon.id}</span>
       <h1 class="pokemon-name">${pokemon.name}</h1>
       <div class="pokemon-types">
         <span class="pokemon-type background-${pokemon.type[0]}">${pokemon.type[0]}</span>
         <span class="pokemon-type background-${pokemon.type[1]}">${pokemon.type[1]}</span>
       </div>
     </section>
     <section class="pokemon-stats">
     <div class="stat-row">
       <div>hp</div>
       <div class="stat-bar">
         <div class="stat-bar-bg" style="width: ${pokemon.stats.hp * 100 /250}%">${pokemon.stats.hp}</div>
       </div>
     </div>
     <div class="stat-row">
       <div>attack</div>
       <div class="stat-bar">
         <div class="stat-bar-bg" style="width: ${pokemon.stats.attack * 100 /250}%">${pokemon.stats.attack}</div>
       </div>
     </div>
     <div class="stat-row">
       <div>defense</div>
       <div class="stat-bar">
         <div class="stat-bar-bg" style="width: ${pokemon.stats.defense * 100 /250}%">${pokemon.stats.defense}</div>
       </div>
     </div>
     <div class="stat-row">
       <div>sp-atk</div>
       <div class="stat-bar">
         <div class="stat-bar-bg" style="width: ${pokemon.stats.spatk * 100 /250}%">${pokemon.stats.spatk}</div>
       </div>
     </div>
     <div class="stat-row">
       <div>sp-def</div>
       <div class="stat-bar">
         <div class="stat-bar-bg" style="width: ${pokemon.stats.spdef * 100 /250}%">${pokemon.stats.spdef}</div>
       </div>
     </div>
     <div class="stat-row">
       <div>speed</div>
       <div class="stat-bar">
         <div class="stat-bar-bg" style="width: ${pokemon.stats.speed * 100 /250}%">${pokemon.stats.speed}</div>
       </div>
     </div>
   </section>
   </div>
    `
result += res 
}
pokedexa.innerHTML = result
text = document.querySelector('input[id = "filter-name"]')
text.addEventListener('keyup', keyup, false)  //key == shift
function keyup(key){
    if (key.keyCode == "16"){                 //key == shift
      if (text.value == ''){
        rest = result
      }
      else {
    rest = ''
    for( pokemon of poke){
        if (text.value == pokemon.name){
            rest =  `<div class="pokemon" data-name="${pokemon.name}" data-type="${pokemon.type[0]},${pokemon.type[1]}" tabindex="${pokemon.id}">
            <figure class="pokemon-figure">
              <img src="img/${pokemon.name[0].toLowerCase() + pokemon.name.substring(1)}.png" alt="${pokemon.name}">
            </figure>
            <section class="pokemon-description">
              <span class="pokemon-id">#00${pokemon.id}</span>
              <h1 class="pokemon-name">${pokemon.name}</h1>
              <div class="pokemon-types">
                <span class="pokemon-type background-${pokemon.type[0]}">${pokemon.type[0]}</span>
                <span class="pokemon-type background-${pokemon.type[1]}">${pokemon.type[1]}</span>
              </div>
            </section>
            <section class="pokemon-stats">
            <div class="stat-row">
              <div>hp</div>
              <div class="stat-bar">
                <div class="stat-bar-bg" style="width: ${pokemon.stats.hp * 100 /250}%">${pokemon.stats.hp}</div>
              </div>
            </div>
            <div class="stat-row">
              <div>attack</div>
              <div class="stat-bar">
                <div class="stat-bar-bg" style="width: ${pokemon.stats.attack * 100 /250}%">${pokemon.stats.attack}</div>
              </div>
            </div>
            <div class="stat-row">
              <div>defense</div>
              <div class="stat-bar">
                <div class="stat-bar-bg" style="width: ${pokemon.stats.defense * 100 /250}%">${pokemon.stats.defense}</div>
              </div>
            </div>
            <div class="stat-row">
              <div>sp-atk</div>
              <div class="stat-bar">
                <div class="stat-bar-bg" style="width: ${pokemon.stats.spatk * 100 /250}%">${pokemon.stats.spatk}</div>
              </div>
            </div>
            <div class="stat-row">
              <div>sp-def</div>
              <div class="stat-bar">
                <div class="stat-bar-bg" style="width: ${pokemon.stats.spdef * 100 /250}%">${pokemon.stats.spdef}</div>
              </div>
            </div>
            <div class="stat-row">
              <div>speed</div>
              <div class="stat-bar">
                <div class="stat-bar-bg" style="width: ${pokemon.stats.speed * 100 /250}%">${pokemon.stats.speed}</div>
              </div>
            </div>
          </section>
          </div>
           `
    } 
    }
    }
         pokedexa.innerHTML = rest
    }
    }


restype = '<option value="All">All</option>'
optiontype = []
tipo = document.querySelector('select[id = "filter-type"]')
tipo.addEventListener('click', function() {
  for (pokemon of poke){
    for (type of pokemon.type){
      if (!(optiontype.includes(type))){
      optiontype.push(type)
      restype += `<option id="aq" value="${type}">${type}</option>`
    }
  }
}
tipo.innerHTML = restype
})



tipo.addEventListener('change', function() {
  resultl = ''
  if (tipo.value == "All"){
    pokedexa.innerHTML = result
  }
  else{
  for( pokemon of poke){
    for(i in pokemon.type){
      if (pokemon.type[i] == tipo.value){
        res= `<div class="pokemon" data-name="${pokemon.name}" data-type="${pokemon.type[0]},${pokemon.type[1]}" tabindex="${pokemon.id}">
     <figure class="pokemon-figure">
       <img src="img/${pokemon.name[0].toLowerCase() + pokemon.name.substring(1)}.png" alt="${pokemon.name}">
     </figure>
     <section class="pokemon-description">
       <span class="pokemon-id">#00${pokemon.id}</span>
       <h1 class="pokemon-name">${pokemon.name}</h1>
       <div class="pokemon-types">
         <span class="pokemon-type background-${pokemon.type[0]}">${pokemon.type[0]}</span>
         <span class="pokemon-type background-${pokemon.type[1]}">${pokemon.type[1]}</span>
       </div>
     </section>
     <section class="pokemon-stats">
     <div class="stat-row">
       <div>hp</div>
       <div class="stat-bar">
         <div class="stat-bar-bg" style="width: ${pokemon.stats.hp * 100 /250}%">${pokemon.stats.hp}</div>
       </div>
     </div>
     <div class="stat-row">
       <div>attack</div>
       <div class="stat-bar">
         <div class="stat-bar-bg" style="width: ${pokemon.stats.attack * 100 /250}%">${pokemon.stats.attack}</div>
       </div>
     </div>
     <div class="stat-row">
       <div>defense</div>
       <div class="stat-bar">
         <div class="stat-bar-bg" style="width: ${pokemon.stats.defense * 100 /250}%">${pokemon.stats.defense}</div>
       </div>
     </div>
     <div class="stat-row">
       <div>sp-atk</div>
       <div class="stat-bar">
         <div class="stat-bar-bg" style="width: ${pokemon.stats.spatk * 100 /250}%">${pokemon.stats.spatk}</div>
       </div>
     </div>
     <div class="stat-row">
       <div>sp-def</div>
       <div class="stat-bar">
         <div class="stat-bar-bg" style="width: ${pokemon.stats.spdef * 100 /250}%">${pokemon.stats.spdef}</div>
       </div>
     </div>
     <div class="stat-row">
       <div>speed</div>
       <div class="stat-bar">
         <div class="stat-bar-bg" style="width: ${pokemon.stats.speed * 100 /250}%">${pokemon.stats.speed}</div>
       </div>
     </div>
   </section>
   </div>
    `
    resultl += res

      }
    }
  }
  pokedexa.innerHTML = resultl
}
})

