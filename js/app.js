const container = document.getElementById("container");


function getData (){
    for (let i =0; i<comunidades.length; i++){
        var fechaActual = comunidades[i].entrega.slice(1,11);
        const contenido = 
                      `
                        <div class = "grupo" id= "grupo${comunidades[i].id}"> 
                        <h4> ${comunidades[i].nombre}</h4> 
                        <h5> En producción: ${comunidades[i].produccion}</h5> 
                        <h5 class = "fechas"> Próxima Entrega: ${fechaActual}</h5>
                        <button class ="button">VER DETALLE</button>
                        </div>`
                      container.innerHTML += contenido;
                  }
        }
      

const comunidades =
        [
            {
            id:1,
            nombre: "Grupo 1",
            produccion: "Producto A",
            entrega:  "\"2008-01-01T12:00:00Z\"",
            imagen: "imagen"
            },
        
            {
            id:2,
            nombre: "Grupo 2",
            produccion: "Producto B",
            entrega:  "\"2008-01-01T12:00:00Z\"",
            imagen : "imagen"
            },
        
            {
            id:3,
            nombre: "Grupo 3",
            produccion: "Producto C",
            entrega:  "\"2008-01-01T12:00:00Z\"",
            imagen : "imagen"
            },
            {
            id:4,
            nombre: "Grupo 4",
            produccion: "Producto D",
            entrega: "\"2008-01-01T12:00:00Z\"",
            imagen : "imagen"
            },
            
            {
            id:5,
            nombre: "Grupo 5",
            produccion: "Producto E",
            entrega:  "\"2008-01-01T12:00:00Z\"",
            imagen : "imagen"
            },
                
            {id:6,
            nombre: "Grupo 6",
            produccion: "Producto F",
            entrega: "\"2008-01-01T12:00:00Z\"",
            imagen : "imagen"
            }
        ]    
        
        
getData();

const button = document.getElementsByClassName("button");

var i = 0;
for (let i=0; i< button.length; i++){
    button[i].addEventListener("click", function(){
       console.log("Este es el grupo: " + comunidades[i].id);
    })
};

