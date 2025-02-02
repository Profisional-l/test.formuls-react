export function isMobile() {
    var userAgent = navigator.userAgent.toLowerCase();
    var isAndroid = userAgent.indexOf("formulsandroiduseragent") !== -1;
  
    // var isAndroid = true;
  
    if (
      isAndroid ||
      userAgent.includes("telegram") ||
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    ) {
      var godownloadElement = document.querySelector(".godownload");
      var buttoappfooter = document.querySelector(".buttoappfooter");
      var tocalcbut = document.querySelector(".tocalcbut");
      let LogoName = document.querySelector(".logo");
      let LogoIMG = document.querySelector(".logoIMG");
      var linktoHOWwork = document.querySelector(".linkFromMain");
      let mainscreenhi = document.querySelector(".mainscreenhi");
      let mainscreenh2 = document.querySelector(".mainscreenh2");
      let mainscreenhiH3 = document.querySelector(".mainscreenhi h3");
      let categoriesfield = document.getElementById("categoriesfield");
      let footer = document.querySelector("footer");
      let maintextHI = document.querySelectorAll(".textonmain");
      let selectIT = document.getElementById("selectIT");
      let switcherTheme = document.querySelector(".switch");
  
      // Установка стилей, в зависимости от текущего пути
    //   if (
    //     document.location.pathname === "https://formuls.xyz/" ||
    //     document.location.pathname === "/" ||
    //     document.location.pathname === "https://formuls.xyz"
    //   ) {
    //     switcherTheme.style.marginTop = "55px";
    //   } else {
    //     switcherTheme.style.display = "none";
    //   }
  
      if (footer) {
        footer.style.display = "none";
      }
  
      if (
        mainscreenh2 &&
        !document.location.pathname.includes("allformuls") &&
        !document.location.pathname.includes("aboutai")
      ) {
        mainscreenh2.style.display = "none";
        if (mainscreenhiH3) {
            mainscreenhi.style.marginTop = "35px";
          mainscreenhiH3.style.display = "none";
        }
        maintextHI.forEach(function (e) {
          e.style.display = "none";
        });
      }
  
      if (categoriesfield) {
        categoriesfield.style.display = "none";
        selectIT.style.display = "none";
      }
  
      if (linktoHOWwork) {
        linktoHOWwork.style.display = "none";
      }
  
      // Изменение логотипа
      function changeLogoType() {
        LogoName.classList.add("changeLOGOout");
        LogoIMG.classList.add("changeLOGOin");
      }
      changeLogoType();
  
      if (godownloadElement) {
        godownloadElement.style.display = "none";
        if (buttoappfooter) {
          buttoappfooter.style.display = "none";
        }
      }
    }
  }
  