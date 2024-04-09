function menu() {
    const pizzaContent = document.createElement('div');
    const makeYourPizzaContainer = document.createElement('div');
    const makeYourPizzaTitle = document.createElement('h1');
    const makeYourPizzaForm = document.createElement('form');
    const makeYourPizzaImgContainer = document.createElement('div');
    const makeYourPizzaImg = document.createElement('img');
    const toppingOverlay = document.createElement('div');


    const pizzaList = {
        pizzaQuatro: {
            name: 'Pizza Quattro Stagioni',
            ingredients: 'Pizza de baza + pepperoni, ciuperci, masline, ardei',
            image: './images/pizza/quattrostagioni.png'
        },

        pizzaQuatro2: {
            name: 'Pizza Quattro Stagioni Amestecat',
            ingredients: 'Pizza de baza + pepperoni, ciuperci, masline, ardei',
            image: './images/pizza/quattrostagionimix.png'
        },

        pizzaMargherita: {
            name: 'Pizza Margherita',
            ingredients: 'Pizza de baza + mozzarella, busuioc',
            image: './images/pizza/margherita.png'
        },

        pizzaDiavola: {
            name: 'Pizza Diavola',
            ingredients: 'Pizza de baza + salam picant',
            image: './images/pizza/diavola.png'
        },
        
        pizzaConTonno: {
            name: 'Pizza Con Tonno',
            ingredients: 'Pizza de baza + ton, porumb, ciuperci, masline',
            image: '../images/pizza/tonno.png'
        },

        pizzaCarnivora: {
            name: 'Pizza Carnivora',
            ingredients: 'Pizza de baza + sunca, pepperoni, pulled pork, pui',
            image: '../images/pizza/carnivora.png'
        },

        pizzaCapriciosa: {
            name: 'Pizza Capriciosa',
            ingredients: 'Pizza de baza + ciuperci, sunca, ardei, masline',
            image: '../images/pizza/capriciosa.png'
        },

        pizzaProsciutto: {
            name: 'Pizza Prosciutto E Funghi',
            ingredients: 'Pizza de baza + ciuperci, sunca',
            image: '../images/pizza/prosciutto.png'
        },

        pizzaAllcheese: {
            name: 'Pizza All Cheese',
            ingredients: 'Pizza de baza + gorgonzola, mozzarella, cedar, camembert, crema de branza',
            image: '../images/pizza/allcheese.png'
        },

        pizzaCountry: {
            name: 'Pizza Country',
            ingredients: 'Pizza de baza + bucati bacon, porumb, ceapa, ciuperci',
            image: '../images/pizza/country.png'
        },

        pizzaAloha: {
            name: 'Pizza Aloha',
            ingredients: 'Pizza de baza + sunca, ananas, porumb, ceapa',
            image: '../images/pizza/aloha.png'
        },

        pizzaMexico: {
            name: 'Pizza Mexico',
            ingredients: 'Pizza de baza + sos chilly, pepperoni, porumb, ceapa, jalapenos, nachos',
            image: '../images/pizza/mexico.png'
        },

        pizzaBBQ: {
            name: 'Pizza BBQ',
            ingredients: 'Pizza de baza + sos BBQ, ceapa, porumb, bucati bacon, ciuperci, pui',
            image: '../images/pizza/bbq.png'
        },

        pizzaProvence: {
            name: 'Pizza Provence',
            ingredients: 'Pizza de baza + blue cheese, rosii uscate, pui, ceapa, ardei',
            image: '../images/pizza/provence.png'
        },

        pizzaArgentina: {
            name: 'Pizza Argentina',
            ingredients: 'Pizza de baza + carne tocata, ardei, branza cedar, ceapa',
            image: '../images/pizza/argentina.png'
        }
    }
    
    const toppingsList = {

        pizzaSauce:  {
            name: 'sos de pizza',
            id: 'pizzaSauce',
            image: '../images/toppings/pizzasauce.png'
        },

        bbqSauce: {
            name: 'sos BBQ',
            id: 'bbqSauce',
            image: '../images/toppings/bbq.png'
        },

        bbqMixSauce: {
            name: 'sos BBQ cu sos Pizza',
            id: 'bbqMixSauce',
            image: '../images/toppings/bbqsauce.png'
        },

        sweetChilly:  {
            name: 'sos sweet chilly',
            id: 'sweetChilly',
            image: '../images/toppings/sweetchilly.png'
        },

        spicyGum:  {
            name: 'sos balon',
            id: 'spicyGum',
            image: '../images/toppings/spicygum.png'
        },

        ananas: {
            name: 'Ananas',
            id: 'ananas',
            image: '../images/toppings/ananas.png'
        },

        bacon: {
            name: 'Bacon',
            id: 'bacon',
            image: '../images/toppings/bacon.png'
        },

        banana: {
            name: 'Banana',
            id: 'banana',
            image: '../images/toppings/banana.png'
        },

        camembert: {
            name: 'Branza Camembert',
            id: 'camembert',
            image: '../images/toppings/camembert.png'
        },

        cheddar: {
            name: 'Branza Cedar',
            id: 'cheddar',
            image: '../images/toppings/cheddar.png'
        },

        chicken: {
            name: 'Pui',
            id: 'chicken',
            image: '../images/toppings/chicken.png'
        },

        chiliflakes: {
            name: 'Fulgi de Chili',
            id: 'chiliflakes',
            image: '../images/toppings/chiliflakes.png'
        },

        corn: {
            name: 'Porumb',
            id: 'corn',
            image: '../images/toppings/corn.png'
        },

        creamCheese: {
            name: 'Crema de Branza',
            id: 'creamCheese',
            image: '../images/toppings/creamCheese.png'
        },

        gradeCheese: {
            name: 'Branza cu Mucegai',
            id: 'gradeCheese',
            image: '../images/toppings/gradeCheese.png'
        },

        ham: {
            name: 'Sunca',
            id: 'ham',
            image: '../images/toppings/ham.png'
        },

        jalapeno: {
            name: 'Jalapeno',
            id: 'jalapeno',
            image: '../images/toppings/jalapeno.png'
        },

        mincedmeat: {
            name: 'Carne tocata',
            id: 'mincedmeat',
            image: '../images/toppings/mincedmeat.png'
        },

        mozzarella: {
            name: 'Mozzarella',
            id: 'mozzarella',
            image: '../images/toppings/mozzarella.png'
        },

        mushroom: {
            name: 'Ciuperci',
            id: 'mushroom',
            image: '../images/toppings/mushroom.png'
        },

        nachos: {
            name: 'Nachos',
            id: 'nachos',
            image: '../images/toppings/nachos.png'
        },

        olives: {
            name: 'Masline',
            id: 'olives',
            image: '../images/toppings/olives.png'
        },

        onion: {
            name: 'Ceapa',
            id: 'onion',
            image: '../images/toppings/onion.png'
        },

        oregano: {
            name: 'Oregano',
            id: 'oregano',
            image: '../images/toppings/oregano.png'
        },

        paprika: {
            name: 'Ardei gras',
            id: 'paprika',
            image: '../images/toppings/paprika.png'
        },

        pepper: {
            name: 'Piper',
            id: 'pepper',
            image: '../images/toppings/pepper.png'
        },

        pepperoni: {
            name: 'Pepperoni',
            id: 'pepperoni',
            image: '../images/toppings/pepperoni.png'
        },

        pulledPork: {
            name: 'Pulled Pork',
            id: 'pulledPork',
            image: '../images/toppings/pulledpork.png'
        },

        redOnion: {
            name: 'Ceapa Rosie',
            id: 'redOnion',
            image: '../images/toppings/redonion.png'
        },

        saltyTomato: {
            name: 'Rosii Uscate',
            id: 'saltyTomato',
            image: '../images/toppings/saltytomato.png'
        },

        spinach: {
            name: 'Spanac',
            id: 'spinach',
            image: '../images/toppings/spinach.png'
        },

        tomato: {
            name: 'Rosii',
            id: 'tomato',
            image: '../images/toppings/tomato.png'
        },

        tuna: {
            name: 'Ton',
            id: 'tuna',
            image: '../images/toppings/tuna.png'
        }
    }

    function updateSelector(target) {
        if (target.getAttribute('class') === 'toppingSelector checked') {
            target.setAttribute('class', 'toppingSelector');
            updateYourPizza()
            return
        }
        target.setAttribute('class', 'toppingSelector checked');
        updateYourPizza()
    }

    function updateYourPizza() {
        const toppingsNode = document.querySelectorAll('.checked');
        console.log(toppingsNode);
        toppingOverlay.textContent = '';
        for (const toppingPos of toppingsNode) {
            const toppingImg = document.createElement('img');
            const toppingId = toppingPos.id;

            toppingImg.src = `${toppingsList[toppingId].image}`;
            toppingImg.width = '350';

            toppingImg.setAttribute('class', 'toppingImg');

            toppingOverlay.appendChild(toppingImg);
        }
        makeYourPizzaImgContainer.appendChild(toppingOverlay);
    }

    function createPizzaCards() {
        for (const pizza in pizzaList) {
            const card = document.createElement('div');
            const cardPic = document.createElement('img');
            const cardTitle = document.createElement('p');
            const cardDescr = document.createElement('p');

            card.setAttribute('class', 'card');
            cardPic.setAttribute('class', 'pizzaIcon');

            cardTitle.textContent = pizzaList[pizza].name;
            cardDescr.textContent = pizzaList[pizza].ingredients;

            cardPic.src = pizzaList[pizza].image;

            pizzaContent.appendChild(card);
            card.appendChild(cardPic);
            card.appendChild(cardTitle);
            card.appendChild(cardDescr);

        }
        
        for (const topping in toppingsList) {
            const toppingLabel = document.createElement('div');

            toppingLabel.setAttribute('class', 'toppingSelector');
            toppingLabel.setAttribute('id', `${toppingsList[topping].id}`);

            toppingLabel.textContent = toppingsList[topping].name;

            makeYourPizzaForm.appendChild(toppingLabel);

            toppingLabel.addEventListener('click', function(e) {
                updateSelector(e.target);
            })

        }
        
        content.textContent = '';
        makeYourPizzaTitle.textContent = 'Creeaza pizza ta!';
        makeYourPizzaContainer.textContent = 'Topping-uri:';
        makeYourPizzaImgContainer.textContent = '';
        makeYourPizzaImg.src = '../images/pizza/emptypizza.png';
        makeYourPizzaImg.width = '350';

        makeYourPizzaImgContainer.setAttribute('class', 'makeYourPizzaImgContainer');
        pizzaContent.setAttribute('class', 'pizzaCards');
        makeYourPizzaForm.setAttribute('class', 'pizzaForm');

        content.appendChild(pizzaContent);
        content.appendChild(makeYourPizzaTitle);
        content.appendChild(makeYourPizzaImgContainer);
        makeYourPizzaImgContainer.appendChild(makeYourPizzaImg);
        content.appendChild(makeYourPizzaContainer);
        makeYourPizzaContainer.appendChild(makeYourPizzaForm);
    }
    createPizzaCards()
}



export {menu};