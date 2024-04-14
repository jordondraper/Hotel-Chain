// inject current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');
hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
})

import { hotels } from '../data/hotels.js';
console.log(hotels);
const cards=document.querySelector('#fancyhotel')

hotels.forEach(
 hotel => {
    const mySection = document.createElement('section')

    const theImage = document.createElement("img")
    theImage.src = `images_hotel/${hotel.photo}`
    theImage.alt = `Hotel Name ${hotel.name}`

    const theName = document.createElement("h2")
    theName.textContent = hotel.name

    const theAddress = document.createElement("p");
    theAddress.className="address"
    theAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`

    const thePhone = document.createElement("p2");
    thePhone.textContent = hotel.phone

    mySection.appendChild(theImage)
    mySection.appendChild(theName)
    mySection.appendChild(theAddress)
    mySection.appendChild(thePhone)
    cards.appendChild(mySection)
 }   
);