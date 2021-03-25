const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');


const idURL = 'https://noroffcors.herokuapp.com/https://jsonkeeper.com/b/CH8F/';

const getID = async () => {
    try {
        const response = await fetch(idURL + id);
        const jsonResults = await response.json();
        const donationArray = jsonResults.data;
        console.log(jsonResults);

    document.title = donationArray.name;
    document.querySelector('.dets_container').innerHTML = `
    <h1>${donationArray.name}</h1>
    <p>Rarity: ${donationArray.number}</p>
    <p>Type: ${donationArray.link}</p>
    <p>Type: ${donationArray.description}</p>
    `;
        document.querySelector('.background__image').style.backgroundImage = `url('${donationArray.image}')`;
    } catch (error) {
        document.querySelector('.alert').innerHTML += showAlertToUser(
            'An error has occured',
            'danger'
        );
        console.log(error);
    } finally {
    // document.querySelector('.loading').classList.add('hide');
    }
} 

getID(id);
    


// async function catchPokemon(id) {
//     try {
//         console.log(id);
//         const response = await fetch('https://noroffcors.herokuapp.com/https://jsonkeeper.com/b/CH8F/' + id);
//         const jsonResults = await response.json();
//     const pokemonArray = jsonResults.data;

    // document.title = pokemonArray.name;
    // document.querySelector('.dets_container').innerHTML = `
    // <h1>${pokemonArray.name}</h1>
    // <p>Rarity: ${pokemonArray.number}</p>
    // <p>Type: ${pokemonArray.link}</p>
    // <p>Type: ${pokemonArray.description}</p>
    // `;
    //     document.querySelector('.background__image').style.backgroundImage = `url('${pokemonArray.image}')`;
    // } catch (error) {
    //     document.querySelector('.alert').innerHTML += showAlertToUser(
    //         'An error has occured',
    //         'danger'
    //     );
    //     console.log(error);
    // } finally {
    // // document.querySelector('.loading').classList.add('hide');
    // }
