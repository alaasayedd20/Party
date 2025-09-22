/// <reference types="../@types/jquery" />

$("header .home .inner .links span").on("mouseenter", ()=>{
    $("header .home .inner .links span").css("color", "rgba(214, 46, 51, 0.4)")
})
$("header .home .inner .links span").on("mouseleave", ()=>{
    $("header .home .inner .links span").css("color", "#fff")
})

$("header .home .inner .links li a").on("mouseenter", (e)=>{
    $(e.target).css({"color":"rgba(214, 46, 51, 0.4)"})
})
$("header .home .inner .links li a").on("mouseleave", (e)=>{    
    $(e.target).css({"color":"#fff"})
})


// $(".openContainer").animate({left:}, 500)

$('#openSide').on('click', () => {
    let container = $(".openContainer");
    let sidebar = $("#linkSide");

    if (container.css("left") === "0px") {
        // Open sidebar
        sidebar.animate({ width: "toggle" }, 500);
        container.animate({ left: "250px" }, 500);
    } else {
        // Close sidebar
        sidebar.animate({ width: "toggle" }, 500);
        container.animate({ left: "0" }, 500);
    }
});
$('#closeSide').on('click', () => {
    $('#linkSide').animate({ width: "toggle" }, 500);
    $(".openContainer").animate({ left: "0" }, 500);
});


$("#duration h2").on('click', (e)=>{
    $(e.target).siblings().slideToggle()
})
$("#duration p.special").css({"display": "block"})



let targetDate = new Date("2025-12-31 23:59:59").getTime()
let timer = setInterval(function(){
    let now = new Date().getTime();
let days = Math.floor((targetDate-now)/1000 /60 /60/24);
let hours = Math.floor(((targetDate-now)%(1000 *60 *60*24)/(1000*60*60)))
let minutes = Math.floor((targetDate-now)%(1000*60*60)/(1000*60))
let seconds = Math.floor((targetDate-now)%(1000*60)/1000)
$("#details .inner:eq(0) h2 span").text(days);
$("#details .inner:eq(1) h2 span").text(hours);
$("#details .inner:eq(2) h2 span").text(minutes);
$("#details .inner:eq(3) h2 span").text(seconds);
}, 1000)



$("#contact ul li").on("mouseenter", (e)=>{
    // console.log(e.target);
    $(e.target).css({color:"#fff", backgroundColor: "#D62E33"})
})
$("#contact ul li").on("mouseleave", (e)=>{
    // console.log(e.target);
    $(e.target).css({color:"#777", backgroundColor: "transparent"})
})

$("#inputArea").on("input", (e)=>{
    let message = e.target.value;
    if(message.length < 100){
        $("#countChar").text(100-message.length);
    }
    else{
        $("#countChar").text("your available character finished")
    }
    
})

$("#linkNav li").on("click", (e)=>{
    
    let sectionRef = e.target.getAttribute("href")
    let sectionOffset = $(sectionRef).offset().top;
    $("body , html").animate({scrollTop: sectionOffset}, 1000);
    

})

