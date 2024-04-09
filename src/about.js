function about() {
    const contactUs = document.createElement('h1');
    const contact = document.createElement('div');
    const contact2 = document.createElement('div');
    const contact3 = document.createElement('div');
    const contactStatus = document.createElement('p');
    const contactStatus2 = document.createElement('p');
    const contactStatus3 = document.createElement('p');
    const contactName = document.createElement('p');
    const contactName2 = document.createElement('p');
    const contactName3 = document.createElement('p');
    const contactPhone = document.createElement('p');
    const contactPhone2 = document.createElement('p');
    const contactPhone3 = document.createElement('p');
    const locatii = document.createElement('p');

    contact.setAttribute('class', 'contact');
    contact2.setAttribute('class', 'contact');
    contact3.setAttribute('class', 'contact');
    contactStatus.setAttribute('class', 'status');
    contactStatus2.setAttribute('class', 'status');
    contactStatus3.setAttribute('class', 'status');
    contactName.setAttribute('class', 'name');
    contactName2.setAttribute('class', 'name');
    contactName3.setAttribute('class', 'name');
    contactPhone.setAttribute('class', 'phone');
    contactPhone2.setAttribute('class', 'phone');
    contactPhone3.setAttribute('class', 'phone');
    
    content.textContent = '';
    contactUs.textContent = 'Contact';
    contactStatus.textContent ='Sef';
    contactName.textContent = 'Piccolo Pigaura';
    contactPhone.textContent = '777-777-777';
    contactStatus2.textContent = 'Mario Pigaura';
    contactPhone2.textContent = '888-888-888';
    contactStatus3.textContent = 'Comenzi Telefon';
    contactName3.textContent = '111-111-1111';
    contactPhone3.textContent = '111-111-1112';

    locatii.textContent = "Rosieni Str. Maslinilor Nr.9";

    content.appendChild(contactUs);
    content.appendChild(contact);
    content.appendChild(contact2);
    content.appendChild(contact3);
    content.appendChild(locatii);
    contact.appendChild(contactStatus);
    contact.appendChild(contactName);
    contact.appendChild(contactPhone);
    contact2.appendChild(contactStatus2);
    contact2.appendChild(contactName2);
    contact2.appendChild(contactPhone2);
    contact3.appendChild(contactStatus3);
    contact3.appendChild(contactName3);
    contact3.appendChild(contactPhone3);
}

export {about};