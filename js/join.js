emailjs.init("UxZYFyqEUR3LoSo2t");  // PUBLIC KEY

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "service_eictghb";
  const templateID = "template_tyq2s1w";

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = "Enviar mensaje";
      alert("Correo recibido, te contactaremos en los próximos días!");
      this.reset(); // limpiar formulario
    })
    .catch((err) => {
      btn.value = "Enviar mensaje";
      alert("Error: " + JSON.stringify(err));
    });
});
