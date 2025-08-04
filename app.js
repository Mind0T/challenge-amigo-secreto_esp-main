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
        if(nombreIngresado=='')
            {
                ingresarDatos('h2','Ingresa un nombre valido');
            }
        else    
            {
                ingresarDatos('h2','Ingrese el nombre de su amigo');
                listaAmigos.push(nombreIngresado);
                mostrarListaAmigos();
                // ingresarDatos('#listaAmigos',listaAmigos.join("\n")); //Esta lista es la que quiero que se imprima cada uno en un renglon
            }        

        limpiarCaja();
    }

function mostrarListaAmigos()
    {
        let tam=listaAmigos.length;
        let i=0;
        let contenido="";
        while(i<tam)
            {
                if (listaAmigos[i]!="")
                    {
                        contenido=contenido+listaAmigos[i]+"<br>";
                    }
                i++;
            }    
        ingresarDatos('#listaAmigos',contenido);
        
    }
    

function sortearAmigo()
    {
        let indiceSorteo=Math.floor(Math.random()*listaAmigos.length);
        ingresarDatos('#resultado',`Tu amigo secreto sera: ${(listaAmigos[indiceSorteo])}`);
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

