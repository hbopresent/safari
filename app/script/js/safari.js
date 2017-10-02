(function() {
  // header of safari
  var safariHeaderUrl = document.getElementById("safariHeaderUrl");
  var safariHeaderUrlAdr = document.getElementById("safariHeaderUrlAdr");
  var safariHeaderUrlSvg = document.getElementById("safariHeaderUrlSvg");
  var safariHeaderProgressBar = document.getElementById("safariHeaderProgressBar");
  // google logo
  var safariChrome = document.getElementById("safariChrome");
  var safariMainLogo = document.getElementById("safariMainLogo");
  // search bar
  var safariPageSearchBar = document.getElementById("safariPageSearchBar");
  var safariPageSearchIcon = document.getElementById("safariPageSearchIcon");
  var safariSearchIconGlass = document.getElementById("safariSearchIconGlass");
  var safariSearchIconHand = document.getElementById("safariSearchIconHand");
  // header of main page
  var safariPageHeaderLeft = document.getElementById("safariPageHeaderLeft");
  var safariPageHeaderRight = document.getElementById("safariPageHeaderRight");
  // footer buttons
  var safariPreviousSvg = document.getElementById("safariPreviousSvg");
  var safariNextSvg = document.getElementById("safariNextSvg");
  var safariShareSvg = document.getElementById("safariShareSvg");
  var safariBookmarkSvg = document.getElementById("safariBookmarkSvg");
  var safariSwitchPageSvg = document.getElementById("safariSwitchPageSvg");


  safariHeaderUrl.addEventListener("animationend", playTypingUrlAnimation);
  safariHeaderUrlAdr.addEventListener("animationend", playProgressBarAnimation);
  safariSwitchPageSvg.addEventListener("animationend", playSearchBarAnimation);

  function playUrlAnimation() {
    safariHeaderUrl.style.animation = "showHeaderUrl 0.7s ease forwards";
  }

  function playTypingUrlAnimation(e) {
    if(e.animationName == "showHeaderUrl") {
      safariHeaderUrlAdr.style.animation = "showURL 1.5s 0.2s steps(80) forwards, blinkCursor 0.9s 0.2s steps(20) infinite";
      setTimeout(function() {
        safariHeaderUrl.style.justifyContent = "center";
        safariHeaderUrlSvg.style.display = "block";
        safariHeaderUrlAdr.style.border = "none";
      }, 1800);
    }
  }

  function playProgressBarAnimation(e) {
    if(e.animationName == "showURL") {
      safariHeaderProgressBar.style.animation = "progressBarLoading1 2.3s ease-out forwards, progressBarLoading2 0.3s 3s ease forwards";
      playButtonsRepresentation();
      setTimeout(function() {
        safariHeaderProgressBar.style.opacity = 0;
      }, 3300);
    }
  }

  function playButtonsRepresentation() {
    safariPageHeaderLeft.style.animation = "showPageContentHeader 0.2s 0.1s ease forwards";
    safariPageHeaderRight.style.animation = "showPageContentHeader 0.2s 0.1s ease forwards";

    setTimeout(function() {
      safariPreviousSvg.style.animation = "showFooterSvg 0.3s linear forwards";
      safariNextSvg.style.animation = "showFooterSvg 0.3s 0.05s linear forwards";
      safariShareSvg.style.animation = "showFooterSvg 0.3s 0.1s linear forwards";
      safariBookmarkSvg.style.animation = "showFooterSvg 0.3s 0.15s linear forwards";
      safariSwitchPageSvg.style.animation = "showFooterSvg 0.3s 0.2s linear forwards";
    }, 500);
  }

  function playSearchBarAnimation(e) {
    if(e.animationName == "showFooterSvg") {
      safariPageSearchBar.style.animation = "showSearchBar 0.3s ease forwards";
      safariPageSearchIcon.style.animation = "showSearchIcon 0.2s 0.4s ease forwards";
      safariSearchIconGlass.style.opacity = 1;
      safariSearchIconHand.style.opacity = 1;

      setTimeout(function() {
        playChromeAnimation();
      }, 500);
    }
  }

  function playChromeAnimation() {
    safariChrome.style.animation = "rotateChrome 0.85s linear infinite, movingChrome 2s linear forwards";
    safariMainLogo.style.animation = "showGoogleWord 1.8s 0.85s linear forwards";
  }


  playUrlAnimation();
}(window));
