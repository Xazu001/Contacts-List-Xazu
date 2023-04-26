let contactList = [
    {
        name: "Kacper Kijek",
        phoneNumber: "506 952 548",
    },
    {
        name: "Patrycja Kijek",
        phoneNumber: "Nie pamiętam",
    },
];

if (localStorage.getItem("ContactList")) {
    contactList = JSON.parse(localStorage.getItem("ContactList") ?? contactList);
}

const renderContacts = () => {
    const contactsContainer = document.querySelector("#contacts");
    contactsContainer.innerHTML = "";

    contactList.forEach((contact) => {
        const newContact = `
        <div class="contact">
        <div class="contact-info"> 
        <p>${contact.name}</p>
        <span>${contact.phoneNumber}</span>
        </div>
        <div class="contact-remove">
        <p>XXX</p>
        </div>
        </div>
        `;

        contactsContainer.innerHTML += newContact;

    });
};

document.querySelector("#add-contact").addEventListener("click", () => {
    const nameField = document.querySelector("#name");
    const phoneNumberField = document.querySelector("#phone-number");

    const newContact = {
        name: nameField.value,
        phoneNumber: phoneNumberField.value,
    };

    contactList.push(newContact);
    localStorage.setItem("ContactList", JSON.stringify(contactList));

    renderContacts();

    nameField.value = "";
    phoneNumberField.value = "";

})

renderContacts();