//Pegar os elementos
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ul");


// Evento para clicar no botão

buttonElement.onclick = ev =>{
    ev.preventDefault();

    //console.log(input)


    if (inputElement.value){
        // Criando o span
        const textElement = document.createElement("span");
        textElement.innerHTML = inputElement.value;

        //Criando o botão
        const btnElement = document.createElement("button");
        btnElement.innerHTML = "Remover";


        const liElement = document.createElement("li");
        liElement.appendChild(textElement);
        liElement.appendChild(btnElement);


        // Removendo o elemento do li

        btnElement.onclick = () =>{
            ulElement.removeChild(liElement);
        }

        ulElement.appendChild(liElement);
        inputElement.value = "";


    }
};