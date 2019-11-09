function validasiUsername(username) {
    var usr = /^[a-z]{5,}$/i ;
    return usr.test(username) ;
}

if (validasiUsername("josuakrist")) {
    alert("Username Is Valid") ;
} else {
    alert("Username Is Invalid") ;
}

function validasiPassword(password){
    var pass = /^[0-9]{2}[@&]{1}[A-Z]{4}$/i;
    return pass.test(password);
}
if (validasiPassword("16@PASS")) {
    alert("Password Is Valid") ;
} else {
    alert("Password Is Invalid") ;
}
