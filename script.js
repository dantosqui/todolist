var listaProyectos = []
var listaToDos = []
var checkId = 0
var labels = []


function AgregarElemento(taskDescription,dateOfVencimiento) {
    if(dateOfVencimiento == '' || taskDescription==''){
        alert("Debe insertar una fecha de vencimiento y nombre")
        return
    }
    if (!YaExiste(taskDescription)) {
            
        
        iD=document.getElementById("dD").value
        const fechaDeHoy = new Date().toLocaleString("es-ES")
        listaProyectos[iD].todos.push({
            "nombre": taskDescription,
            "fecha": fechaDeHoy,
            "tachado": false,
            "fechaTachado": null,
            "cross": null,
            "dateOfVencimiento" : dateOfVencimiento,
            "checkbox":0
        })
        
        
        MostrarDesdeCero(listaProyectos[iD].todos)
        
    }
}

function MostrarDesdeCero(listaTasks){ //hacer que muestre el nombre y descripcion del proyecto cuando se cambia pero no cuando se busca no se suerte con eso lol
   
    labels =[]
    checkId=0
    console.log("typof: ", typeof listaTasks)
    
    if (typeof listaTasks != "object"){
        listaTasks=listaProyectos[document.getElementById("dD").value].todos
    }
    
    document.getElementById("listaActual").innerHTML=""
    listaTasks.forEach(i => {
        
        var task = document.getElementById("listaActual").appendChild(document.createElement("li"))
        task.id = `li_${checkId}`

        //mas adelante: comentarios para que el codigo sea lejible
        var checkbox = task.appendChild(document.createElement("input")) //se crea la checkbox y se le ponen los atributos
        checkbox.type = "checkbox"
        checkbox.id = checkId
        i.checkbox = checkId
        
        checkbox.setAttribute("onclick", `Tachar(${i.checkbox},${listaTasks})`); //funciones de la checkbox
        checkbox.setAttribute("onmouseover", `MostrarFecha(${i.checkbox},${listaTasks})`);
        checkbox.setAttribute("onmouseout", `SacarFecha(${i.checkbox},${listaTasks})`);

        var label = task.appendChild(document.createElement("label")) //le creamos una label
        label.innerHTML = i.nombre
        labels.push(label)


        var cross = task.appendChild(document.createElement("button")) //le ponemos el borrar
        cross.innerHTML = "x"
        cross.style.color = "red"
        i.cross = cross
        cross.setAttribute("onclick", `BorrarTask(${checkbox.id})`);
        
        checkId++ //cada task tiene un checkid, se reinicia cuando mostramos de nuevo
    });

}

function YaExiste(nombre) {
    proy = listaProyectos[document.getElementById("dD").value].todos
    var i = 0
    existe = false
    while (i < proy.length && !existe) {

        if (proy[i] != null) {
            existe = proy[i].nombre === nombre
        }

        i++
    }
    return existe
}

