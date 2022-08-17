let navbarHeight = $("header").get(0).scrollHeight;

function untukTagLink() {
  if (localStorage.getItem("tema") == "dark") {
    $(".nav-brand h1").css("color", "white");
    $(".nav-item ul li a").css("color", "white");
    $(".burger-menu span").css("background-color", "white");
  } else {
    $(".nav-brand h1").css("color", "black");
    $(".nav-item ul li a").css("color", "black");
    $(".burger-menu span").css("background-color", "black");
  }
}

window.addEventListener("scroll", () => {
  if ($(window).scrollTop() >= navbarHeight - 40) {
    $("header").addClass("bro");
    $(".nav-brand h1").css("color", "white");
    $(".nav-item ul li a").css("color", "white");
    $(".burger-menu span").css("background-color", "white");
  } else {
    $("header").removeClass("bro");
    untukTagLink();
  }
});

function darkMode() {
  $("body").css("background-color", "#434343");
  $(".nav-brand h1").css("color", "white");
  $(".darkMode").html('<span class="iconify" data-icon="akar-icons:sun-fill"></span>');

  $("h4").css("color", "white");
  $("p").css("color", "white");
  $("div.icon").css("background-color", "white");
  $(".burger-menu span").css("background-color", "white");
}

function lightMode() {
  $(".darkMode").html('<span class="iconify" data-icon="bi:moon-stars-fill"></span>');
  $("body").css("background-color", "white");
  $("p").css("color", "black");
  $("h4").css("color", "black");
  $(".top p").css("color", "white");
  $(".bottom p").css("color", "white");
  $("div.icon").css("background-color", "white");
  $(".nav-brand h1").css("color", "black");
  $(".nav-item ul li a").css("color", "black");
  $(".burger-menu span").css("background-color", "black");
}

function toggleTheme() {
  if (localStorage.getItem("tema") == "dark") {
    localStorage.setItem("tema", "light");
    lightMode();
    untukTagLink();
  } else {
    localStorage.setItem("tema", "dark");
    darkMode();
  }
}

$(".darkMode").click(toggleTheme);

if (localStorage.getItem("tema") === null || localStorage.getItem("tema") === "light") {
  localStorage.setItem("tema", "light");
  lightMode();
  untukTagLink();
} else {
  localStorage.setItem("tema", "dark");
  darkMode();
}

$("#kirimPertanyaan").click(function () {
  if ($(".right input").val() != "" && $(".right textarea").val() != "") {
    Swal.fire({
      title: "Pertanyaan anda telah kami simpan!",
      icon: "success",
      confirmButtonText: "Siap",
    });
    // alert("ok");
  }
});

let hai = $(".nav-item-mobile").get(0).scrollWidth;
// alert(hai);
$(".nav-item-mobile").css(`transform`, `translateX(${hai}px)`);

$(".burger-menu").click(function () {
  $(".nav-item-mobile").css(`transform`, `translateX(0px)`);
});

$(".nav-item-mobile span").click(function () {
  $(".nav-item-mobile").css(`transform`, `translateX(${hai}px)`);
});
