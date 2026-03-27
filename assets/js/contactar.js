
function enviarmensaje(){
    //programacion basica

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let mensaje = document.getElementById('mensaje').value;


    //Validamos el formulario
    if(!nombre || !correo || !mensaje){
       
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!"
 
});
}
else{

    Swal.fire({
    icon: "success",
  title: "Excelente",
  text: "Su mensaje se acepta correctamente"
 

});
    
}
}