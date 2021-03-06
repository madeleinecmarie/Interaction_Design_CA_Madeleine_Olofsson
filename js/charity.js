document.querySelector('.loading').innerHTML = `<img src="/img/loading_gif2.gif" />`;
const donationUrl = 'https://noroffcors.herokuapp.com/https://jsonkeeper.com/b/CH8F/';


const getDonations = async () => {
    try {
		const repsonse = await fetch(donationUrl);
		const donations = await repsonse.json();
        console.log(donations);

   donations.forEach((value) => {
       document.querySelector('.container').innerHTML += `
       <div class="card">
       <div class="charity_img charity${value.id}"></div>
       <h2 class="h2_charity"> ${value.name}</h2>
       
       <p class="p_desc"> ${value.description}</p>
       <p class="p_phone"> Phone: ${value.number}</p>
       <p><a class="charity_link" href="${value.link}">Read more on our website: <span class="link_char">${value.link}</span></a></p>
       </div>
       `;
       
       document.querySelector(`.charity${value.id}`).style.backgroundImage = `url(${value.image})`;
   });

	} catch (error) {
		// show the user some error
        document.querySelector('.alert').innerHTML += showAlertToUser(
            'An error has occurred',
            'danger'
          );
          console.log(error);

        } finally {
            document.querySelector('.loading').classList.add('hide');
        }
    }

getDonations();