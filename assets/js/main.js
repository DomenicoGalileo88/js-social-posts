/* 
Descrizione

Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post,
 numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

BONUS
Formattare le date in formato italiano (gg/mm/aaaa)
Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

Consigli del giorno:
Ragioniamo come sempre a step.
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice. console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
*/

/* 
Milestone 1

Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post,
 numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
*/

let posts = [];

// creare una funzione che restituisce un numero casuale
function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// creare un ciclo for che crea un oggetto con i tuoi valori e lo pusha ogni volta nell array

for (let i = 0; i < 3; i++) {
  // creo numero per id
  let id_number = genRandomNumber(1, 100);

  //creare un array di nomi da associare a nome autore
  let nomi_autori = [
    "Marco",
    "Luca",
    "Matteo",
    "Giovanni",
    "Luisa",
    "Maria",
    "Federica",
    "Gabriella",
    "Francesco",
    "Mattia",
    "Noemi",
  ];
  let posizione_nome_autore = Math.floor(Math.random() * nomi_autori.length);
  let nome_autore = nomi_autori[posizione_nome_autore]; // nome random che arriva dall'array di nomi
  //console.log(nome_autore);

  //creare data casuale
  let giorno = genRandomNumber(1, 31);
  let mese = genRandomNumber(1, 12);
  let anno = genRandomNumber(2020, 2022);
  let data_post = `${giorno}/${mese}/${anno}`;



  // creare un oggetto posts
  let post = {
    id: i + 1,
    nomeAutore: nome_autore,
    fotoAutore: "https://unsplash.it/300/300?image=",
    data: data_post,
    testo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nostrum dolorem. Qui amet doloremque ipsam provident veniam fugit corporis.",
    immagine: "https://picsum.photos/300/300",
    like: genRandomNumber(1, 1000),
  };

  posts.push(post);
  /* console.log(posts); */
}

//console.log(posts);

//creare un ciclo forEach per ottenere informazioni dell'oggetto
let post = posts.forEach((post) => {
  // creare una card (post) dove appendi tutti gli elementi random
  const container_card = document.querySelector(".container");
  let card_markup = `
  <div class="card my-2" style="width: 30rem;">

            <div class="card-body">
                <div class="card_top d-flex">
                    <img src="${post.fotoAutore}" alt="" class="img-fluid rounded-circle" width="40">
                    <div class="card_top_text">
                        <div class="nome fw-bold">${post.nomeAutore}</div>
                        <div class="data">${post.data}</div>
                    </div>
                </div>

                <p class="card-text">
                    ${post.testo}
                </p>
            </div>
            <img src="${post.immagine}" class="card-img-top p-4" alt="...">

            <div class="button_card d-flex justify-content-around mb-3">
                <button class="like">
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Mi piace</span>
                </button>
                <a href="#" class="like_count">
                    <span>
                        Piace a 
                        <strong class="id_like">${post.like} </strong>
                        Persone
                    </span>
                </a>
            </div>
        </div>
  `;
  /* Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed. */
  container_card.insertAdjacentHTML("beforeend", card_markup);

});
/* 
Milestone 3

Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/
 //creo un eventListener che ascolta il click

  let id_post = [];

let like = document.querySelectorAll(".like");
//console.log(like);

like.forEach((element, index) =>{
    //console.log(element);
    //console.log(index);
    element.addEventListener('click', click);
    
    function click() {
        element.classList.add('red');
        let cards = document.querySelectorAll('.card');
        //console.log(cards[index]);
        let single_card = cards[index];
        let likeCount = single_card.querySelector('.like_count');
        //console.log(likeCount);
        let id_card_click = posts[index].id;
        //console.log(id_card_click);
        id_post.push(id_card_click)
        //console.log(id_post);
        let like_count_click = posts[index].like;
        //console.log(like_count_click + 1);
        likeCount.innerHTML = `
        <span>
            Piace a 
            <strong class="id_like">${like_count_click + 1} </strong>
            Persone
        </span>`;
    }
});

