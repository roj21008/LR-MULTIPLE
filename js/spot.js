/*let spot1=document.querySelector('.spot1')
let spot2=document.querySelector('.spot2')
let spot3=document.querySelector('.spot3')
let spots=[spot1,spot2,spot3]

fetch('https://roj21008.github.io/wdd230/LR-MULTIPLE/js/data.json?t=${new Date().getTime()}')
    .then(function(respone){return respone.json()})
    .then(function(data){
        let companies=data['companies'];
        console.log(companies[0]);
        let golden=companies.filter(function(company){return company.membership==='gold'})
        let silver=companies.filter(function(company){return company.membership==='silver'})
        let bronze=companies.filter(function(company){return company.membership==='bronze'})
        let status=[]
        bronze.map(function(i){status.push(i)})
        silver.map(function(i){status.push(i)})
        golden.map(function(i){status.push(i)})
        console.log(status)
        spots.forEach(function(i){
        let randomBusiness=status[Math.floor(Math.random() * status.length)]
        let name=randomBusiness.name;
        let image=randomBusiness.image;
        
        i.innerHTML=`<h2>${name}</h2>
                    <img src="${image}" alt="${name}" class="spot-img">
                    <a href="mailto:lrmultipleservice@gmail.com" class="mail-ppto">Pide tu Presupuesto</a>`
        })
  
        
    })*/


        let spot1 = document.querySelector('.spot1');
let spot2 = document.querySelector('.spot2');
let spot3 = document.querySelector('.spot3');
let spots = [spot1, spot2, spot3];

fetch(`https://roj21008.github.io/wdd230/LR-MULTIPLE/js/data.json?t=${new Date().getTime()}`)
    .then(response => response.json())
    .then(data => {
        let companies = data['companies'];

        if (companies.length < 3) {
            console.error("No hay suficientes empresas en el JSON.");
            return;
        }

        // Seleccionar 3 empresas aleatorias sin repetirse
        let selectedCompanies = [];
        while (selectedCompanies.length < 3) {
            let randomCompany = companies[Math.floor(Math.random() * companies.length)];
            if (!selectedCompanies.includes(randomCompany)) {
                selectedCompanies.push(randomCompany);
            }
        }

        // Asignar las empresas aleatorias a los spots
        spots.forEach((spot, index) => {
            let company = selectedCompanies[index];
            let name = company.name;
            let image = company.image;

            spot.innerHTML = `
                <h2>${name}</h2>
                <img src="${image}" alt="${name}" class="spot-img">
                <a href="https://wa.me/51948895989" target="_blank" class="mail-ppto">COTIZA</a>
            `;
        });
    })
    .catch(error => console.error("Error al cargar el JSON:", error));
