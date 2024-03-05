const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.1,
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

    elem.addEventListener("mouseleave", function () {
      page2.style.backgroundImage = "none";
      page2.style.backgroundColor = "black";
    });
  });
}
page2bganim();
