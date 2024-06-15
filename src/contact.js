const loadContact = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('p');
    headline.textContent = "Contact";
    headline.style.textAlign = 'center';
    headline.style.fontSize = '48px';
    headline.style.fontWeight='bold';
    content.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = "Find us at some address at some place or call us at 05050515-122330. Reserve a table, ask for today's special or just send us a message:";
    description.style.textAlign = 'center';
    description.style.marginBottom = '10px 30px';
    description.style.fontSize = '32px';
    content.appendChild(description);

    const form = document.createElement('form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.alignItems = 'center';
    form.style.gap = '10px';

    const name = document.createElement('input');
    name.type = "text";
    name.placeholder = "Name";
    name.style.padding = '10px';
    name.style.width = '500px';

    const numberOfPeople = document.createElement('input');
    numberOfPeople.type = "text";
    numberOfPeople.placeholder = "Number Of Persons";
    numberOfPeople.style.padding = '10px';
    numberOfPeople.style.width = '500px';

    const time = document.createElement('input');
    time.type = "datetime-local";
    time.placeholder = "14-06-2024 20:00";
    time.style.padding = '10px';
    time.style.width = '500px';

    const msg = document.createElement('textarea');
    msg.placeholder = "Message";
    msg.style.padding = '10px';
    msg.style.width = '500px';
    msg.style.height = '200px';

    const send = document.createElement('button');
    send.textContent = "Send";
    send.style.padding = '10px 20px';
    send.style.backgroundColor = '#333';
    send.style.color = '#fff';
    send.style.border = 'none';
    send.style.cursor = 'pointer';

    form.appendChild(name);
    form.appendChild(numberOfPeople);
    form.appendChild(time);
    form.appendChild(msg);
    form.appendChild(send);
    content.appendChild(form);
}

export default loadContact;
