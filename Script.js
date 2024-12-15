var cursor = document.querySelector("#cursor")
var cursorBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + 30 + "px"
    cursor.style.top = dets.y + "px"
    cursorBlur.style.left = dets.x - 250 + "px"
    cursorBlur.style.top = dets.y - 250 + "px"
})

var h4 = document.querySelectorAll("#nav h4")
h4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.style.scale = 3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    }
})

const counters = document.querySelectorAll(".counter");
counters.forEach(counter=>{
        let initial_count = 0;
    const final_count = counter.dataset.count;
    const counting = setInterval(updateCounting, 1);
    function updateCounting(){
        if(initial_count < 1000){
        initial_count = initial_count += 1;
        counter.innerText = initial_count + "+";
        }

        if(initial_count >= 1000){
            initial_count = initial_count += 100;
            counter.innerText = (initial_count /1000).toFixed(2) +'k+';
            }

            if(initial_count >= 10000){
                initial_count = initial_count += 5000;
                }

                if(initial_count >= 1000000){
                    initial_count = initial_count += 500000;
                    counter.innerText = (initial_count /1000000).toFixed(2) +'+';
                    }

        if(initial_count >= final_count){
            clearInterval(counting);
        }
    }
})


