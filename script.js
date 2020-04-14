console.log("works")

$(document).ready(function () {
    $(".button").click(function (event) {
       //  event.preventDefault();
        console.log("clicked");
        

        var name = $(".name").val().trim(); 
        var email = $(".email").val().trim();
        var message = $(".message").val().trim();
        var statusElm = $(".status")
        statusElm.empty()

        if(email.length > 5 && email.includes("@") &&  email.includes(".")){
            statusElm.append("<div>Valid Email</div>");
        }else{
            event.preventDefault();
            statusElm.append("<div>Invalid Email</div>")
        }

        if(name.length > 2){
            statusElm.append("<div>Valid Name</div>");
        }else{
            event.preventDefault();
            statusElm.append("<div>Invalid Name</div>");
        } 
        
        if(message.length > 10){
            statusElm.append("<div>Message is valid</div>")
        }else{
            event.preventDefault();
            statusElm.append("<div>Message is not valid</div>")
        }

    })
})