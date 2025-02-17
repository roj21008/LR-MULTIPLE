let spot1 = document.querySelector('.spot1');
let spot2 = document.querySelector('.spot2');
let spot3 = document.querySelector('.spot3');
let spots = [spot1, spot2, spot3];

fetch(`https://roj21008.github.io/LR-MULTIPLE/js/data.json?t=${new Date().getTime()}`)
    .then(response => response.json())
    .then(data => {
        let services = data['services'];
        console.log(data);

        if (services.length < 3) {
            console.error("No hay suficientes empresas en el JSON.");
            return;
        }

        // Seleccionar 3 empresas aleatorias sin repetirse
        let selectedServices = [];
        while (selectedServices.length < 3) {
            let randomService = services[Math.floor(Math.random() * services.length)];
            if (!selectedServices.includes(randomService)) {
                selectedServices.push(randomService);
            }
        }

        // Asignar las empresas aleatorias a los spots
        spots.forEach((spot, index) => {
            let service = selectedServices[index];
            let name = service.name;
            let image = service.image;

            spot.innerHTML = `
                <h2>${name}</h2>
                <img src="${image}" alt="${name}" class="spot-img">
                <a href="https://wa.me/51948895989" target="_blank" class="ws-ppto">COTIZA</a>
            `;
        });
    })
    .catch(error => console.error("Error al cargar el JSON:", error));
