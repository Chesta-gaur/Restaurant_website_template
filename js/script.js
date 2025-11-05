// hero-img rotation

window.addEventListener("load", () => {
  const heroImg = document.querySelector(".hero-img");
  setTimeout(() => {
    // Freeze final state of first animation
    heroImg.style.transform = "translateX(0px)";

    // Cancel the previous animation
    heroImg.style.animation = "none";

    // Force reflow
    void heroImg.offsetWidth;

    // Start rotation animation, preserving translateX
    heroImg.style.animation = "rotate360 35s linear infinite";
  }, 2500);
});

// header border bottom while scrolling

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// active hover on dish card

const cards = document.querySelectorAll(".dish-card");
const centerCard = cards[1]; //second card in the node list

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cards.forEach((c) => c.classList.remove("active")); //remove from all
    card.classList.add("active"); //add to hovered
  });
  card.addEventListener("mouseleave", () => {
    cards.forEach((c) => c.classList.remove("active")); //remove from all
    centerCard.classList.add("active"); //restore to center
  });
});

// scroll animation on second section(dishes)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

document.querySelectorAll(".fade-right, .fade-left").forEach((el) => {
  observer.observe(el);
});

// scroll animation for third section

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer2.unobserve(entry.target); // animation triggers once
      }
    });
  },
  {
    threshold: 0.3,
  }
);

// Observe image
const image = document.querySelector(".variety-content-left img");
if (image) {
  observer2.observe(image);
}
// Observe title, paragraph, and button
document.querySelectorAll(".anim2").forEach((el) => {
  setTimeout(() => {
    observer2.observe(el);
  }, 800);
});

// scroll animation on section 4
const observerProcess = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("box-anima");
        observerProcess.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

document.querySelectorAll(".process-box").forEach((box) => {
  observerProcess.observe(box);
});

// scroll animation on section 5(chef section)
const observechef = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observechef.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

document.querySelectorAll(".chef-trans").forEach((el) => {
  observechef.observe(el);
});

//for chef image
const observechefimg = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observechefimg.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

document.querySelectorAll(".chef-img-trans").forEach((el) => {
  observechefimg.observe(el);
});
