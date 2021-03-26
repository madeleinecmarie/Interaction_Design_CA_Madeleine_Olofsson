const donationUrl = 'https://noroffcors.herokuapp.com/https://jsonkeeper.com/b/CH8F/';


const getDonations = async () => {
    try {
		const repsonse = await fetch(donationUrl);
		const donations = await repsonse.json();
        console.log(donations);

   donations.forEach((value) => {
       document.querySelector('.cardsContainer').innerHTML += `
       <div class="cards">
       <div class="donation_img donation${value.id}"></div>
       <h2 class="h2_js"> ${value.name}</h2>
       <p><a class="website_link" href="${value.link}">Read more on our website: <span class="link">${value.link}</span></a></p>
       <button id="btn">Select</button>
       </div>
       `;
       
       document.querySelector(`.donation${value.id}`).style.backgroundImage = `url(${value.image})`;
   });

	} catch (error) {
		// show the user some error
        document.querySelector('.alert').innerHTML += showAlertToUser(
            'An error has occurred',
            'danger'
          );
          console.log(error);

	}
}

getDonations();