function TareaMasRapidaEnRealizarse(idProyecto) { //actualizar esto
    console.log("asdfaf")
    var text = document.getElementById("fmt")
    text.innerHTML = ""
    var fechaRapida = new Date()   
    var nombreTarea
    var proyecto


    proyecto = listaProyectos[idProyecto]
    console.log("nombre proyecto: " + proyecto.nombre)
    console.log("drfgvsg")
    console.log("nombre tarea de proyect: " + proyecto.todos[0].nombre)
    console.log("pqpqpqpppqpqqppq")
    if (proyecto.todos.length > 0) { //seguir en casa lo hago yo
        console.log("adaddaad")
        for (var i = 0; i < proyecto.todos.length; i++) {
            // if (proyecto.todos[i] != null && document.getElementById(i).checked) {
            //     // if (proyecto.todos[i].fecha == null || proyecto.todos[i].fecha > listaToDos[i].fechaTachado) {
            //     //     fechaRapida = proyecto.todos[i].fechaTachado
            //     //     nombreTarea = proyecto.todos[i].nombre
            //     //     console.log("Fecha rapida: " + fechaRapida + nombreTarea)
            //     // }
            //     if(proyecto.todos[i].fechaTachado.toLocaleString("es-ES") < fechaRapida.toLocaleString("es-ES")){
            //         fechaRapida = proyecto.todos[i].fechaTachado
            //         nombreTarea = proyecto.todos[i].nombre
            //         console.log("Fecha rapida: " + fechaRapida + nombreTarea)
            //     }
            // }

            if (proyecto.todos[i] != null && document.getElementById(i).checked) {
                // if (proyecto.todos[i].fecha == null || proyecto.todos[i].fecha > listaToDos[i].fechaTachado) {
                //     fechaRapida = proyecto.todos[i].fechaTachado
                //     nombreTarea = proyecto.todos[i].nombre
                //     console.log("Fecha rapida: " + fechaRapida + nombreTarea)
                // }
                console.log("cccccc")
                console.log("fecha vencimiento " + proyecto.todos[i].dateOfVencimiento)
                console.log("sdsdj")
                console.log("fecha tachado " + proyecto.todos[i].fechaTachado)
                if(proyecto.todos[i].dateOfVencimiento.toLocaleString("es-ES") - proyecto.todos[i].fechaTachado.toLocaleString("es-ES") < fechaRapida.toLocaleString("es-ES")){
                    fechaRapida = proyecto.todos[i].dateOfVencimiento.toLocaleString("es-ES") - proyecto.todos[i].fechaTachado.toLocaleString("es-ES")
                    nombreTarea = proyecto.todos[i].nombre
                    console.log("Fecha rapida: " + fechaRapida + nombreTarea)
                }
            }
        }
        console.log(fechaRapida)

        if (fechaRapida != null) {
            text.innerHTML = `La tarea "${nombreTarea}" fue la que mas rapido se realizó, el dia ${fechaRapida.toLocaleString("es-ES")}`
        } else {
            text.innerHTML = `No hay ninguna tarea tachada`
        }

    } else {
        text.innerHTML = `No hay ninguna tarea`
    }
}

function BorrarTask(idCheck) {
    proy = listlistaProyectos[document.getElementById("dD").value].todos
    console.log(idCheck)
    document.getElementById(`li_${idCheck}`).remove()
    delete proy[idCheck]
}

function Tachar(idCheck,list) {
    proy = list
    proy.todos[idCheck].fechaTachado = new Date().toLocaleString("es-ES")
    if (document.getElementById(idCheck).checked) {
        labels[idCheck].innerHTML = proy.todos[idCheck].nombre.strike() + ` - ${proy.todos[idCheck].fechaTachado}`

    } else {
        labels[idCheck].innerHTML = proy.todos[idCheck].nombre + ` - ${proy.todos[idCheck].fecha}`
    }
    
}

function MostrarFecha(idCheck,list) {
    proy = list
    proy[idCheck].cross.style.visibility = "hidden"
    if (labels[idCheck].firstElementChild)
        labels[idCheck].innerHTML += ` - ${proy[idCheck].fechaTachado}`
    else
        labels[idCheck].innerHTML += ` - ${proy[idCheck].fecha}`
}

function SacarFecha(idCheck,list) {
    proy = listaProyectos[document.getElementById("dD").value].todos
    proy[idCheck].cross.style.visibility = "visible"
    if (labels[idCheck].firstElementChild)
        labels[idCheck].innerHTML = proy[idCheck].nombre.strike()
    else
        labels[idCheck].innerHTML = proy[idCheck].nombre
}

//NUEVO TP FUNCIONES A PARTIR DE ACA: 
indexProyectos = 0
function AgregarProyecto(nombre, descripcion) {
    
    
    listaProyectos.push({
        "nombre":nombre,
        "descripcion": descripcion,
        "todos":listaToDos
    })
    
    listaToDos=[]
    MostrarDesdeCero(listaProyectos[indexProyectos].todos) //aca tiene que mandar la lista de todos
    
    MostrarProyectos(nombre, indexProyectos)
    
    indexProyectos++
}

function MostrarProyectos(nombre,indexProyectos){

    var nuevoDrop = document.getElementById("dD").appendChild(document.createElement('option'));
    nuevoDrop.setAttribute('value', indexProyectos)
    nuevoDrop.innerHTML = nombre
    nuevoDrop.selected = true

}

function Buscar(fe){

   listasConLaFechaDeVencimientoCondicionada =  listaProyectos[document.getElementById("dD").value].todos.filter(function (x) {
if(x.dateOfVencimiento == fe) return x
    })
    console.log(listasConLaFechaDeVencimientoCondicionada)
    MostrarDesdeCero(listasConLaFechaDeVencimientoCondicionada)
    
}
function DesBuscar(){

     MostrarDesdeCero(listaProyectos[document.getElementById("dD").value].todos)
     
 }