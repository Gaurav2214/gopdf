document.addEventListener('readystatechange', event => {

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {        

        $('body').on('click', '.init-login', function(){
            HTMLToPDF.system.login();
        });        
    }

    if (event.target.readyState === "complete") {

    }

});