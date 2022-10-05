let authRes=false;

function auth({url, login, pass, theme}) {

    console.log('mimio');
    return authRes;
}
let datal = {}
let data = {
    "colors": {
      "primary": {
        "main": "#30AAD9",
        "light": "#D2EFFB",
        "dark": "#002884",
        "contrastText": "#fff"
      },
      "secondary": {
        "main": "#4badd4"
      },
      "error": {
        "main": "#f57c00"
      },
      "warning": {
        "main": "#ffa726"
      },
      "info": {
        "main": "#335df4"
      },
      "success": {
        "main": "#559B27"
      }
    },
    "company_name": "Navigine",
    "images": {
      "favicon": "https://static.navigine.com/themes/prod/favicon.ico",
      "logo_mini": "https://static.navigine.com/themes/prod/logo_mini.svg",
      "logo": "https://static.navigine.com/themes/prod/logo.svg"
    },
    "resources": {
      "webpage": "https://navigine.com/blog",
      "facebook": "https://www.facebook.com/navigine",
      "linkedin": "http://www.linkedin.com/company/3363029?trk=prof-e",
      "twitter": "https://twitter.com/Navigine",
      "github": "https://github.com/Navigine",
      "docs": "https://docs.navigine.com",
      "android_market": "https://play.google.com/store/apps/details?id=com.navigine.navigine&hl=en",
      "ios_market": "https://itunes.apple.com/ru/app/navigine/id972099798?l=en&mt=8",
      "android_sdk": "https://github.com/Navigine/Indoor-Navigation-Android-Mobile-SDK-2.0",
      "ios_sdk": "https://github.com/Navigine/Indoor-Navigation-iOS-Mobile-SDK-2.0",
      "privacyPolicy": "https://navigine.com/privacy/"
    }
  }

  function getData() {
    return data;
}

function getKeysCount(buffer){
    let i = 0;
    for (let key in buffer) {
        i++;
    }
    return i;
}

function getKeys(buffer){
    let bufferIn = [];
    for (let key in buffer)
        bufferIn.push(key);
    return bufferIn;
}