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
        var index =document.getElementById('menuIndex');
        index.setAttribute('class', 'mantenerColor');
    }

    // Slider
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    //Obtiene la fecha actual del equipo, para cargarla como fecha de publicasion en el post
    const dia = new Date().getDate();
    const numeroMes = new Date().getMonth();
    const ano = new Date().getFullYear();

    const meses = ["Enero", 
                "Febrero", 
                "Marzo", 
                "Abril", 
                "Mayo", 
                "Junio", 
                "Julio", 
                "Agosto", 
                "Septiembre", 
                "Octubre", 
                "Noviembre", 
                "Diciembre"];
    
    var fecha = dia + "/" + meses[numeroMes] + "/" + ano;

    // Array en donde se cargan los post que se visualizaran en la vista.
    var posts = [
        {
            title: "Primer post",
            date: fecha,
            content: "Donec pretium erat sit amet sapien faucibus, ac facilisis lacus consequat. Vestibulum pellentesque venenatis lacinia. Etiam luctus velit vitae arcu fringilla, vel varius odio semper. Aliquam neque mi, iaculis at risus sed, luctus facilisis mi. Nullam et hendrerit turpis. Mauris sagittis convallis lectus in condimentum. Curabitur sem neque, pulvinar sollicitudin leo ut, finibus placerat justo. Nulla pharetra leo et nibh lacinia, nec tristique nisi congue. Nunc nibh metus, volutpat nec viverra at, sollicitudin a urna. Ut ullamcorper lobortis risus eu cursus. Duis id enim vitae lacus porttitor volutpat eget sed tellus. Quisque posuere nisi eu neque ultrices, ac consectetur leo hendrerit. Pellentesque varius diam purus, a vehicula purus vulputate id. Fusce elementum, enim aliquet imperdiet fringilla, arcu lorem aliquet ligula, tincidunt viverra mi ante eu ligula. Aliquam pretium ante id massa rutrum ullamcorper. Nunc cursus malesuada fermentum."
        },
        {
            title: "Segundo post",
            date: fecha,
            content: "Donec pretium erat sit amet sapien faucibus, ac facilisis lacus consequat. Vestibulum pellentesque venenatis lacinia. Etiam luctus velit vitae arcu fringilla, vel varius odio semper. Aliquam neque mi, iaculis at risus sed, luctus facilisis mi. Nullam et hendrerit turpis. Mauris sagittis convallis lectus in condimentum. Curabitur sem neque, pulvinar sollicitudin leo ut, finibus placerat justo. Nulla pharetra leo et nibh lacinia, nec tristique nisi congue. Nunc nibh metus, volutpat nec viverra at, sollicitudin a urna. Ut ullamcorper lobortis risus eu cursus. Duis id enim vitae lacus porttitor volutpat eget sed tellus. Quisque posuere nisi eu neque ultrices, ac consectetur leo hendrerit. Pellentesque varius diam purus, a vehicula purus vulputate id. Fusce elementum, enim aliquet imperdiet fringilla, arcu lorem aliquet ligula, tincidunt viverra mi ante eu ligula. Aliquam pretium ante id massa rutrum ullamcorper. Nunc cursus malesuada fermentum."
        },
        {
            title: "Tercero post",
            date: fecha,
            content: "Donec pretium erat sit amet sapien faucibus, ac facilisis lacus consequat. Vestibulum pellentesque venenatis lacinia. Etiam luctus velit vitae arcu fringilla, vel varius odio semper. Aliquam neque mi, iaculis at risus sed, luctus facilisis mi. Nullam et hendrerit turpis. Mauris sagittis convallis lectus in condimentum. Curabitur sem neque, pulvinar sollicitudin leo ut, finibus placerat justo. Nulla pharetra leo et nibh lacinia, nec tristique nisi congue. Nunc nibh metus, volutpat nec viverra at, sollicitudin a urna. Ut ullamcorper lobortis risus eu cursus. Duis id enim vitae lacus porttitor volutpat eget sed tellus. Quisque posuere nisi eu neque ultrices, ac consectetur leo hendrerit. Pellentesque varius diam purus, a vehicula purus vulputate id. Fusce elementum, enim aliquet imperdiet fringilla, arcu lorem aliquet ligula, tincidunt viverra mi ante eu ligula. Aliquam pretium ante id massa rutrum ullamcorper. Nunc cursus malesuada fermentum."
        },
        {
            title: "Cuarto post",
            date: fecha,
            content: "Donec pretium erat sit amet sapien faucibus, ac facilisis lacus consequat. Vestibulum pellentesque venenatis lacinia. Etiam luctus velit vitae arcu fringilla, vel varius odio semper. Aliquam neque mi, iaculis at risus sed, luctus facilisis mi. Nullam et hendrerit turpis. Mauris sagittis convallis lectus in condimentum. Curabitur sem neque, pulvinar sollicitudin leo ut, finibus placerat justo. Nulla pharetra leo et nibh lacinia, nec tristique nisi congue. Nunc nibh metus, volutpat nec viverra at, sollicitudin a urna. Ut ullamcorper lobortis risus eu cursus. Duis id enim vitae lacus porttitor volutpat eget sed tellus. Quisque posuere nisi eu neque ultrices, ac consectetur leo hendrerit. Pellentesque varius diam purus, a vehicula purus vulputate id. Fusce elementum, enim aliquet imperdiet fringilla, arcu lorem aliquet ligula, tincidunt viverra mi ante eu ligula. Aliquam pretium ante id massa rutrum ullamcorper. Nunc cursus malesuada fermentum."
        }
    ]

    //Metodo que me permite cargar los post con respecto a la información que se obtiene del array posts.
    function crearPost(){
        posts.forEach((elemento) =>{
            var contenedor = document.querySelector('#posts');
            var articulo = document.createElement('article');
            articulo.setAttribute('class', 'post');

            var titulo = document.createElement('h2');
            titulo.prepend(elemento.title);

            var fechaPubli = document.createElement('span');
            fechaPubli.setAttribute('class', 'date');
            fechaPubli.prepend(elemento.date);

            var parrafo = document.createElement('p');
            parrafo.prepend(elemento.content);
            
            var btnMas = document.createElement('a');
            btnMas.setAttribute('href', '#');
            btnMas.setAttribute('class', 'btnMore');
            btnMas.prepend("Leer más");

            contenedor.appendChild(articulo);
            articulo.appendChild(titulo);
            articulo.appendChild(fechaPubli);
            articulo.appendChild(parrafo);
            articulo.appendChild(btnMas);

        });
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

    mantenerColor();
    crearPost();
    cambiarTema();
    positionScroll();
    clickScroll();
    login();
});