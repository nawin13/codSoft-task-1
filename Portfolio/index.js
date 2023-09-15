
var t1=gsap.timeline();
t1
.from(".side",{
duration:1,
opacity:0,
x:80,
})

.from(".nav",{
  opacity:0,
  y:40,
  duration:1,

})

.from(".main h3",{
  opacity:0,
  y:40,
  duration:1,

})
.from(".main h1",{
  opacity:0,
  x:40,
  duration:1,
  color:"#0000ff"

})

.from(".main h2",{
  opacity:0,
  y:-40,
  duration:1,

})

.from(".main p",{
  opacity:0,
  x:-40,
  duration:1,

})

.from(".main i",{
  opacity:0,
  y:-70,
  duration:1,

})

.from(".img-icon",{
  opacity:0,
  y:20,
  duration:1

})

.from(".aboutme",{
  opacity:0,
  y:-30,
  duration:1,

})

.from(".arrow",{
  opacity:0,
  y:30,
  duration:1,
  repeat:"-1"

})

.from(".about-img",{
  opacity:0,
  y:30,
  duration:1,
  

})
var a=document.querySelector(".side");
var b=document.querySelector(".bx.bx-menu")
var c=document.querySelector(".bx.bx-x")
b.addEventListener("click",()=>{
  a.style.right="0";
});

c.addEventListener("click",()=>{
  a.style.right="-300px";
})