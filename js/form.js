function emailSend(){

    var Username= document.getElementById('name'). value;
    var email= document.getElementById('email'). value;
    var phone= document.getElementById('phone'). value;
    var messageb =document.getElementById('messageb').value;

    var messagebody = "name" + Username +
    "<br/> email" + email 
    "<br/> phone" + phone 
    "<br/> messageb" + messageb;


    Email.send({
        Host : "smtp.gmail.com",
        Username : "maxwelljnr254@gmail.com",
        Password : "6D739DB60268BFF1EC4DC12ADEAFEFEA73EE",
        To : 'egpak.org1@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New contact form enquiry",
        Body : messagebody

    }).then(
      message => {
        if(message=='OK'){
            swal("Successful!", "We'll get back to you!", "success");
        }
        else{
            swal("Error!", "We'll get back to you!", "warning");
        }
    }
    );
}