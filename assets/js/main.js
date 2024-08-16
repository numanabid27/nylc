/*================================================
Template name: Acnalys – Business Consulting - HTML Template
Version: 1.0.0
Author: Website_Stock 
Author url: https://themeforest.net/user/website_stock

[ Table of Contents ]

01: country select dropdown menu
02: main js
  2.1: progressbar
  2.2: sticky header activation
  2.3: Back to top button
  2.4: Swiper slider
    2.4.1: Slider 1
    2.4.2: Slider 2
    2.4.3: Slider 3
  2.5: Wow js
  2.6: Video play
  2.7: Preloader
  2.8: Counter up
  2.9: Title animation
  2.10: Responsive animation
  2.11: Grow animation
  2.12: Collapse
  2.13: Image slide
  2.14: Image parallax
  2.15: Side menu desktop
  2.16: Responsive menu
  2.17: Accordion

==================================================*/

/*================================================
01: country select dropdown menu
==================================================*/

if ($(".dropdown").length) {
  $(document).on("click", ".dropdown-menu .dropdown-item", function (e) {
    e.preventDefault();
    if (!$(this).hasClass("active")) {
      $(".dropdown-menu .dropdown-item").removeClass("active");
      $(this).addClass("active");
      var iconClass = $(this)[0].innerHTML;
      $(this).parents(".dropdown").find(".btn").html(iconClass);
    }
  });
}

/*================================================
02: main js
==================================================*/

(function ($) {
  "use strict";
  let device_width = window.innerWidth;
  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  gsap.registerPlugin(ScrollTrigger, SplitText);

  var rtsJs = {
    m: function (e) {
      rtsJs.d();
      rtsJs.methods();
    },
    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      rtsJs.stickyHeader();
      rtsJs.swiperActivation();
      rtsJs.wowActive();
      rtsJs.videoActivation();
      rtsJs.counterUp();
      rtsJs.title_animation();
      rtsJs.skew_up();
      rtsJs.gsapAnimationImageScale();
      rtsJs.feedbackCollupsShow();
      rtsJs.imageSlideGsap();
      rtsJs.imageParalax();
      rtsJs.sideMenu();
      rtsJs.metismenu();
      rtsJs.preloader();
      rtsJs.backToTopInit();
      rtsJs.circleAnimation();
      rtsJs.progressbar();
    },

/*================================================
2.1: progressbar
==================================================*/

    progressbar: function (e) {
      const progressBars = document.querySelectorAll(".progress-bar");

            function animateProgressBar(progressBar) {
                const percentage = progressBar.getAttribute("data-percentage");
                const progressContent = progressBar.querySelector(".progress-content");
                const progressNumberMark = progressBar.querySelector(".progress-number-mark");
                const percentText = progressNumberMark.querySelector(".percent");

                // Animate the width of the progress bar
                gsap.to(progressContent, {
                    width: percentage,
                    duration: 2
                });

                // Animate the position and text of the number mark
                gsap.to(progressNumberMark, {
                    left: percentage,
                    duration: 2,
                    onUpdate: function () {
                        const currentWidth = gsap.getProperty(progressContent, "width");
                        const totalWidth = gsap.getProperty(progressBar, "width");
                        const progress = Math.round((currentWidth / totalWidth) * 100);
                        percentText.innerHTML = progress + "%";
                    }
                });
                
                // Ensure the progress number mark is visible
                progressNumberMark.classList.remove("hidden");
            }

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateProgressBar(entry.target);
                        observer.unobserve(entry.target); // Optional: Stop observing once animated
                    }
                });
            }, { threshold: 0.5 });

            progressBars.forEach(progressBar => {
                observer.observe(progressBar);
            });
    },

/*================================================
2.2: sticky header activation
==================================================*/
    
    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
          $(".header--sticky").addClass("sticky");
        } else {
          $(".header--sticky").removeClass("sticky");
        }
      });
    },

/*================================================
2.3: Back to top button
==================================================*/
    
    backToTopInit: function () {
      $(document).ready(function () {
        "use strict";

        var progressPath = document.querySelector(".progress-wrap path");
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition =
          "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition =
          "stroke-dashoffset 10ms linear";
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength) / height;
          progressPath.style.strokeDashoffset = progress;
        };
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on("scroll", function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery(".progress-wrap").addClass("active-progress");
            jQuery(".rts-switcher").addClass("btt__visible");
          } else {
            jQuery(".progress-wrap").removeClass("active-progress");
            jQuery(".rts-switcher").removeClass("btt__visible");
          }
        });
        jQuery(".progress-wrap").on("click", function (event) {
          event.preventDefault();
          jQuery("html, body").animate({ scrollTop: 0 }, duration);
          return false;
        });
      });
    },

