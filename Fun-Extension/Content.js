const generateSTYLES = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
        background-image: url("https://i.pinimg.com/originals/f5/9c/e3/f59ce3c50ff404d3e0531e9306ef2864.jpg");
        height: 500px; 
        background-repeat: no-repeat;
        background-position: center;
        
      color: #fff;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
      overflow: hidden;
    }
   
     </style>`;
  };
  
  const generateHTML = (pageName) => {
    return `
     
     <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x1_5"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
    </div>
    <div class='c'>
        <div class='_404'>404</div>
        
        <div class='_1'>GET BACK TO WORK</div>
        <div class='_2'>STUDYING > ${pageName}</div>
    </div>
     `;
  };
  
  switch (window.location.hostname) {
    case "www.youtube.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("YOUTUBE");
      break;
    case "www.facebook.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("FACEBOOK");
      break;
    case "www.netflix.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("NETFLIX");
      break;
    case "www.roblox.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("ROBLOX");
      break;
    case "discord.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("DISCORD");
      break;
    case "www.spotify.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("SPOTIFY");
      break;
      case "www.whatsapp.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("WHATSAPP");
        break;
        
  }
  