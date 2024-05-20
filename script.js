// Funzione per salvare i dati in localStorage
function saveData(name, action, value) {
    const key = `${name}-${action}`;
    localStorage.setItem(key, value);
}

// Funzione per caricare i dati da localStorage
function loadData() {
    const names = ["gilberto", "adriano", "gregorio"];
    const actions = ["water", "cleaned", "brought"];

    names.forEach(name => {
        actions.forEach(action => {
            const key = `${name}-${action}`;
            const value = localStorage.getItem(key) || "0";
            document.getElementById(`${name}-${action}`).textContent = value;
        });
    });
}

// Funzioni per incrementare e decrementare i contatori
function increment(name, action) {
    const element = document.getElementById(`${name}-${action}`);
    const newValue = parseInt(element.textContent) + 1;
    element.textContent = newValue;
    saveData(name, action, newValue);
}

function decrement(name, action) {
    const element = document.getElementById(`${name}-${action}`);
    const newValue = Math.max(parseInt(element.textContent) - 1, 0);
    element.textContent = newValue;
    saveData(name, action, newValue);
}

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

// Funzione per aggiornare i nomi
function updateName(inputId) {
    const inputElement = document.getElementById(inputId);
    const newName = inputElement.value;
    document.getElementById(`turns-text`).textContent = document.getElementById(`turns-text`).textContent.replace(new RegExp(inputElement.placeholder, 'g'), newName);
    inputElement.placeholder = newName;
}

// Carica i dati quando la pagina è caricata
window.onload = loadData;
