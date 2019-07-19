
var tl = new TimelineMax({onUpdate:updatePercentage});
var t2 = new TimelineMax({onUpdate:updatePercentage2});

const controller = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();

tl.from(".article-list",2,{y:150, opacity:0});
tl.from(".latestestUpdate",3.5,{y:-200, opacity:0});
tl.from(".latestestUpdate2",3,{y:200, opacity:0});
tl.from(".articleCard1",8.5,{x:-200, opacity:0},"=-1");
tl.from(".articleCard2",9,{y:200, opacity:0},"=-1");
tl.from(".articleCard3",10,{x:200, opacity:0},"=-.7");

t2.from(".mttt0",1,{x:-100, opacity:0});
t2.from(".mttt1",1,{x:100, opacity:0});
t2.from(".mttt2",1,{x:-100, opacity:0});
t2.from(".mttt3",1,{x:100, opacity:0});
t2.from(".mttt4",1,{x:-100, opacity:0});



const scene = new ScrollMagic.Scene({
    triggerElement:".triggerLatestUpdate",
    triggerHook: "onLeave",
    duration:"25%"
})
.setPin(".triggerLatestUpdate")
.setTween(tl)
    .addTo(controller);


//-------------------------------------------meet the team
const scene2 = new ScrollMagic.Scene({
    triggerElement:".article-list",
    triggerHook:"onLeave",
    duration:"20%"
})
.setPin(".article-list")
.setTween("t2")
  .addTo(controller2);


  function updatePercentage(){
    tl.progress();
}

function updatePercentage2(){
    t2.progress();
}