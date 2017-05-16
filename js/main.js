function validateForm(){
    var nombre =  document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("input-email").value;
    var password = document.getElementsByClassName("input-password").value;
    var bici = document.getElementsByClassName("form-group input-box").value;
    var tuiter = document.getElementById("input-social");

    var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var mayuLetter = ["A","B","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

if (nombre == "" || nombre.length == 0){
        var span = document.createElement("span");
        var contiene = document.getElementById("name");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su nombre");
        span.appendChild(texto);
        //return span;
    }else if( nombre != letter){
    	var span = document.createElement("span");
        var contiene = document.getElementById("name");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe contener solo letras");
        span.appendChild(texto);
   
    }else if(nombre.charAt[0] != nombre.charAt[0] .toUpperCase()){
    	var span = document.createElement("span");
        var contiene = document.getElementById("name");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("La primera letra debe ser mayuscula");
        span.appendChild(texto);
    	
    }
/**/
    
if (lastname == "" || lastname.length == 0 ){
        var span = document.createElement("span");
        var contiene = document.getElementById("lastname");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su apellido");
        span.appendChild(texto);
       // return span;
}

if (email == "" || email == 0 ){
        var span = document.createElement("span");
        var contiene = document.getElementById("input-email");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su email");
        span.appendChild(texto);
       // return span;
}

if (password == "" || password == 0 ){
        var span = document.createElement("span");
        var contiene = document.getElementById("input-password");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar su contraseña");
        span.appendChild(texto);

       // return span;
}else if(password.length < 6 || password == "123456" || password =="password" || password == "098754"){
		var span = document.createElement("span");
        var contiene = document.getElementById("input-password");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe ingresar otra contraseña");
        span.appendChild(texto);
}

if (bici == "" || bici == 0 ){
        var span = document.createElement("span");
        var contiene = document.getElementById("form-group input-box");
        var padre = contiene.parentNode;
        padre.appendChild(span);
        var texto = document.createTextNode("Debe seleccionar un tipo de bicicleta");
        span.appendChild(texto);
       // return span;
}


}

