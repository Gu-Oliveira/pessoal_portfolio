window.onload = function(){
    document.querySelector(".menu-mobile").addEventListener("click", function(){
        if(document.querySelector(".menu-desktop").style.display == 'none') {
            document.querySelector(".menu-desktop").style.display = 'flex'
        } else{
            document.querySelector(".menu-dektop").style.display = 'none'
        } 
    });
};