//DOM Selectors
const startButton = document.getElementById("startButton");
const background = document.getElementById("background");
const rocketImg = document.getElementById("rocketImg");
const backgroundTwo = document.getElementById("backgroundTwo");
const chairLeft = document.getElementById("chairLeft");
const chairRight = document.getElementById("chairRight");
const footer = document.getElementById("footer");
const cardsContainer = document.getElementById("cardsContainer");
const middleCards = document.getElementById("middleCards");
const leftCard = document.getElementById("leftCard");
const rightCard = document.getElementById("rightCard");
const cardsContainerButton = document.getElementById("cardsContainerButton");
const middleCardsButton = document.getElementById("middleCardsButton");
const leftCardButton = document.getElementById("leftCardButton");
const rightCardButton = document.getElementById("rightCardButton");
const chatIframe = document.getElementById("chatIframe");
const bubbleChat = document.getElementById("bubbleChat");
const nulleHead = document.getElementById("nulleHead");
const closeChat = document.getElementById("closeChat");
const closeChatChild = document.getElementById("closeChatChild");
const login = document.getElementById("login");
const inputEmail = document.getElementById("inputEmail");
const error = document.getElementById("error");
const column = document.getElementById("button-column");
const proposito = document.getElementById("propositoButton");
const detailScreenOne = document.getElementById("detailScreenOne");
const detailScreenHome = document.getElementById("detailScreenHome");
const detailTitle = document.getElementById("detailTitle");
const puntoAyi = document.getElementById("puntoAyi");
const info = document.getElementById("info");
const tmp = document.getElementById("tmp");
const swiperr = document.getElementById("swiperr");
const infoP = document.getElementById("infoP");
const closeSwiper = document.getElementById("closeSwiper");
const closeSwiperChild = document.getElementById("closeSwiperChild");
const radar = document.getElementById("radar");


//window.open("https://vkrkld.deta.dev/responder?texto=hola", "_blank");
TODO: "Create login service because this is extremely insecure."
let session = localStorage.getItem('key');
if(session){
    console.log(session);
    changeScene();
    
}else{
    login.addEventListener("submit", (e)=>{ //Login
        e.preventDefault();
        if(validateEmail(inputEmail.value)){
            changeScene();
            localStorage.setItem('key', 'value');
            session = localStorage.getItem('key');
            console.log(session);
        }else{
            login.style.animation = "shake 0.5s";
            error.style.display = "block";
        }
    });
}


function validateEmail(email){ //Validate if email contains "ayi.group"
    const validateEmail = String(email).substr(-9);
    const emailDomain = "ayi.group";
    if(validateEmail === emailDomain){
        return true;
    }else{
        return false;
    }
};

function changeScene(){ //Run animations when login as succsefully
    background.style.transform = "translateY(-800px)";
    backgroundTwo.style.display = "block";
    rocketImg.src = "assets/img/Fondo-Index.png"
    column.style.transform = "translateY(-700px)";
    chairLeft.style.animation = "diagonal-move-anim 1s linear forwards alternate"
    chairRight.style.animation = "diagonal-move-anim-right 1s linear forwards alternate"
    footer.style.transform = "translateY(-7vh)"
    cardsContainer.style.display = "flex";
    middleCards.style.animation = "showMeTop 2s forwards";
    leftCard.style.animation = "showMeLeft 2s forwards";
    rightCard.style.animation = "showMeRight 2s forwards";
    cardsContainerButton.style.display = "flex";
    middleCardsButton.style.animation = "showMeTop 2s forwards";
    leftCardButton.style.animation = "showMeLeft 2s forwards";
    rightCardButton.style.animation = "showMeRight 2s forwards";
    bubbleChat.style.display = "flex";
    bubbleChat.style.animation = "showMeRight 1.5s forwards";
    //puntoAyi.style.display = "flex";
    //puntoAyi.style.animation = "showMeLeft 1.5s forwards";
    setTimeout(() => {
        //puntoAyi.style.animation = "none";
        bubbleChat.style.animation = "none";
    }, 2000);
    info.style.display = "flex";
    info.style.animation = "showMeTop 2s forwards";
    setTimeout(() => {
        radar.style.display = "block";
    }, 2000);
    
    

}

info.addEventListener('click', (e)=>{ //Open "Propósito AYI" PopUp
    info.classList.remove("hideSwipper");
    info.style.width = "80%";
    info.style.height = "80%";
    info.style.left = "10%";
    info.style.bottom = "10%";
    info.style.backgroundColor = "transparent";
    swiperr.style.display = "flex";
    infoP.style.display = "none";
    if(e.target === closeSwiper || e.target === closeSwiperChild){ //Close "Propósito AYI" PopUp
        info.classList.add("hideSwipper");
        infoP.style.display = "block";
        swiperr.style.display = "none";
    }
});

bubbleChat.addEventListener('click', (e) => { //Open the chat iframe when user click in the bubble
    bubbleChat.style.height="500px";
    bubbleChat.style.width="400px";
    bubbleChat.style.borderRadius = "20px";
    bubbleChat.classList.remove("hover");
    nulleHead.style.display = "none";
    chatIframe.style.display = "block";
    closeChat.style.display = "block";
    if(e.target === closeChat || e.target === closeChatChild){ //Close the iframe when user click in the X
        bubbleChat.style.height="100px";
        bubbleChat.style.width="100px";
        bubbleChat.style.borderRadius = "50%";
        bubbleChat.classList.add("hover");
        nulleHead.style.display = "block";
        chatIframe.style.display = "none";
        closeChat.style.display = "none";
    }
});

window.addEventListener('mouseup', function(event){ //Close the iframe when user click outside the chat
	if (event.target != bubbleChat && event.target.parentNode != bubbleChat){
        bubbleChat.style.height="100px";
        bubbleChat.style.width="100px";
        bubbleChat.style.borderRadius = "50%";
        bubbleChat.classList.add("hover");
        nulleHead.style.display = "flex";
        chatIframe.style.display = "none";
        closeChat.style.display = "none";
    }
});

function detailScreen(title){ //Open "Ver Más" section
    detailTitle.textContent = title;
    detailScreenOne.style.transform = "translateX(-100vw)";
    backgroundTwo.style.zIndex = "5";
    puntoAyi.style.display = "none";
}
function closeDetail(){ //Close "Ver Más" section when user click in Home icon
    detailScreenOne.style.transform = "translateX(0)"
    backgroundTwo.style.zIndex = "-1";
    puntoAyi.style.display = "flex";
}

radar.addEventListener('click', ()=>{
    window.open("https://ayi-21895119.hubspotpagebuilder.com/punto.ayi", "blank")
});