/*================================================
2.4: Swiper slider
==================================================*/
// 2.4.1: Slider 1
    swiperActivation: function () {
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-brand-1", {
          slidesPerView: 5,
          spaceBetween: 30,
          slidesPerGroup: 1,
          speed: 1000,
          loop: true,
          loopFillGroupWithBlank: true,
          centeredSlides: false,
          breakpoints: {
            1200: {
              slidesPerView: 5
            },
            900: {
              slidesPerView: 5
            },
            768: {
              slidesPerView: 3
            },
            580: {
              slidesPerView: 2
            },
            0: {
              slidesPerView: 2
            }
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          }
        });
      });

// 2.4.2: Slider 2
      $(document).ready(function () {
        var swiper = new Swiper(".client-slider", {
          slidesPerView: 2,
          spaceBetween: 20,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: true
          },
          breakpoints: {
            1200: {
              slidesPerView: 2
            },
            769: {
              slidesPerView: 2
            },
            580: {
              slidesPerView: 1
            },
            0: {
              slidesPerView: 1
            }
          }
        });
      });

// 2.4.3: Slider 3
      $(document).ready(function () {
        var swiper = new Swiper(".banner-slider", {
          slidesPerView: 1,
          spaceBetween: 20,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: true
          }
        });
      });

// 2.4.3: Slider 4
      $(document).ready(function () {
        var swiper = new Swiper(".client-say", {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: true
          }
        });
      });
    },

/*================================================
2.5: Wow js
==================================================*/
    wowActive: function () {
      new WOW().init();
    },

/*================================================
2.6: Video play
==================================================*/
    videoActivation: function (e) {
      $(document).ready(function () {
        $(".popup-youtube, .popup-video").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      });
    },
    
/*================================================
2.7: Preloader
==================================================*/
    preloader: function () {
      $(window).on("load", function () {
        $(".loader-wrapper").fadeOut();
      });
    },

/*================================================
2.8: Counter up
==================================================*/
    counterUp: function (e) {
      $(".counter").counterUp({
        delay: 10,
        time: 1000
      });
      $(".counter").addClass("animated fadeInDownBig");
      $("h3").addClass("animated fadeIn");
    },

/*================================================
2.9: Title animation
==================================================*/
    title_animation: function () {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(SplitText);
      if (window.innerWidth > 768) {
        $(document).ready(function () {
          let addAnimation = function () {
            $(".split-collab").each(function (index) {
              const textInstance = $(this);
              const text = new SplitText(textInstance, {
                type: "chars"
              });

              let letters = text.chars;

              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: textInstance,
                  start: "top 85%",
                  end: "top 85%",
                  onComplete: function () {
                    textInstance.removeClass(".split-collab");
                  }
                }
              });

              tl.set(textInstance, { opacity: 1 }).from(letters, {
                duration: 0.5,
                autoAlpha: 0,
                x: 50,
                scaleY: 0,
                skewX: 50,
                stagger: { amount: 1 },
                ease: "back.out(1)"
              });
            });
          };

          addAnimation();

          window.addEventListener("resize", function (event) {
            if ($(window).width() >= 992) {
              addAnimation();
            }
          });
        });
      }
    },

