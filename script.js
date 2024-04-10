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
            "dateOfVencimiento" : dateOfVencimiento
        })
        
        
        MostrarDesdeCero(listaProyectos[iD].todos)
        
    }
}
//no se si funciona esto 
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
        checkbox.setAttribute("onclick", `Tachar(${checkbox.id})`); //funciones de la checkbox
        checkbox.setAttribute("onmouseover", `MostrarFecha(${checkbox.id})`);
        checkbox.setAttribute("onmouseout", `SacarFecha(${checkbox.id})`);


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
    var i = 0
    existe = false
    while (i < listaToDos.length && !existe) {

        if (listaToDos[i] != null) {
            existe = listaToDos[i].nombre === nombre
        }

        i++
    }
    return existe
}

function TareaMasRapidaEnRealizarse(idProyecto) { //actualizar esto
    console.log("asdfaf")
    var text = document.getElementById("fmt")
    text.innerHTML = ""
    var fechaRapida
    var nombreTarea
    var proyecto


    proyecto = listaProyectos[idProyecto].nombre
    console.log("nombre proyecto: " + proyecto)
    console.log("drfgvsg")
    console.log(proyecto.todos[0].nombreTarea)
    if (proyecto.todos.length > 0) { //seguir en casa lo hago yo
        console.log("adaddaad")
        for (var i = 0; i < proyecto.todos.length; i++) {
            if (proyecto.todos[i] != null && document.getElementById(i).checked) {
                console.log("HOLA")
                if (fechaRapida == null || fechaRapida > listaToDos[i].fechaTachado) {
                    fechaRapida = proyecto.todos[i].fechaTachado
                    nombreTarea = proyecto.todos[i].nombre
                }
            }
        }

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

    console.log(idCheck)
    document.getElementById(`li_${idCheck}`).remove()
    delete listaToDos[idCheck]


}

function Tachar(idCheck) {
    listaToDos[idCheck].fechaTachado = new Date().toLocaleString("es-ES")
    if (document.getElementById(idCheck).checked) {
        labels[idCheck].innerHTML = listaToDos[idCheck].nombre.strike() + ` - ${listaToDos[idCheck].fechaTachado}`

    } else {
        labels[idCheck].innerHTML = listaToDos[idCheck].nombre + ` - ${listaToDos[idCheck].fecha}`
    }
}

function MostrarFecha(idCheck) {
    listaToDos[idCheck].cross.style.visibility = "hidden"
    if (labels[idCheck].firstElementChild)
        labels[idCheck].innerHTML += ` - ${listaToDos[idCheck].fechaTachado}`
    else
        labels[idCheck].innerHTML += ` - ${listaToDos[idCheck].fecha}`
}

function SacarFecha(idCheck) {
    listaToDos[idCheck].cross.style.visibility = "visible"
    if (labels[idCheck].firstElementChild)
        labels[idCheck].innerHTML = listaToDos[idCheck].nombre.strike()
    else
        labels[idCheck].innerHTML = listaToDos[idCheck].nombre
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
console.log(listaProyectos[document.getElementById("dD").value])
   listasConLaFechaDeVencimientoCondicionada =  listaProyectos[document.getElementById("dD").value].todos.map(function (x) {
if(x.dateOfVencimiento == fe) return x
    })
    MostrarDesdeCero(listasConLaFechaDeVencimientoCondicionada)
    
}
