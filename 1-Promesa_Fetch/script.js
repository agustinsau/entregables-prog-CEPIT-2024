const contenedor = document.querySelector(".container");

fetch("https://dragonball-api.com/api/characters?page=1&limit=5")
.then(resp => resp.json())
.then(data =>{
    console.log(data);
    data.items.forEach(character => {
        
        let newCard = createCard(character);

        // Agrega la tarjeta al contenedor
        contenedor.appendChild(newCard);

        // contenedor.innerHTML += `<div class="card">
        //                             <div class="card-image">
        //                                 <img src="${character.image}" alt="${character.name}">
        //                             </div>
        //                             <div class="card-body">
        //                                 <h2>${character.name}</h2>
        //                                 <p>${character.race} - ${character.gender}</p>

        //                                 <div class="card-info">
        //                                     <div>
        //                                         <p>Base KI:</p>
        //                                         <span>${character.ki}</span>
        //                                     </div>
        //                                     <div>
        //                                         <p>Total KI:</p>
        //                                         <span>${character.maxKi}</span>
        //                                     </div>
        //                                     <div>
        //                                         <p>Affiliation:</p>
        //                                         <span>${character.affiliation}</span>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>`

        
    })
})
.catch(error => console.log(error))

function createCard(character){
    // Crear los elementos del card
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let cardImageDiv = document.createElement('div');
    cardImageDiv.setAttribute('class', 'card-image');

    let img = document.createElement('img');
    img.setAttribute('src', `${character.image}`);
    img.setAttribute('alt', `${character.name}`);

    // Crear imagen
    cardImageDiv.appendChild(img);

    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.setAttribute('class', 'card-body');

    let h2 = document.createElement('h2');
    h2.textContent = character.name;

    let pRaceGender = document.createElement('p');
    pRaceGender.textContent = `${character.race} - ${character.gender}`;

    // Información
    let cardInfoDiv = document.createElement('div');
    cardInfoDiv.setAttribute('class', 'card-info');

    // Base KI
    let baseKiDiv = createCardInfo('Base KI:', character.ki);

    // Total Ki
    let totalKiDiv = createCardInfo('Total Ki:', character.maxKi);
    
    // Affiliation
    let affiliationDiv = createCardInfo('Affiliation', character.affiliation);

    // Agregar los tres divs de info a cardInfoDiv
    cardInfoDiv.appendChild(baseKiDiv);
    cardInfoDiv.appendChild(totalKiDiv);
    cardInfoDiv.appendChild(affiliationDiv);

    // Agregar el h2, pRaceGender y cardInfoDiv al cardBodyDiv
    cardBodyDiv.appendChild(h2);
    cardBodyDiv.appendChild(pRaceGender);
    cardBodyDiv.appendChild(cardInfoDiv);

    // Agregar elementos a la tarjeta
    card.appendChild(cardImageDiv);
    card.appendChild(cardBodyDiv);

    return card;
}

function createCardInfo(text, charInfo){
    const div = document.createElement('div');
    const pe = document.createElement('p');
    
    pe.textContent = text;

    const span = document.createElement('span');
    span.textContent = charInfo;
    
    div.appendChild(pe);
    div.appendChild(span);

    return div;
}

