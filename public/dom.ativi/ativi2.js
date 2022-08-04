// document.getElementById('btn').addEventListener('mouseover', addImagem);

function addImagem() {
    const img = document.createElement('img');
    img.src =
      'https://micropromarilia.com.br/wp-content/uploads/2021/08/Iain-Macmillan-610x610-1.jpg';
    img.width = 400;
    document.getElementsByTagName('div')[1].appendChild(img);
  }
  
  // function addImagem() {
  //   const img = `<img src="https://micropromarilia.com.br/wp-content/uploads/2021/08/Iain-Macmillan-610x610-1.jpg" width="400"/>`;
  
  //   document.getElementsByTagName('div')[1].innerHTML = img;
  // }
  