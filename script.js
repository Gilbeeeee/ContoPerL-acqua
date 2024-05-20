// Funzione per verificare la password
function checkPassword() {
    const correctPassword = "Mini"; // Sostituire con la password corretta
    const enteredPassword = document.getElementById("password").value;

    if (enteredPassword === correctPassword) {
        enableElements();
        document.getElementById("password-popup").style.display = "none";
        document.getElementById('button-container').style.opacity = '1';
                   document.getElementById('button-container').style.pointerEvents = 'auto';
                   document.getElementById('password-popup').style.display = 'none';
                   const buttons = document.querySelectorAll('.button-container button');
                   buttons.forEach(button => button.disabled = false);
    } else {
        alert("Password errata, riprova.");
    }
}

// Funzione per abilitare tutti gli elementi
function enableElements() {
    const buttons = document.querySelectorAll(".button-container button");
    const textboxes = document.querySelectorAll(".text-box");
    const updateButtons = document.querySelectorAll(".text-box-container button");

    buttons.forEach(button => {
        button.removeAttribute("disabled");
        button.style.display = "inline-block"; // Assicurati che i pulsanti siano visibili
    });
    textboxes.forEach(textbox => textbox.removeAttribute("disabled"));
    updateButtons.forEach(button => button.removeAttribute("disabled"));
}

// Funzioni per incrementare e decrementare i contatori
function increment(name, action) {
    const element = document.getElementById(`${name}-${action}`);
    element.textContent = parseInt(element.textContent) + 1;
}

function decrement(name, action) {
    const element = document.getElementById(`${name}-${action}`);
    element.textContent = Math.max(parseInt(element.textContent) - 1, 0);
}

// Funzione per aggiornare i nomi
function updateName(inputId) {
    const inputElement = document.getElementById(inputId);
    const newName = inputElement.value;
    document.getElementById(`turns-text`).textContent = document.getElementById(`turns-text`).textContent.replace(new RegExp(inputElement.placeholder, 'g'), newName);
    inputElement.placeholder = newName;
}

