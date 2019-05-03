class Cuenta {
    
    static ingresar(){
        console.log("Estas adentro del metodo.");
        
        //Registro muy trucho
        let usuarioRegistrado = "clase1917";
        let claveRegistrada = "roma";
        
        let listaUsuarios = [];
        listaUsuarios.push("Gio");
        listaUsuarios.push("Natalia");
        listaUsuarios.push("Efigenia");
        listaUsuarios.push("Luz","Pedro","Teresa");
        console.log(listaUsuarios);
        
        
        let miUsuario = document.querySelector("#usuario").value;
        let miClave =  document.querySelector("#clave").value;
        console.log(miClave + " " + miUsuario);
        
        if (usuarioRegistrado == miUsuario & miClave == claveRegistrada){
            console.log("Bienvenido " + miUsuario );
        }else{
            console.log("A la calle!!!!");
            
        }        
    }
                
    static registrar(){
        console.log("Estamos en el metodo registrar()");        
        
        //CAPTURAR USUARIO INGRESADO PARA REGISTRAR
        let usuarioInput = document.querySelector("#registrarUsuario").value;
        console.log("El usuario es: " + usuarioInput);
        listaUsaurios.push(usuarioInput);
        //console.log(listaUsaurios);
        
    }
    
    static mostrar(){
        console.log(listaUsaurios);
        document.querySelector("#resultadoPnl").innerHTML = listaUsaurios;
    }
    
    static main(){
        let botonRegistro = document.querySelector("#registrarBtn");
        botonRegistro.setAttribute("onclick","Cuenta.registrar()");
        
        document.querySelector("#mostrarBtn").setAttribute("onclick","Cuenta.mostrar();");
    }
}
Cuenta.main();
let listaUsaurios = [];



