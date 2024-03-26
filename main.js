// start list header
let hamBtn = document.getElementById("icon-hamburger")
let closeBtn = document.getElementById("close-list")
let headList = document.getElementsByClassName("mob-list")
let checked = false
hamBtn.addEventListener("click", function() {

    headList[0].style.display ="block"
    gsap.from(".mob-list", { 
    y: -500,
    duration: 1,
    ease: "power2.out",
            });
}

);
closeBtn.addEventListener("click", function() {
            headList[0].style.display ="none"
});
// end list header

//start features choice
let simple = document.getElementById("simple");
let speedy = document.getElementById("speedy");
let easy = document.getElementById("easy");
let choiceHead = document.getElementById("choiceHead");
let choiceText = document.getElementById("choiceText")
let choiceImg = document.getElementById("choiceImg")

let data = [{
    "id": "simple",
    "index":"0",
    "header": "Simple Bookmarking",
    "text" :"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    "img" :"images/illustration-features-tab-1.svg"

}, {
    "id": "speedy",
    "index":"1",
    "header": "Intelligent search",
    "text":"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    "img" :"images/illustration-features-tab-2.svg"
}, {
    "id": "easy",
    "index":"2",
    "header": "Share your bookmarks",
    "text" :"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    "img" :"images/illustration-features-tab-3.svg"
}];

let handleChoice = (id , index) => {
        choiceHead.innerHTML = data[index].header;  
        choiceText.innerHTML = data[index].text;
        choiceImg.src=data[index].img
};
simple.addEventListener("click", function() {
    handleChoice("simple","0");
});

speedy.addEventListener("click", function() {
    handleChoice("speedy","1");
});

easy.addEventListener("click", function() {
    handleChoice("easy","2");
});
//end features choice
//start FAQ
let btn = document.getElementsByClassName("toglle");
let p = document.getElementsByClassName("inner");

let handleFAQ = (id) => {
    for (let index = 0; index < p.length; index++) {
        if (index == id) {
            if (p[id].style.display === "none") {
                p[id].style.display = "block";
                
            } else {
                p[id].style.display = "none";
            }
        } else {
            p[index].style.display = "none";
        }
    }
}

//end FAQ
// start footer
let email = document.getElementById("email")
let emailCont = document.querySelector(".emailCont")

const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/
let emailHandler = () => {
if (email.value.match(emailRegex)){
    console.log("done")
        } else {
        emailCont.style.backgroundColor = "var(--Soft-Red)"
        emailCont.style.padding ="2px 2px 2px 2px"
        emailCont.style.borderRadius ="4px"
        emailCont.innerHTML +="<p>whoops, make sure it's an email</p>"
        }
}

// end footer
// start download animation
gsap.registerPlugin(ScrollTrigger);
gsap.from(".card", { 
        x: -1000, duration: 2,
        stagger: 0.1,
        ease: "power2.out",
        start: "top center",
        scrollTrigger:{
            trigger:"card",
            // triggerActions: "play restart restart pause" 
        },
        start: "top 80%",
        scrollTrigger: {
                trigger: ".card", 
                start: "top center", 
                
                    },});

        // gsap.to(".card", {
        //     opacity: 1,
        //       duration: 0, // مدة الأنيميشن بالثواني
        //       stagger: 0.5, // التباين بين ظهور العناصر
        //       ease: "power2.out", // نمط التسارع
        //     scrollTrigger: {
        //         trigger: ".card", // العناصر التي تشغيل الأنيميشن عند تمريرها
        //         start: "top 80%", // بداية الأنيميشن عندما يصل التمرير إلى الـ 80% العلوي من العنصر
        //             },
        //     });

// end download animation
