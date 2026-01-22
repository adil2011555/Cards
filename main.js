const socials = [
  {
    icon: "https://bit.ly/4qyPxM1",
    title: "Instagram",
    description: "Сүрөттөрдү жана видеолорду бөлүшүүчү социалдык тармак.",
    
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    title: "Facebook",
    description: "Достор менен байланышып, постторду бөлүшүүгө мүмкүнчүлүк берүүчү сайт.",
   
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
    title: "Twitter",
    description: "Кыска билдирүүлөрдү жана жаңылыктарды бөлүшүүчү платформа.",
    
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    title: "WhatsApp",
    description: "Мобилдик мессенджер, текст, сүрөт жана видео жөнөтүү мүмкүнчүлүгү бар.",
    
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
    title: "TikTok",
    description: "Кыска видеолорду жаратуу жана бөлүшүү платформасы.",
    
  }
];

let box = document.getElementById("box")

function cards() {
    let container = document.createElement("div");
    container.id = "container";

    box.prepend(container)

    socials.forEach((item)=>{
        container.innerHTML += `
        <div class="div1">
        <img class="img" src="${item.icon}"></img>
        <p>${item.title}</p>
        <span>${item.description}</span>
        </div> 
        `
    });
}
cards();
