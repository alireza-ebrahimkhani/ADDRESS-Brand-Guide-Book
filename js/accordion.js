document.addEventListener('DOMContentLoaded', function () {
    let comAaccordion_div = document.querySelectorAll(".accordion");
    comAaccordion_div.forEach(comAaccordion_div => {
      let comHeader_div = comAaccordion_div.querySelectorAll(".accordion__header");
      let comBody_div = comAaccordion_div.querySelectorAll(".accordion__body");
      let comItem_li = comAaccordion_div.querySelectorAll(".accordion__item");
          let comLineii_div = comAaccordion_div.getElementsByClassName("accordion__lineII");
      comHeader_div.forEach(comHeader_div => {
              let icon = document.createElement("DIV"); 
              icon.classList.add('accordion__icon');
              let lineI = document.createElement("DIV"); 
              lineI.classList.add('accordion__lineI');
              let lineII = document.createElement("DIV");
              lineII.classList.add('accordion__lineII')
              icon.appendChild(lineI);
              icon.appendChild(lineII);
              comHeader_div.appendChild(icon);
        comHeader_div.addEventListener('click', function () {
              if (comHeader_div.nextElementSibling.classList.contains('accordion__body--active'))	{
                  this.nextElementSibling.classList.remove('accordion__body--active');
                  this.lastChild.lastChild.classList.remove('accordion__lineII-open');
              } else{
                  console.log(comLineii_div);
                  for(let i = 0; i < comLineii_div.length; i++ ){
                      comLineii_div[i].classList.remove('accordion__lineII-open');
                  }
                      
                  comBody_div.forEach(comBody_div => {
                  comBody_div.classList.remove('accordion__body--active');
                      });
                  this.nextElementSibling.classList.add('accordion__body--active');
                  this.lastChild.lastChild.classList.add('accordion__lineII-open');
                  }
        });
      });
    });
  });
  