

function locomo(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    }

function effect(){
    // document.querySelectorAll(".slide").forEach(function(elem){
    //     var dim = elem.getBoundingClientRect();

    //     elem.addEventListener("mousemove",function(dets){
    //         this.children[1].style.clipPath = `circle(10% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
    //         // console.log("hey");
    //     })
    //     elem.addEventListener("mouseleave",function(dets){
    //     this.children[1].style.clipPath = `circle(0% at ${dets.clientX - dim.left}px ${dets.clientY - dim.bottom}px)`
    //     // console.log("heye");

    //     })
    // })
    document.querySelectorAll(".slide")
    .forEach(function(slide){
        slide.addEventListener("mousemove", function(dets){
            var dim = slide.getBoundingClientRect();
            this.children[1].style.clipPath = `circle(15% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
        });

        slide.addEventListener("mouseleave", function(dets){
            var dim = slide.getBoundingClientRect();
            this.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
        });
    })
}

function slideskewmaker(){
        var dim =   document.querySelector(".slide")
        .getBoundingClientRect();
        

        var prew = dim.left;

          document.querySelector("#project")
          .addEventListener("scroll",function(){
              var dim2 =   document.querySelector(".slide")
              .getBoundingClientRect();
               
              var diff = prew - dim2.left;
              document.querySelectorAll(".slide")
              .forEach (function(elem){
                    elem.style.transform = `skewX(${diff*.2}deg)`;
              })
              prew = dim2.left;
          })
       
}
locomo()
slideskewmaker()
effect()
