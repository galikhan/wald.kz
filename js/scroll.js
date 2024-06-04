let itemH = "Месторождения";
$(".nav-link").click(function () {
  itemH = $(this).attr("id");
  if (itemH == "pills-home-tab") {
    itemH = "Месторождения";
  } else if (itemH == "pills-profile-tab") {
    itemH = "Образование";
  } else {
    itemH = "Девелопмент и стратегический консалтинг";
  }
  console.log(itemH);
});

$(document).ready(function () {
  $(window).scroll(function () {
    let homeTab = $("#pills-home-tab");
    // let profileTab = $("#pills-profile-tab");
    // let devTab = $("#pills-dev-tab");

    let homeTabTop = homeTab.offset().top;
    // let profileTabTop = profileTab.offset().top;
    // let devTabTop = devTab.offset().top;

    let homeTabBottom = homeTabTop + homeTab.outerHeight();
    // let profileTabBottom = profileTabTop + profileTab.outerHeight();
    // let devTabBottom = devTabTop + devTab.outerHeight();

    let scrollTop = $(window).scrollTop() + 50;
    let windowHeight = $(window).height();
    let scrollBottom = scrollTop + windowHeight;

    if (homeTabBottom <= scrollTop || homeTabTop >= scrollBottom) {
      $(".new-element").text(itemH).show();
    }
    // else if (profileTabBottom <= scrollTop || profileTabTop >= scrollBottom) {
    //   $(".new-element").text("Образование").show();
    // } else if (devTabBottom <= scrollTop || devTabTop >= scrollBottom) {
    //   $(".new-element").text("Девелопмент и стратегический консалтинг").show();
    // }
    else {
      $(".new-element").hide();
    }
  });
});

// $(document).ready(function () {
//   $(window).scroll(function () {
//     var locationTop = $("#pills-home-tab").offset().top;
//     var educationTop = $("#pills-profile-tab").offset().top;
//     var scrollTop = $(window).scrollTop();
//     var windowHeight = $(window).height();

//     if (
//       (educationTop <= scrollTop + windowHeight && educationTop >= scrollTop) ||
//       (locationTop <= scrollTop + windowHeight && locationTop >= scrollTop)
//     ) {
//       $(".new-element").hide();
//     } else {
//       $(".new-element").show();
//     }
//   });
// });

// $(document).ready(function () {
//   $(window).scroll(function () {
//     var homeTabTop = $("#pills-home-tab").offset().top;
//     var profileTabTop = $("#pills-profile-tab").offset().top;
//     var scrollTop = $(window).scrollTop();
//     var windowHeight = $(window).height();

//     // Check if home tab is not visible
//     if (homeTabTop <= scrollTop || homeTabTop >= scrollTop + windowHeight) {
//       $(".new-element").text("Месторождения").show();
//     } else if (
//       profileTabTop <= scrollTop ||
//       profileTabTop >= scrollTop + windowHeight
//     ) {
//       $(".new-element").text("Образование").show();
//     } else {
//       $(".new-element").hide();
//     }
//   });
// });

// $(document).ready(function () {
//   $(window).scroll(function () {
//     var homeTab = $("#pills-home-tab");
//     var profileTab = $("#pills-profile-tab");
//     var devTab = $("#pills-dev-tab");

//     var homeTabTop = homeTab.offset().top;
//     var profileTabTop = profileTab.offset().top;
//     var devTabTop = devTab.offset().top;

//     var homeTabBottom = homeTabTop + homeTab.outerHeight();
//     var profileTabBottom = profileTabTop + profileTab.outerHeight();
//     var devTabBottom = devTabTop + devTab.outerHeight();

//     var scrollTop = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     var scrollBottom = scrollTop + windowHeight;

//     if (
//       (homeTabBottom <= scrollTop || homeTabTop >= scrollBottom) &&
//       $("#pills-home-tab")
//     ) {
//       hiddenTabName = "Месторождения";
//     } else if (
//       (profileTabBottom <= scrollTop || profileTabTop >= scrollBottom) &&
//       $("#pills-profile-tab")
//     ) {
//       hiddenTabName = "Образование";
//     } else if (devTabBottom <= scrollTop || devTabTop >= scrollBottom) {
//       hiddenTabName = "Девелопмент и стратегический консалтинг";
//     }

//     if (hiddenTabName) {
//       $(".new-element").text(hiddenTabName).show();
//     } else {
//       $(".new-element").hide();
//     }
//   });
// });
