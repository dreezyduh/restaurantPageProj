import '../images/piroata.png';
function homePage() {
    const homeContainer = document.createElement('div');
    const restaurantName = document.createElement('div');
    const restaurantDescription = document.createElement('div');
    const restaurantDescription2 = document.createElement('div');
    const piroata = document.createElement('img');
    const piroata2 = document.createElement('img');
    
    content.textContent = '';
    restaurantName.textContent = 'Pizza Pigaura';
    restaurantDescription.textContent = 'Cea mai buna si inovativa pizza cu gaura. Pizza Pigaura a fost descoperita in 2020 dupa ce Piccolo Pigaura a bagat la cuptor o pizza fara sa o aseze in tava, ceea ce a dus la centrul pizzei curgand in restul cuptorului rezultand intr-un dezastru culinar. Sau cel putin asta ar fi crezut oamenii de rand, pe cand Pigaura, a vazut partea plina a paharului, in cazul asta al pizzei si s-a gandit sa creeze un nou mod de a manca pizza. Cu timpul acesta a perfectionat tehnica de a gati cea mai buna pizza cu gaura din lume alaturi de fratele sau Mario, folosind locul liber din mijloc ca suport pentru sosuri';
    restaurantDescription2.textContent = 'Pentru mai multe detalii va rugam sa consultati sectiunea Despre (about) pentru a afla detalii precum numar de telefon, locatia si intervalul orar in care este deschis. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bla blaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bla blaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bla blaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bla blaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

    piroata.src = './images/piroata.png';
    piroata2.src = './images/piroata.png';

    homeContainer.setAttribute('class', 'homeContainer');
    piroata.setAttribute('class', 'piroata');
    piroata2.setAttribute('class', 'piroata');
    restaurantName.setAttribute('class', 'title');
    restaurantDescription.setAttribute('class', 'text');
    restaurantDescription2.setAttribute('class', 'text2');
    
    content.appendChild(homeContainer);
    homeContainer.appendChild(restaurantName);
    homeContainer.appendChild(piroata);
    homeContainer.appendChild(piroata2);
    content.appendChild(restaurantDescription);
    content.appendChild(restaurantDescription2);
}

export {homePage};