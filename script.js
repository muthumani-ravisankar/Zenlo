// box in and out animation
const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});
const hiddenel=document.querySelectorAll('.hidden');
hiddenel.forEach((el)=>observer.observe(el));



//Resposive Dropdown menu
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.addEventListener('click', function () {
    dropDownMenu.classList.toggle('show');
    const isShow = dropDownMenu.classList.contains('show');
    toggleBtnIcon.className = isShow ? 'fa fa-times' : 'fa fa-bars';
});

//Dynamic text slides

const text=document.querySelector('.text-animation').children;
const textlen=text.length;
let index=0;
const textin=3000,textout=2800;

function animateText(){
    for( let i=0 ; i<textlen;i++){
        text[i].classList.remove('show','dont');
    }
    text[index].classList.add('show');
    setTimeout(function(){
        text[index].classList.add('dont');
    },textout)
    if(index==textlen-1){
        index=0;
    }else{
        index++;
    }
    
    setTimeout(animateText,textin);
}
window.onload=animateText;


//counter
let screenWidth = window.innerWidth;
let scrolled=window.scrollY;
if(scrolled>128 || screenWidth>120){
    const counts= document.querySelectorAll('.counter');
    const speed =97;
    counts.forEach((counter) => {
        function upData(){
            const target= Number(counter.getAttribute('data-target'));
            const c= Number(counter.querySelector('.count').innerText);
            const inc = target/speed
            if(c <target){
                counter.querySelector('.count').innerText=Math.floor(inc+c);
                setTimeout(upData,1)
            }else{
                counter.querySelector('.count').innerText=target
            }       
        }
        upData()
    });
    
    
}else{
    document.addEventListener('scroll',()=>{
        
        if(scrolled>128){
            const counts= document.querySelectorAll('.counter');
            const speed =97;
            counts.forEach((counter) => {
                function upData(){
                    const target= Number(counter.getAttribute('data-target'));
                    const c= Number(counter.querySelector('.count').innerText);
                    const inc = target/speed
                    if(c <target){
                        counter.querySelector('.count').innerText=Math.floor(inc+c);
                        setTimeout(upData,1)
                    }else{
                        counter.querySelector('.count').innerText=target
                    }       
                }
                upData()
            });
            
        }
    })
    
}


// swiper script
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });




console.log("script testing 3 2 1")