const requestURL = `https://roj21008.github.io/LR-MULTIPLE/js/data.json?t=${new Date().getTime()}`;
const grid = document.querySelector('.grid');
let dataRequest;

fetch(requestURL)
    .then(request => request.json())
    .then( ( data ) => {
        console.log(data);
        const services= data.services;
        dataRequest = services;
        services.forEach(displayCompany);
    })
    .catch(error => console.error("Error cargando JSON:", error));;

 

function displayCompany(service){
    let card = document.createElement('section');
    let h2Name =  document.createElement('h2');
    let logo =  document.createElement('img');
    let Services = document.createElement('p');
    let quoteButton = document.createElement('a');
    
    
    h2Name.textContent = service.name;
    Services.textContent = service.services;
       
    

    logo.setAttribute('src',service.image);
    logo.setAttribute('alt',`Company Logo`);
    logo.setAttribute('loading','lazy');
    logo.classList.add("logo_img-directory");
    card.classList.add("section_service");
    Services.classList.add("services");
    
    quoteButton.textContent='COTIZA AQUI'
    quoteButton.href=('https://wa.me/51948895989?text=Hola,%20gracias%20por%20escribirnos.%20Cuéntanos%20más%20sobre%20el%20servicio%20que%20deseas,%20estaremos%20encantados%20de%20ayudarte%20y%20ofrecerte%20la%20mejor%20cotización.');
    quoteButton.target = '_blank';
    quoteButton.classList.add("quote-button");
    
    

    card.appendChild(logo);
    card.appendChild(h2Name);
    card.appendChild(Services)
    card.appendChild(quoteButton)
    
    
    grid.appendChild(card);
    }
    



document.getElementById('table').addEventListener('click', function () {
   document.getElementById('grid').classList.remove('selected-directory');
   document.getElementById('table').classList.add('selected-directory'); 
    
    table = `<table>
                <tbody>
                </tbody> 
            </table>`;

   grid.innerHTML = table;
    dataRequest.forEach((c) => {
        let tr = document.createElement('tr');
        let name = document.createElement('th');
        let services = document.createElement('th');
        let quoteTh = document.createElement('th');
        let quoteButton = document.createElement('a');
        

        name.textContent = c.name;
        name.style.fontWeight = "bold"; // Texto en negrita
        name.style.textTransform = "uppercase"; // Convertir texto a mayúsculas
        services.textContent = c.services;
        
        quoteButton.textContent='COTIZA AQUI'
    quoteButton.href=('https://wa.me/51948895989?text=Hola,%20gracias%20por%20escribirnos.%20Cuéntanos%20más%20sobre%20el%20servicio%20que%20deseas,%20estaremos%20encantados%20de%20ayudarte%20y%20ofrecerte%20la%20mejor%20cotización.');
    quoteButton.target = '_blank';
    quoteButton.classList.add("quote-button");
        

        tr.appendChild(name);
        tr.appendChild(services);
        tr.appendChild(quoteTh);
        quoteTh.appendChild(quoteButton);
        
        
        document.querySelector('table ').appendChild(tr);
    });
    
});

document.getElementById('grid').addEventListener('click', function(){
    document.getElementById('grid').classList.add('selected-directory');
    document.getElementById('table').classList.remove('selected-directory');     
    
    
    grid.innerHTML = " ";
    dataRequest.forEach(displayCompany);
})