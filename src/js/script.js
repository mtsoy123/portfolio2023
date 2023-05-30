const experienceCards = document.querySelectorAll(".card__button_type_expand");

const toggleExperience = (event) => {
    event.target.parentElement.parentElement.parentElement.children[1].classList.toggle(
        "card_type_hidden"
    );

    if (event.target.textContent === "Expand") {
        event.target.textContent = "Fold";
    } else {
        event.target.textContent = "Expand";
    }

    event.target.classList.toggle("card__button_type_active");
};

experienceCards.forEach((button) => {
    button.addEventListener("click", (event) => toggleExperience(event));
});

const contactsCard = document.querySelector(".card_type_contacts");
const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
};

contactsCard.addEventListener("click", scrollToBottom);
