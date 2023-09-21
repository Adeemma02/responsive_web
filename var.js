const menu = document.querySelector('.menu-btn');
 const     nav = document.querySelector('.nav-btn');
 const     mobileBtn = document.querySelector('.exist-btn');

      menu.addEventListener('click', web)
      function web(){
        nav.classList.add('men-btn');
        
      }
      
      mobileBtn.addEventListener('click', () =>{
        nav.classList.remove('men-btn');
      })