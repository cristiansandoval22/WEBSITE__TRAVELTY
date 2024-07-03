const clientImageArr = [
  "/assets/client-1.jpg",
  "/assets/client-2.jpg",
  "/assets/client-3.jpg",
];

const clientImage = document.querySelector(".client__image img");

function updateSwiperImage(eventName, args) {
  if (eventName === "slideChangeTransitionStart") {
    const index = args && args[0].realIndex;
    clientImage.classList.remove("show");
    clientImage.classList.add("hide");
    clientImage.addEventListener(
      "animationend",
      (e) => {
        clientImage.src = clientImageArr[index];
        clientImage.classList.remove("hide");
        clientImage.classList.add("show");
      },
      {
        once: true,
      }
    );
  }
}

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  onAny(event, ...args) {
    updateSwiperImage(event, args);
  },
});

const banner = document.querySelector(".banner__wrapper");

Array.from(banner.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});
