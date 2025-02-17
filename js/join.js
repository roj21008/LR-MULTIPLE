const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_tyq2s1w';

console.log(templateID)
console.log(serviceID)
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviando';
      alert('Correo recibido, te contactaremos en los próximos días!');
    }, (err) => {
      btn.value = 'Enviando';
      alert(JSON.stringify(err));
    });
});