/*================================================
2.10: Responsive animation
==================================================*/
    skew_up: function () {
      gsap.registerPlugin(SplitText);
      if (window.innerWidth > 768) {
        $(document).ready(function () {
          let addAnimation = function () {
            $(".skew-up").each(function (index) {
              const text = new SplitType($(this), {
                types: "lines, words",
                lineClass: "word-line"
              });
              let textInstance = $(this);
              let line = textInstance.find(".word-line");
              let word = line.find(".word");
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: textInstance,
                  start: "top 85%",
                  end: "top 85%",
                  onComplete: function () {
                    $(textInstance).removeClass("skew-up");
                  }
                }
              });
              tl.set(textInstance, { opacity: 1 }).from(word, {
                y: "100%",
                skewX: "-5",
                duration: 2,
                stagger: 0.09,
                ease: "expo.out"
              });
            });
          };
          addAnimation();
          window.addEventListener("resize", function (event) {
            if ($(window).width() >= 992) {
              addAnimation();
            }
          });
        });
      }

      if (window.innerWidth > 768) {
        $(document).ready(function () {
          let addAnimation = function () {
            $(".skew-up-2").each(function (index) {
              const textInstance = $(this);
              const text = new SplitText(textInstance, {
                type: "chars"
              });

              let letters = text.chars;

              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: textInstance,
                  start: "top 85%",
                  end: "top 85%",
                  onComplete: function () {
                    textInstance.removeClass("skew-up-2");
                  }
                }
              });

              tl.set(textInstance, { opacity: 1 }).from(letters, {
                duration: 0.4,
                autoAlpha: 0,
                y: 50,
                // scaleX: 0,
                // skewX: 50,
                stagger: { amount: 1 },
                ease: "back.out(0)"
              });
            });
          };

          addAnimation();

          window.addEventListener("resize", function (event) {
            if ($(window).width() >= 992) {
              addAnimation();
            }
          });
        });
      }
    },

/*================================================
2.11: Grow animation
==================================================*/
    gsapAnimationImageScale: function (e) {
      $(document).ready(function () {
        let growActive = document.getElementsByClassName("grow");
        if (growActive.length) {
          const growTl = gsap.timeline({
            scrollTrigger: {
              trigger: ".grow",
              scrub: 1,
              start: "top center",
              end: "+=1000",
              ease: "power1.out"
            }
          });
          growTl.to(".grow", {
            duration: 1,
            scale: 1
          });
        }
      });
    },

/*================================================
2.12: Collapse
==================================================*/
    feedbackCollupsShow: function () {
      // feedback button click show start
      document.addEventListener("DOMContentLoaded", function () {
        var rtsBtn = document.querySelector(".button-area-box-shadow .rts-btn");
        var overlaySection = document.querySelector(".overlay-bottom-section");
        var isToggled = false;

        if (rtsBtn && overlaySection) {
          rtsBtn.addEventListener("click", function () {
            if (!isToggled) {
              // Change margin of .rts-btn
              rtsBtn.style.margin = "0px auto 0 auto";
              rtsBtn.innerHTML = "View less feedbacks";
              // Remove the overlay-bottom-section class
              overlaySection.classList.remove("overlay-bottom-section");
            } else {
              // Revert margin of .rts-btn
              rtsBtn.style.margin = "";
              rtsBtn.innerHTML = "View all feedbacks";

              // Add the overlay-bottom-section class back
              overlaySection.classList.add("overlay-bottom-section");
            }

            // Toggle the state
            isToggled = !isToggled;
          });
        }
      });
      // feedback button click show End
    },


/*================================================
2.13: Image slide
==================================================*/
    imageSlideGsap: function () {
      gsap.to(".images", {
        scrollTrigger: {
          // trigger: ".images",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
          // markers: true
        },
        x: 330
      });
      gsap.to(".images-2", {
        scrollTrigger: {
          // trigger: ".images",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
          // markers: truesw
        },
        y: 330
      });
    },

