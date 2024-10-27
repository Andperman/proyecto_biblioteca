const apiKey = 'n2hFHOYmkZlzUPwCEDmEfj9q3fsE97dE'; 
const listsBooks = document.getElementById('lists-books');
const loading = document.getElementById('loading');

async function listaTematica() {
    try {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${apiKey}`);
        const data = await response.json();

        loading.style.display = 'none';

        data.results.forEach(list => {
            const listItem = document.createElement('div');
            listItem.className = 'list-item';

    
            listItem.innerHTML =
                `
                <h2>${list.display_name}</h2>
                <hr>
                <p>Fecha más antiguo: ${list.oldest_published_date}</p>
                <p>Último libro: ${list.newest_published_date}</p>
                <p>Frecuencia de actualización: ${list.updated}</p>
                <a href="#" class="verLista" data-list="${list.list_name}">Ver lista</a>
            `;
            listsBooks.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al cargar las listas:', error);
    }
}

listaTematica();
