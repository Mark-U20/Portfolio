

//project buttons
//windows onload needs to be called before the page is loader
//becasuse otherwise the vars will be set to null since 
//noing has been loaded yet, that is the same with the event listeners
window.onload = function() {


    var button1 = document.getElementById('button1');
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");
    var image = document.getElementById("img");








//craetes an event listener for the button1, button2,..etc.
button1.addEventListener("click", function() {
    //set slideshow to first image
    image.src = "Assets\\gifs\\horiseon_page_project.gif";
}); 
button2.addEventListener("click", function() {
    //set slideshow to second image
});
button3.addEventListener("click", function() {
    //set slideshow to third image
});
button4.addEventListener("click", function () {
        //set slideshow to fourth image
    });


}