/*================================================
2.14: Image parallax
==================================================*/
    imageParalax: function () {
      $(document).ready(function () {
        let paralax = document.getElementsByClassName("anim-image-parallax");
        if (paralax.length) {
          $(".anim-image-parallax").each(function () {
            // Add wrap <div>.
            $(this).wrap(
              '<div class="anim-image-parallax-wrap"><div class="anim-image-parallax-inner"></div></div>'
            );

            // Add overflow hidden.
            $(".anim-image-parallax-wrap").css({
              overflow: "hidden"
            });

            var $animImageParallax = $(this);
            var $aipWrap = $animImageParallax.parents(
              ".anim-image-parallax-wrap"
            );
            var $aipInner = $aipWrap.find(".anim-image-parallax-inner");

            // Parallax
            gsap.to($animImageParallax, {
              yPercent: 80,
              ease: "none",
              scrollTrigger: {
                trigger: $aipWrap,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                markers: false
              }
            });

            // Zoom in
            let tl_aipZoomIn = gsap.timeline({
              scrollTrigger: {
                trigger: $aipWrap,
                start: "top 90%",
                markers: false
              }
            });
            tl_aipZoomIn.from($aipInner, {
              duration: 1.5,
              autoAlpha: 0,
              scale: 1.4,
              ease: Power2.easeOut,
              clearProps: "all"
            });
          });
        }
      });

      $(document).ready(function () {
        let paralax = document.getElementsByClassName("anim-image-parallax-2");
        if (paralax.length) {
          $(".anim-image-parallax-2").each(function () {
            // Add wrap <div>.
            $(this).wrap(
              '<div class="anim-image-parallax-wrap"><div class="anim-image-parallax-inner"></div></div>'
            );

            // Add overflow hidden.
            $(".anim-image-parallax-wrap").css({
              overflow: "hidden"
            });
            var $animImageParallax = $(this);
            var $aipWrap = $animImageParallax.parents(
              ".anim-image-parallax-wrap"
            );
            var $aipInner = $aipWrap.find(".anim-image-parallax-inner");

            // Parallax
            gsap.to($animImageParallax, {
              yPercent: 20,
              ease: "none",
              scrollTrigger: {
                trigger: $aipWrap,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                markers: false
              }
            });

            // Zoom in
            let tl_aipZoomIn = gsap.timeline({
              scrollTrigger: {
                trigger: $aipWrap,
                start: "top 90%",
                markers: false
              }
            });
            tl_aipZoomIn.from($aipInner, {
              duration: 1.5,
              autoAlpha: 0,
              scale: 1.4,
              ease: Power2.easeOut,
              clearProps: "all"
            });
          });
        }
      });
    },

