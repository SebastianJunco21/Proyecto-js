'use strict'

//Funcion para cargar el ultimo color que ha elegido el usuario.
//Obtiene el ultimo color elegido por el usuario del valor cargado en el local storage por el metodo cambiarTema()
function cargaColor(){
    const color = localStorage.getItem('theme');
    const theme = document.getElementById('theme');

    if(color != null && color == "red" || color == "blue" || color == "green"){
        theme.setAttribute('href', 'Styles/'+ color +'.css');
    }else{
        theme.setAttribute('href', 'Styles/green.css');
    }
}

cargaColor();

window.addEventListener('load', function(){

    function mantenerColor(){
        var index =document.getElementById('menuAbout');
        index.setAttribute('class', 'mantenerColor');
    }

    //Me permite cambiar el color (tema) de la vista
    /*Una vez realiza el cambio de tema, almacena el color correscondiente en el localStorage, y si el usuario refresca
     la vista, utiliza este valor para cargar el ultimo tema elegido por el usuario en la funcion cargaColor()*/
    function cambiarTema(){
        const theme = document.getElementById('theme');
        const btnGreen = document.getElementById('green');
        const btnRed = document.getElementById('red');
        const btnBlue = document.getElementById('blue');

        btnGreen.addEventListener('click', function(){
            theme.setAttribute('href', 'Styles/green.css');
            localStorage.setItem('theme', 'green');
        });

        btnRed.addEventListener('click', function(){
            theme.setAttribute('href', 'Styles/red.css');
            localStorage.setItem('theme', 'red');
        });

        btnBlue.addEventListener('click', function(){
            theme.setAttribute('href', 'Styles/blue.css');
            localStorage.setItem('theme', 'blue');
        });

    }

    /*Esta funcion me permite saber si el usuario ha hecho scroll dentro de la web, para ocultar o mostrar el 
    boton con el scroll animado*/
    function positionScroll(){
        window.onscroll = function() {
            let position = window.scrollY;
            const upScroll = document.getElementById('upScroll');

            if(position < 300){
                upScroll.style.display = 'none';
            }else if(position >= 300){
                upScroll.style.display = 'block';
            }
          
        };
    }

    /*Esta funcion me permite realizar el efecto de scroll suavisado*/
    function clickScroll(){
        $('#upScroll').click(function(event){
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0
            }, 500);

            return false;
        });
    }

    /*Esta funcion me permite obtener el nombre escrito por el usuario en el formulario y almecenarlo en el 
    localStorage para posteriormente refrescar la web*/
    function login(){
        let form = document.getElementById('form');

        form.addEventListener('submit', function(event){
            event.preventDefault();
            let formName = document.getElementById('formName').value;
            let btnCloseSession = document.getElementById('closeSession');

            if(formName != null && formName != ""){
                localStorage.setItem('Nombre', formName);
                location.reload();
                btnCloseSession.style.display = 'block';
            }
        });

        loadUser();
        closeSession();
    }
    
    /*Esta funcion me pertime cargar el nombre del usuario, obtenido del localStorage, y una vez obtiene y carga
    el usuario, muestra el boton para cerrar la sesion.*/
    function loadUser(){
        let contentAbout = document.getElementById('contentAbout');
        let contentLogin = document.getElementById('login');
        let nameLocalStorage = localStorage.getItem('Nombre');
        let btnCloseSession = document.getElementById('closeSession');

        if(nameLocalStorage != null && nameLocalStorage != ""){
            contentAbout.innerHTML = 'Bienvenido ' + '<strong>' + nameLocalStorage + '.' + '</strong>';
            btnCloseSession.style.display = 'block';
            contentLogin.style.display = 'none';
        }
    }

    //Esta funcion me permite realizar el evento de cerrar sesion.
    function closeSession(){
        let btnCloseSession = document.getElementById('closeSession');

        btnCloseSession.addEventListener('click', function(){
            localStorage.removeItem('Nombre');
            location.reload();
        });
    }

    function acordeon(){
        $('#acordeon').accordion();
    }

    mantenerColor();
    cambiarTema();
    positionScroll();
    clickScroll();
    login();
    acordeon();
});