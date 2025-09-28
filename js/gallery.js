const imagesData = [
  { thumb: "img/sl1.jpeg", title: "NO.1", type: "STUDENT PROTESTS<br>STICKER" },
  { thumb: "img/sl2.jpeg", title: "NO.2", type: "STUDENT PROTESTS<br>POSTER" },
  { thumb: "img/sl3.jpeg", title: "NO.3", type: "STUDENT PROTESTS<br>SHIRT DESIGN" },
  { thumb: "img/sl4.png", title: "NO.4", type: "Suicide awareness<br>poster" },
  { thumb: "img/sl5.jpeg", title: "NO.5", type: "SHADOW FACES<br>ILLUSTRATION" },
  { thumb: "img/sl6.jpeg", title: "NO.6", type: "SHADOW FACES<br>ILLUSTRATION" },
  { thumb: "img/sl7.jpeg", title: "NO.7", type: "SHADOW FACES<br>ILLUSTRATION" },
  { thumb: "img/sl8.jpeg", title: "NO.8", type: "SHADOW FACES<br>ILLUSTRATION" },
  { thumb: "img/sl9.jpeg", title: "NO.9", type: "SHADOW FACES<br>ILLUSTRATION" },
  { thumb: "img/sl10.jpeg", title: "NO.10", type: "SHADOW FACES<br>ILLUSTRATION" },
  { thumb: "img/sl11.jpeg", title: "NO.11", type: "SHADOW FACES<br>ILLUSTRATION" },
  { thumb: "img/sl12.jpeg", title: "NO.12", type: "SHADOW FACES<br>ILLUSTRATIO" },
  { thumb: "img/sl13.jpeg", title: "NO.13", type: "INDIVIDUATION<br>POSTER" },
  { thumb: "img/sl14.jpeg", title: "NO.14", type: "INDIVIDUATION<br>POSTER" },
  { thumb: "img/sl15.jpeg", title: "NO.15", type: "INDIVIDUATION<br>POSTER" },
  { thumb: "img/sl16.jpeg", title: "NO.16", type: "KLIMA<br>PUBLICATION" },
  { thumb: "img/sl17.jpg", title: "NO.17", type: "Inner Echoes<br>Publication&Photography" },
  { thumb: "img/sl18.jpg", title: "NO.18", type: "Inner Echoes<br>Publication&Photography" },
  { thumb: "img/sl19.jpg", title: "NO.19", type: "Inner Echoes<br>Publication&Photography" },
  { thumb: "img/sl20.jpg", title: "NO.20", type: "Inner Echoes<br>Publication&Photography" },
{ thumb: "img/sl21.jpeg", title: "NO.21", type: "LAST WILL<br>PUBLICATION" },
  { thumb: "img/sl22.jpeg", title: "NO.22", type: "GIACOMETTI<br>PUBLICATION" },
  { thumb: "img/sl23.jpeg", title: "NO.23", type: "GIACOMETTI <br>PUBLICATION" },
  { thumb: "img/sl24.jpeg", title: "NO.24", type: "GIACOMETTI <br>PUBLICATION" },
  { thumb: "img/sl25.png", title: "NO.25", type: "DEAD PIGEON<br>ILLUSTRATION" },
  { thumb: "img/sl26.jpeg", title: "NO.26", type: "DEVINE CREATURES<br>ILLUSTRATION" },
  { thumb: "img/sl27.jpeg", title: "NO.27", type: "DEVINE CREATURES FACES<br>ILLUSTRATION" },
  { thumb: "img/sl28.jpeg", title: "NO.28", type: "DEVINE CREATURES FACES<br>ILLUSTRATION" },
];
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  if (!gallery) return;

  imagesData.forEach((imageData) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = imageData.thumb;
    img.alt = imageData.title;

    const caption = document.createElement("div");
    caption.classList.add("caption");
    caption.innerHTML = `<span>${imageData.title}</span><span class="type">${imageData.type}</span>`;

    item.appendChild(img);
    item.appendChild(caption);
    gallery.appendChild(item);
  });
});