/*================================================
2.15: Side menu desktop
==================================================*/
    // side menu desktop
    sideMenu: function () {
      $(document).on("click", "#menu-btn", function () {
        $("#side-bar").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on("click", ".close-icon-menu", function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on("click", "#anywhere-home", function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on("click", ".onepage .mainmenu li a", function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
    },

/*================================================
2.16: Responsive menu
==================================================*/
    metismenu: function () {
      $("#mobile-menu-active").metisMenu();
    },

    // circle animation
    circleAnimation: function () {
      gsap.config({ trialWarn: false });
      // console.clear();

      const target = document.querySelector("#dotted");

      const tl = gsap.from(target, {
        strokeDashoffset: 300,
        repeat: -1,
        ease: "none",
        duration: 5
      });
    }
  };
  rtsJs.m();

/*================================================
2.17: Accordion
==================================================*/
  $(document).ready(function () {
    // Listen for the collapse show event
    $(".working-process-accordion-one .accordion-collapse").on(
      "show.bs.collapse",
      function () {
        // Find the parent .accordion-item and add the 'show' class
        $(this).closest(".accordion-item").addClass("show");
      }
    );

    // Listen for the collapse hide event
    $(".working-process-accordion-one .accordion-collapse").on(
      "hide.bs.collapse",
      function () {
        // Find the parent .accordion-item and remove the 'show' class
        $(this).closest(".accordion-item").removeClass("show");
      }
    );
    // THEME MODE SWITCHER JS
    var rts_light = $(".rts-dark-light");
    if (rts_light.length) {
      var toggle = document.getElementById("rts-data-toggle");
      var storedTheme =
        localStorage.getItem("fluxi-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");
      if (storedTheme)
        document.documentElement.setAttribute("data-theme", storedTheme);
      toggle.onclick = function () {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var targetTheme = "light";

        if (currentTheme === "light") {
          targetTheme = "dark";
        }
        document.documentElement.setAttribute("data-theme", targetTheme);
        localStorage.setItem("fluxi-theme", targetTheme);
      };
    }
  });
})(jQuery, window);

// whatsapp
$(document).on("click", "#send-it", function () {
  var a = document.getElementById("chat-input");
  if ("" != a.value) {
    var b = $("#get-number").text(),
      c = document.getElementById("chat-input").value,
      d = "https://wa.me/+4412458797",
      e = b,
      f = "&text=" + c;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      var d = "whatsapp://send";
    var g = d + "?phone=+31 6 29320129" + e + f;
    window.open(g, "_blank");
  }
}),
  $(document).on("click", ".informasi", function () {
    (document.getElementById("get-number").innerHTML = $(this)
      .children(".my-number")
      .text()),
      $(".start-chat,.get-new")
        .addClass("show")
        .removeClass("hide"),
      $(".home-chat,.head-home")
        .addClass("hide")
        .removeClass("show"),
      (document.getElementById("get-nama").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-nama")
        .text()),
      (document.getElementById("get-label").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-label")
        .text());
  }),
  $(document).on("click", ".close-chat", function () {
    $("#whatsapp-chat")
      .addClass("hide")
      .removeClass("show");
  }),
  $(document).load(".blantershow-chat", function () {
    setTimeout(()=>{
      $("#whatsapp-chat").addClass("show").removeClass("hide");
    }, 1000)
    
  });

  $(document).on("click", ".blantershow-chat", function () {
    $("#whatsapp-chat").addClass("show");
    
  });

  // side panel for calling purpose
  const custom_calling =  document.getElementById("customCalling");
  const toggleSideBar = document.getElementById("customCalling_backDrop");
  const closeToggle = document.getElementById("closCalling");
  const return_page = document.getElementById("return_page");
  custom_calling.addEventListener('click', function(){
    toggleSideBar.classList.add("showCalling")
  });
  closeToggle.addEventListener("click", function(){
    toggleSideBar.classList.remove('showCalling')
  });
  return_page.addEventListener("click", function(){
    toggleSideBar.classList.remove('showCalling');
    document.getElementById("form_2").style.display = "none";
    document.getElementById("form_1").style.display = "block";
    window.location.reload();
  });

  // phone
  document.addEventListener("DOMContentLoaded", function () {
    const phoneInputFields = ["#phone"];
    phoneInputFields.forEach(function (selector) {
      const phoneInputField = document.querySelector(selector);
      if (phoneInputField) {
        const phoneInput = window.intlTelInput(phoneInputField, {
          utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
          initialCountry: "auto",
          geoIpLookup: function (callback) {
            fetch('https://ipinfo.io?token=<your-token-here>', { headers: { 'Accept': 'application/json' } })
              .then(response => response.json())
              .then(data => {
                const countryCode = (data && data.country) ? data.country : "us";
                callback(countryCode);
              })
              .catch(() => callback("us"));
          },
          placeholderNumberType: "MOBILE",
          separateDialCode: true, 
        });
        phoneInputField.value = ""; 
      }
    });
  });
  

  function moveToNext(current, nextFieldId) {
    if (current.value.length >= current.maxLength) {
      document.getElementById(nextFieldId).focus();
    }
  }

  // validation

  const form = document.getElementById("formSubmit");
  const firstView = document.getElementById("form_1");

  // Get the input fields and error elements
  const fullNameInput = document.getElementById("fullName");
  const choiceSelect = document.getElementById("choice");
  
  const fullNameError = document.getElementById("fullNameError");
  const choiceError = document.getElementById("choiceError");
  const tellError = document.getElementById("tellError");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
 
    let fullName = fullNameInput.value.trim();
    let choice = choiceSelect.value;
    let areaCode = document.getElementById("area-code").value.trim();
    let number = document.getElementById("number").value.trim();

    fullNameError.textContent = "";
    choiceError.textContent = "";
    tellError.textContent = "";
  
    let hasError = false;
  
    if (fullName === "") {
      fullNameError.textContent = "Please enter your full name.";
      hasError = true;
    }

    if (choice === "") {
      choiceError.textContent = "Please make a choice.";
      hasError = true;
    }

    if (areaCode.length !== 3 || number.length !== 7) {
      tellError.textContent = "Please enter a valid area code and phone number.";
      hasError = true;
    }
  
    if (!hasError) {
      const message = `choice: ${choice} \nArea Code: ${areaCode}\nPhone Number: ${number}`;
      alert(message);
      firstView.style.display = "none"
      document.getElementById("form_2").style.display = "block"
    }
  });
  
  // Event listeners for real-time validation
  fullNameInput.addEventListener("input", function() {
    if (fullNameInput.value.trim() !== "") {
      fullNameError.textContent = "";
    }
  });
  
  choiceSelect.addEventListener("change", function() {
    if (choiceSelect.value !== "") {
      choiceError.textContent = "";
    }
  });
  
  
  document.querySelectorAll("#area-code, #number").forEach(function(input) {
    input.addEventListener("input", function() {
      const areaCode = document.getElementById("area-code").value.trim();
      const number = document.getElementById("number").value.trim();
      
      if (areaCode.length === 3 && number.length === 7) {
        document.getElementById("tellError").textContent = "";
      }
    });
  });