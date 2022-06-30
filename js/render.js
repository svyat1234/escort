async function getDb() {
    const db = await fetch('./js/fakeApi/db.json')
            .then(res=>res.json())
            .then(data => render(data))
            .catch(err=> renderError(err))
}

const renderError = (err) => {
    console.log(err);
}

const render = (data) => {
    let cards = document.querySelector('.cards')
    data.forEach(data => {
        cards.innerHTML += `
            <a href="show.html" target="_blank" class="card">

                <div class="slide">
                    <img class="girl" src="img/girl.png" alt="girl">
                </div>

                <h4 class="title text__card">${data.name}</h4>
                <p class="text__card">${data.phone}</p>
                <div class="text__table">
                    <div class="text__row">
                        <p>Возвраст:</p>
                        <span class="color">${data.age}</span>
                    </div>
                    <div class="text__row">
                        <p>Грудь:</p>
                        <span class="color">${data.breastsize}</span>
                    </div>
                    <div class="text__row">
                        <p>Рост:</p>
                        <span class="color">${data.growth}</span>
                    </div>
                    <div class="text__row">
                        <p>Вес:</p>
                        <span class="color">${data.weight}</span>
                    </div>
                </div>

                <p class="text__card">Метро автозаводская</p>
                <p class="text__card">от <span class="color">${data.pricemin}</span> рублей</p>

                <button class="btn text__btn">ПОСМОТРЕТЬ АНКЕТУ</button>
             </a>
            `
    });
    //render карточек и вообще любых данных на основании БД
}
getDb()