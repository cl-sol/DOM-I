const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav
const navigation = document.querySelectorAll("nav a");
navigation[0].textContent = siteContent["nav"]["nav-item-1"];
navigation[1].textContent = siteContent["nav"]["nav-item-2"];
navigation[2].textContent = siteContent["nav"]["nav-item-3"];
navigation[3].textContent = siteContent["nav"]["nav-item-4"];
navigation[4].textContent = siteContent["nav"]["nav-item-5"];
navigation[5].textContent = siteContent["nav"]["nav-item-6"];

//header
const headerText = document.querySelector(".cta-text h1");
headerText.textContent = siteContent["cta"]["h1"];

const headerButton = document.querySelector(".cta-text button");
headerButton.textContent = siteContent["cta"]["button"];

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

//main content
const mTitle1 = document.querySelectorAll(".top-content .text-content h4");
mTitle1[0].textContent = siteContent["main-content"]["features-h4"];

const mText1 = document.querySelectorAll(".top-content .text-content p");
mText1[0].textContent = siteContent["main-content"]["features-content"];

const mTitle2 = document.querySelectorAll(".top-content .text-content h4");
mTitle2[1].textContent = siteContent["main-content"]["about-h4"];

const mText2 = document.querySelectorAll(".top-content .text-content p");
mText2[1].textContent = siteContent["main-content"]["about-content"];

const mImage = document.querySelector(".middle-img");
mImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const mTitle3 = document.querySelectorAll(".bottom-content .text-content h4");
mTitle3[0].textContent = siteContent["main-content"]["services-h4"];

const mText3 = document.querySelectorAll(".bottom-content .text-content p");
mText3[0].textContent = siteContent["main-content"]["services-content"];

const mTitle4 = document.querySelectorAll(".bottom-content .text-content h4");
mTitle4[1].textContent = siteContent["main-content"]["product-h4"];

const mText4 = document.querySelectorAll(".bottom-content .text-content p");
mText4[1].textContent = siteContent["main-content"]["product-content"];

const mTitle5 = document.querySelectorAll(".bottom-content .text-content h4");
mTitle5[2].textContent = siteContent["main-content"]["vision-h4"];

const mText5 = document.querySelectorAll(".bottom-content .text-content p");
mText5[2].textContent = siteContent["main-content"]["vision-content"];

//Contact
const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

//footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];