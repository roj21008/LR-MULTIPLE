const requestURL = `https://roj21008.github.io/wdd230/LR-MULTIPLE/js/data.json?t=${new Date().getTime()}`;
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
    let Telephone = document.createElement('p');  
    
    

    
    
    h2Name.textContent = service.name;
    Services.textContent = service.services;
    Telephone.textContent = service.tel;
   

    
    

    logo.setAttribute('src',service.image);
    logo.setAttribute('alt',`Company Logo`);
    logo.setAttribute('loading','lazy');
    logo.classList.add("logo_img-directory");
    card.classList.add("section_service");
    Services.classList.add("services");
    Telephone.classList.add("telephone");  
    

    card.appendChild(logo);
    card.appendChild(h2Name);
    card.appendChild(Services)
    card.appendChild(Telephone)
    
    
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
        let tel = document.createElement('th');
        

        name.textContent = c.name;
        services.textContent = c.services;
        tel.textContent = c.tel;
        

        tr.appendChild(name);
        tr.appendChild(services);
        tr.appendChild(tel);
        
        
        document.querySelector('table ').appendChild(tr);
    });
    
});

document.getElementById('grid').addEventListener('click', function(){
    document.getElementById('grid').classList.add('selected-directory');
    document.getElementById('table').classList.remove('selected-directory');     
    
    
    grid.innerHTML = " ";
    dataRequest.forEach(displayCompany);
})