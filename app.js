let nombreUsuario;
let listaAmigos=[];
let nombreIngresado;



function ingresarDatos(elemento,texto)
    {
        let ingresarDatos=document.querySelector(elemento);
        ingresarDatos.innerHTML=texto;

    }

function agregarAmigo()
    {
        nombreIngresado=document.getElementById('amigo').value;
        listaAmigos.push(nombreIngresado);
        mostrarListaAmigos();
        // ingresarDatos('#listaAmigos',listaAmigos.join("\n")); //Esta lista es la que quiero que se imprima cada uno en un renglon
 

        limpiarCaja();
    }

function mostrarListaAmigos()
    {
        let tam=listaAmigos.length;
        let i=0;
        while(tam!=i)
            {
                    ingresarDatos('#listaAmigos',`${listaAmigos[i]},<b>`);
                    i++;
            }    
    }
    

 function sortearAmigo()
    {
        ingresarDatos('#resultado','aqui se mostrara el resultado');
    }



function condicionesIniciales()
    {
        ingresarDatos('h1','Bienvenido al amigo secreto');
        ingresarDatos('h2','Ingrese el nombre de sus amigos');
    }
function bienvenido()
    {
        nombreUsuario=document.getElementById('amigo').value;
        ingresarDatos('h1',`Bienvenido ${nombreUsuario}<br> al Amigo Secreto`);
        limpiarCaja();
    }

function limpiarCaja()
    {
        document.getElementById('amigo').value='';
    }



condicionesIniciales();

