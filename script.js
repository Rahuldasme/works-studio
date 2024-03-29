document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.04,
  });

  document.querySelector("#footer #btt").addEventListener("click", function () {
    scroll.scrollTo(0);
  });

  function loader() {
    let tl = gsap.timeline();
    tl.to("#yellow", {
      top: "-100%",
      delay: 0.5,
      duration: 0.5,
      ease: "expo.out",
    });

    tl.to(
      "#loader video",
      {
        top: "-100%",
        delay: 0.4,
        duration: 0.5,
        ease: "expo.out",
      },
      "anim"
    );
    tl.to(
      "#loader h1",
      {
        color: "black",
        delay: 0.5,
        duration: 0.9,
      },
      "anim"
    );

    tl.to(
      "#loader",
      {
        opacity: 0,
        delay: 0.3,
        duration: 2,
        ease: "expo.out",
      },
      "anim"
    );
    tl.to(
      "#loader",
      {
        display: "none",
        delay: 0.01,
      },
      "anim"
    );
  }
  loader();

  function page2bganim() {
    let elems = document.querySelectorAll(".elem");
    let page2 = document.querySelector("#page2");
    elems.forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        let bgimg = elem.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bgimg})`;
        // page2.style.backgroundColor = "transparent";
      });
    });

    let bgImages = [
      "img/MIN-1_240208_000417_7e2310f9f2d149843122e3a2929676cc.jpg",
      "img/converse-21_7e2310f9f2d149843122e3a2929676cc.jpg",
      "img/skky-25_7e2310f9f2d149843122e3a2929676cc.jpg",
      "img/BOLDLY-1_7e2310f9f2d149843122e3a2929676cc.jpg",
      "img/USS-1_240208_001956_7e2310f9f2d149843122e3a2929676cc.jpg",
    ];
    let bgIndex = 0;

    function changeBackground() {
      page2.style.backgroundImage = `url(${bgImages[bgIndex]})`;

      // page2.querySelector(
      //   ".elem .moving"
      // ).style.transform = `translate(0, -45%) scaleY(1)`;
      // page2.querySelector(".elem .moving .moving-in h5").style.opacity = 1;

      bgIndex = (bgIndex + 1) % bgImages.length;
    }

    let bgTimer = setInterval(changeBackground, 2000);

    page2.addEventListener("mouseenter", function () {
      clearInterval(bgTimer);
    });

    page2.addEventListener("mouseleave", function () {
      bgTimer = setInterval(changeBackground, 2000);
    });

    // Initially set the background image
    changeBackground();
  }
  page2bganim();
});
