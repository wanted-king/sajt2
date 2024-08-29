const navBarContent = {
    "en": {
      "kontaktText":"Contact",
      "prednostText":"Our Benefits",
      "oNamaText":"About Us",
      "uslugeText":"Services",
      "projektiText":"Projects",
      "jezikText":"Jezik",
      "dobrodosliText":"Welcome!",
      "naslovGlavniText":"We create modern & functional digital solutions for your business",
      "glavnoDugmeText":"Go digital!"
    },
    "sr": {
      "kontaktText":"Kontakt",
      "prednostText":"Naše Prednosti",
      "oNamaText":"O Nama",
      "uslugeText":"Usluge",
      "projektiText":"Projekti",
      "jezikText":"Language",
      "dobrodosliText":"Dobrodošli!",
      "naslovGlavniText":"Kreiramo moderna & funkcionalna digitalna rešenja za Vaš biznis",
      "glavnoDugmeText":"Digitalizujte se!"
    }
  };
  
  const footerContent = {
    "en": {
      "":"",
      "":"",
      "":"",
      "":"",
      "":"",
      "":"",
    },
    "sr": {
    }
  };
  
  const contactPageContent = {
    "en": {
      "":"",
      "":"",
      "":"",
      "":"",
      "":"",
      "":"",
    },
    "sr": {
    }
  };
  
  const mainPageContent = {
    "en": {
      "":"",
      "":"",
      "":"",
      "":"",
      "":"",
      "":"",
    },
    "sr": {
    }
  };

  const mainPageContent2 = {
    "en": {
       
    },
    "sr": {
     
    }
  };

  function switchLang(lang) {
    const combinedContent = {
      ...navBarContent[lang],
      ...footerContent[lang],
      ...contactPageContent[lang],
      ...mainPageContent[lang],
      ...mainPageContent2[lang]
    };
    
    for (let key in combinedContent) {
      let element = document.getElementById(key);
      if (element) {
        element.innerHTML = combinedContent[key];
      }
    }
    localStorage.setItem('selectedLanguage', lang);
  }
  
  window.onload = function() {
    let selectedLanguage = localStorage.getItem('selectedLanguage');
    // if (selectedLanguage) {
    //   switchLang(selectedLanguage);
    // }
    if (selectedLanguage) {
      switchLang(selectedLanguage);
    } else {
      switchLang('sr');  // Set Serbian as the default language if none is selected
    }
  };
  
  