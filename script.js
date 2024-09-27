function mudarImage(img){
    let body = document.body;
  
    switch(img){
      case 'lol': body.style.backgroundImage = "url('lol.png')";break;
      case 'minecraft': body.style.backgroundImage = "url('minecraft.png')";break;
      case 'galinha': body.style.backgroundImage = "url('galinha.png')";break;
      case 'porco': body.style.backgroundImage = "url('porco.png')";break;
      case 'raposa': body.style.backgroundImage = "url('raposa.png')";break;
      default: body.style.backgroundcolor = 'black';
    }
  }