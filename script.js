document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded!');

    // Funzione per caricare i contatori dal localStorage
    function loadCounts() {
        const savedCounts = localStorage.getItem('counts');
        if (savedCounts) {
            return JSON.parse(savedCounts);
        } else {
            return {
                gilberto: { water: 0, cleaned: 0, brought: 0 },
                adriano: { water: 0, cleaned: 0, brought: 0 },
                gregorio: { water: 0, cleaned: 0, brought: 0 }
            };
        }
    }

    // Inizializza contatori
    let counts = loadCounts();

    // Funzione per aggiornare i valori nella tabella
    function updateTable() {
        document.getElementById('gilberto-water').innerText = counts.gilberto.water;
        document.getElementById('gilberto-cleaned').innerText = counts.gilberto.cleaned;
        document.getElementById('gilberto-brought').innerText = counts.gilberto.brought;

        document.getElementById('adriano-water').innerText = counts.adriano.water;
        document.getElementById('adriano-cleaned').innerText = counts.adriano.cleaned;
        document.getElementById('adriano-brought').innerText = counts.adriano.brought;

        document.getElementById('gregorio-water').innerText = counts.gregorio.water;
        document.getElementById('gregorio-cleaned').innerText = counts.gregorio.cleaned;
        document.getElementById('gregorio-brought').innerText = counts.gregorio.brought;
    }

    // Funzione per salvare i contatori nel localStorage
    function saveCounts() {
        localStorage.setItem('counts', JSON.stringify(counts));
    }

    // Funzione per incrementare i contatori
    window.increment = function(name, activity) {
        if (counts[name]) {
            counts[name][activity]++;
            updateTable();
            saveCounts();
        }
    };

    // Funzione per diminuire i contatori
    window.decrement = function(name, activity) {
        if (counts[name] && counts[name][activity] > 0) {
            counts[name][activity]--;
            updateTable();
            saveCounts();
        }
    };

    // Funzione per controllare la password
    window.checkPassword = function() {
        const password = document.getElementById('password').value;
        if (password === "MiniJCW") { // Imposta la tua password qui
            document.getElementById('button-container').style.opacity = '1';
            document.getElementById('button-container').style.pointerEvents = 'auto';
            document.getElementById('password-popup').style.display = 'none';
            const buttons = document.querySelectorAll('.button-container button');
            buttons.forEach(button => button.disabled = false);
        } else {
            alert('Password sbagliata, puoi solo visionare i dati');
        }
    };

    // Inizializza la tabella con i valori di partenza
    updateTable();
});
