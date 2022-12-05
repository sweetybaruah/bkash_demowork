var digits = document.querySelector('.digits')
var zero = document.querySelector('.zero')
var two = document.querySelector('.two')
var two_1 = document.querySelector('.two_1')
var two_2 = document.querySelector('.two_2')
var deal = document.querySelector('.deal')
var offer = document.querySelector('.offer')
var text = document.querySelector('.text')
var base = document.querySelector('.base')
var numbers = document.querySelector('.numbers')
var slide2 = document.querySelector('.slide2')
var slide1 = document.querySelector('.slide1')
var cashback = document.querySelector('.cashback')
var text2 = document.querySelector('.text2')

// TweenMax.to(zero,.1,{x:"+=2", yoyo:true, repeat:-1, display: 'block'});
// TweenMax.to(two, .1,{x:"-=2", yoyo:true, repeat:-1, display: 'block'});
// TweenMax.to(two_1,.1, {x:"-=2", yoyo:true, repeat:-1, display: 'block'});
// TweenMax.to(two_2,.1, {x:"-=2", yoyo:true, repeat:-1, display: 'block'});
doanimation();


function doanimation(){
    deal.classList.add('xoomIn')
    
    setTimeout(()=>{
        gsap.to('.deal', 0.1, {x:"+=2", yoyo:true, repeat:0})
        deal.classList.remove('xoomIn')
        deal.classList.add('hidden')
        offer.classList.remove('hidden')
        text.classList.remove('hidden')
        text.classList.add('flyIn')
        base.classList.remove('hidden')
        numbers.classList.remove('hidden')
        setTimeout(()=>{
            // gsap.to('.numbers', {scale: .7})
            TweenMax.to(zero,1,{x:"+=2", yoyo:true, repeat:-1, display: 'block'});
            TweenMax.to(two, 1,{x:"-=2", yoyo:true, repeat:-1, display: 'block'});
            TweenMax.to(two_1,1, {x:"-=2", yoyo:true, repeat:-1, display: 'block'});
            TweenMax.to(two_2,1, {x:"-=2", yoyo:true, repeat:-1, display: 'block'});
            console.log('ok')
        },2000)
    },3000)
}


var status 	= 1;
var count =0;

if (typeof window.orientation !== 'undefined' ){
    dragElementMobile(zero,1);
    dragElementMobile(two,2);
    dragElementMobile(two_1,3);
    dragElementMobile(two_2,4);
  
  } 
  else{
    dragElement(zero,1);
    dragElement(two,2);
    dragElement(two_1,3);
    dragElement(two_2,4);  
  }

  function dragElementMobile(elmnt, items) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
    } else {
      elmnt.ontouchstart = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e.preventDefault();
      e = e.touches[0] || window.event;
      
      pos3 = e.clientX;
      pos4 = e.clientY;
      // document.onmouseup = closeDragElement;
      document.ontouchmove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e.touches[0] || window.event;
      // e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      leftSpace = elmnt.offsetLeft - pos1;
      // console.log(leftSpace)
  
    draggedResult( elmnt, leftSpace, items);   
    }
  
    function closeDragElement() {
      document.ontouchend = null;
      document.touchmove = null;
    }
  }
  
  

  function dragElement(elmnt, items) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {

      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      leftSpace = elmnt.offsetLeft - pos1;
      // console.log(leftSpace)

    draggedResult( elmnt, leftSpace, items);   
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
}

function draggedResult(elmnt, leftSpace, items){
    console.log(leftSpace)
    var i=1;
    if(leftSpace > 20){
        switch(items){
            case 1: 
            count += items;
            zero.style.top = 138 + 'px';
            zero.style.left = 98 + 'px';
            zero.classList.add('drop_zone')
            break;

        case 2:
        items+=1;
        two.style.top = 138 + 'px';
        two.style.left = 41 + 'px';
        two.classList.add('drop_zone')

        break;

        case 3:
          items+=1;
          two_1.style.top = 138 + 'px';
          two_1.style.left = 154 + 'px';
          two_1.classList.add('drop_zone')
        
        break;

        case 4:
            items+=1;
            two_2.style.top = 138 + 'px';
            two_2.style.left = 213 + 'px';
          two_2.classList.add('drop_zone')
        }
        if(items > 4){
          setTimeout(()=>{
            // gsap.to('.slide1', {display: 'none'})
            // zero.classList.add('hidden')
            // two_1.classList.add('hidden')
           
            gsap.to('.numbers', {display: 'none', duration: 1})
            gsap.to('.base', {display: 'none', duration: 1})
            gsap.to('.text', {display: 'none', duration: .1})
            gsap.to('.offer', {display: 'none', duration: 1.5})
            setTimeout(()=>{
              slide2.classList.remove('hidden')
            cashback.classList.remove('hidden')
            cashback.classList.add('bottomtoup')
            setTimeout(()=>{
              text2.classList.remove('hidden')
              text2.classList.add('flyIn2')
            },1500)
          },1300)
          
        },1000)
      }
  }
}

