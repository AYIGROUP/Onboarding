const inputField = document.getElementById("input");
inputField.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    let input = inputField.value;
    inputField.value = "";
    output(input);
  }
});

function enviar(){
  let input = inputField.value;
  inputField.value = "";
  output(input);  
};

function finalizar(){
  document.getElementById("chat").style.display = "none";
  document.getElementById("chat").style.visibility = "hidden";
  document.getElementById("contact_form").style.display = "block" ;
};


function output(input) {
  outputIA(input);
}
 

function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "Null-E está escribiendo...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    //botText.innerText = `${product}`;
    botText.innerHTML = `${product}`;
  }, 1500);
}


function outputIA(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
 
  // llamada a IA con parametro text
  // Opciones de la petición (valores por defecto)
  const options = {
    method: "GET"
  };

  // Petición HTTP
  fetch("https://vkrkld.deta.dev/responder?texto=" + text, options)
    .then(response => response.text())
    .then(data => {
    /** Procesar los datos **/
      product = data
      addChatEntry(input, product);
  });


}

function sugerenciaNo(){
  addChatEntry("...", "Entonces charlemos...");
}

function getChat(){
  const messagesContainer = document.getElementById("messages").innerText; 
  //alert (messagesContainer);
  window.location.href="https://api.whatsapp.com/send?phone=543517734665&text=Hola, Nececito mas informacion! Adjunto la conversacion con Null-E..." + messagesContainer;

 }

 addChatEntry("", "Hola soy Null-E estoy aqui para intentar ayudarte..."+
                  'Quieres enviarnos alguna sugerencia?'+
                  '<br></br><a href="https://api.whatsapp.com/send?phone=543517734665&text=Quiero dejar una sugerencia...">Si, por whatsapp</a>'+
                  '<br></br><a href="mailto:vmdanguise@gmail.com?subject=Sugerencia&body=quiero dejar un sugerencia">Si, por mail</a>'+
                  '<br></br><a href="#" onclick="sugerenciaNo()">No</a>');
 