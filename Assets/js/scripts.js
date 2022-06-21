

//project buttons
//windows onload needs to be called before the page is loaded
//becasuse otherwise the vars will be set to null since 
//nothing has been loaded yet, that is the same with the event listeners
window.onload = function () {


    var button1 = document.getElementById('button1');
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");
    var image = document.getElementById("img");
    var imgindex = document.getElementById("imageIndex");
    






    //craetes an event listener for the button1, button2,..etc.
    button1.addEventListener("click", function () {
        //set slideshow to first image
        image.src = "Assets\\gifs\\horiseon_page_project.gif";
        imgindex.innerHTML = "Project 1";
        img.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    });
    button2.addEventListener("click", function () {
        //set slideshow to second image
        imgindex.innerHTML = "Project 2";
        img.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});

    });
    button3.addEventListener("click", function () {
        //set slideshow to third image
        imgindex.innerHTML = "Project 3";
        img.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});

    });
    button4.addEventListener("click", function () {
        //set slideshow to fourth image
        imgindex.innerHTML = "Project 4";
        img.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});

    });
    image.addEventListener("click", function () {
        window.location='https://mark-ustby.github.io/Urban-Octo-Telegram/urban-octo-telegram/Develop/';
    });
    image.addEventListener("mouseover", function () {
        // change the pointer to a hand
        image.style.cursor = "pointer";
    });



    
}
