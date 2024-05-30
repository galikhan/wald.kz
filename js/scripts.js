/*!
 * Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
 */
window.addEventListener("DOMContentLoaded", (event) => {
  const sidebarWrapper = document.getElementById("sidebar-wrapper");
  let scrollToTopVisible = false;
  // Closes the sidebar menu
  const menuToggle = document.body.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", (event) => {
    event.preventDefault();
    sidebarWrapper.classList.toggle("active");
    _toggleMenuIcon();
    menuToggle.classList.toggle("active");
  });

  const mainMenuToggle = document.body.querySelector(".main-menu-toggle");
  mainMenuToggle.addEventListener("click", (event) => {
    event.preventDefault();
    sidebarWrapper.classList.toggle("active");
    _toggleMenuIcon();
    menuToggle.classList.toggle("active");
  });

  // Closes responsive menu when a scroll trigger link is clicked
  var scrollTriggerList = [].slice.call(
    document.querySelectorAll("#sidebar-wrapper .js-scroll-trigger")
  );
  scrollTriggerList.map((scrollTrigger) => {
    scrollTrigger.addEventListener("click", () => {
      sidebarWrapper.classList.remove("active");
      menuToggle.classList.remove("active");
      _toggleMenuIcon();
    });
  });

  function _toggleMenuIcon() {
    const menuToggleBars = document.body.querySelector(
      ".menu-toggle > .fa-bars"
    );
    const menuToggleTimes = document.body.querySelector(
      ".menu-toggle > .fa-xmark"
    );
    if (menuToggleBars) {
      menuToggleBars.classList.remove("fa-bars");
      menuToggleBars.classList.add("fa-xmark");
    }
    if (menuToggleTimes) {
      menuToggleTimes.classList.remove("fa-xmark");
      menuToggleTimes.classList.add("fa-bars");
    }
  }

  // Scroll to top button appear
  // document.addEventListener("scroll", () => {
  //   const scrollToTop = document.body.querySelector(".scroll-to-top");
  //   if (document.documentElement.scrollTop > 100) {
  //     if (!scrollToTopVisible) {
  //       fadeIn(scrollToTop);
  //       scrollToTopVisible = true;
  //     }
  //   } else {
  //     if (scrollToTopVisible) {
  //       fadeOut(scrollToTop);
  //       scrollToTopVisible = false;
  //     }
  //   }
  // });
});

function fadeOut(el) {
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";
  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

function openNav() {
  document.getElementById("myNav").style.width = "30%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function closeModal(modal, span) {
  modal.style.display = "none";
}

function displayModal(modal, span, index) {
  modal.style.display = "block";
  span.onclick = function () {
    closeModal(modal, span);
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal(modal, span);
    }
  };
}

const jsonInfo = {
  karagandaMed: {
    title: "Месторождение медно-порфирового типа в Карагандинской области. ",
    recource:
      "Прогнозные ресурсы по категории Р1 в количестве: меди – 426 тыс. т при среднем содержании 0,28%, золота – 3 040,7 кг при среднем содержании 1,62 г/т",
  },

  karagandaPoly: {
    title: "Месторождение полиметаллического типа в Карагандинской области.",
    recource:
      "прогнозные ресурсы по категории Р2, в количестве: медь – 14 956 тонн, при среднем содержании 0,2%. Золото Р1 – 1 тонна, при среднем содержании 0,47-7,53 г/т. Серебро - Р1 20 тонн, при среднем содержании 193 г/т, молибден Р1 – 20 тонн, при среднем содержании 0,0006-0,031%.",
  },
  karandaPorf: {
    title: "Месторождение медно-порфирового типа в Карагандинской области.",
    recource:
      "Прогнозные ресурсы по категории Р3 в количестве: меди – 918 489 тонн, при среднем содержании 0,3%, золота – 14 606 тонн, при среднем содержании 0,2-1 г/т, молибдена – 11 450 тонн, при среднем содержании 0,006%.",
  },

  abayGold: {
    title: "Месторождение золоторудного типа в Абайской области.",
    recource:
      "Прогнозные ресурсы по категории Р1 в количестве: золота – 200 кг, при среднем содержании 6,4 г/т.",
  },

  pavlodarGold: {
    title: "Месторождение золоторудного типа в Павлодарской области.",
    recource:
      "Прогнозные ресурсы не подсчитывались. Среднее содержания золота 4 г/т.",
  },

  pavlodarPoly: {
    title: "Месторождение полиметаллического типа в Павлодарской области.",
    recource:
      " Прогнозные ресурсы не подсчитывались. Средние содержания по меди – 0,42-1,14%, золото – 0,6-1 г/т, серебро – 27,1 г/т, цинк – до 1,2%.",
  },

  pavlodarGold2: {
    title: "Месторождение золоторудного типа в Павлодарской области.",
    recource:
      "Прогнозные ресурсы по категории Р3 в количестве: золота – 37 тонн, при среднем содержании 4 г/т.",
  },
};

function setMapInfo(info) {
  var targetId = info.target.id;
  // var parsedData = JSON.parse(jsonInfo);
  // console.log('jsonInfo', jsonInfo);
  const data = jsonInfo[targetId];
  console.log("data", targetId, data);
  document.getElementById("map-info-title").innerHTML = data.title;
  document.getElementById("map-info-recource").innerHTML = data.recource;
}

const markers = document.getElementsByClassName("marker");

for (var i = 0; i < markers.length; i++) {
  markers[i].addEventListener("click", setMapInfo);
}
