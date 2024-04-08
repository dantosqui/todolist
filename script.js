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
        
        laLista = document.getElementById("lalista")

        const fechaDeHoy = new Date().toLocaleString("es-ES")
        listaToDos.push({
            "nombre": taskDescription,
            "fecha": fechaDeHoy,
            "tachado": false,
            "fechaTachado": null,
            "cross": null,
            "dateOfVencimiento" : dateOfVencimiento
        })

        var task = document.getElementById("lalista").appendChild(document.createElement("li"))
        task.id = `li_${checkId}`

        var checkbox = task.appendChild(document.createElement("input"))
        checkbox.type = "checkbox"
        checkbox.id = checkId
        checkbox.setAttribute("onclick", `Tachar(${checkbox.id})`);
        checkbox.setAttribute("onmouseover", `MostrarFecha(${checkbox.id})`);
        checkbox.setAttribute("onmouseout", `SacarFecha(${checkbox.id})`);
        var label = task.appendChild(document.createElement("label"))
        label.innerHTML = listaToDos[checkId].nombre
        labels.push(label)
        var cross = task.appendChild(document.createElement("button"))
        cross.innerHTML = "x"
        cross.style.color = "red"
        // cross.style.marginLeft = "100px"
        // label.style.marginLeft = "100px"
        listaToDos[checkId].cross = cross
        cross.setAttribute("onclick", `BorrarTask(${checkbox.id})`);
        checkId++



    }
}
//no se si funciona esto 
function MostrarDesdeCero(){
    checkId=0
    var task = document.getElementById("lalista").appendChild(document.createElement("li"))
        task.id = `li_${checkId}`

        var checkbox = task.appendChild(document.createElement("input"))
        checkbox.type = "checkbox"
        checkbox.id = checkId
        checkbox.setAttribute("onclick", `Tachar(${checkbox.id})`);
        checkbox.setAttribute("onmouseover", `MostrarFecha(${checkbox.id})`);
        checkbox.setAttribute("onmouseout", `SacarFecha(${checkbox.id})`);
        var label = task.appendChild(document.createElement("label"))
        label.innerHTML = listaToDos[checkId].nombre
        labels.push(label)
        var cross = task.appendChild(document.createElement("button"))
        cross.innerHTML = "x"
        cross.style.color = "red"
        // cross.style.marginLeft = "100px"
        // label.style.marginLeft = "100px"
        listaToDos[checkId].cross = cross
        cross.setAttribute("onclick", `BorrarTask(${checkbox.id})`);
        checkId++

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

function TareaMasRapidaEnRealizarse() {
    var text = document.getElementById("fmt")
    text.innerHTML = ""
    var fechaRapida
    var nombreTarea
    if (listaToDos.length > 0) {
        for (var i = 0; i < listaToDos.length; i++) {
            if (listaToDos[i] != null && document.getElementById(i).checked) {
                if (fechaRapida == null || fechaRapida > listaToDos[i].fechaTachado) {
                    fechaRapida = listaToDos[i].fechaTachado
                    nombreTarea = listaToDos[i].nombre
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

function AgregarProyecto(nombre, descripcion) {
    
    
    listaProyectos.push({
        "nombre":nombre,
        "descripcion": descripcion,
        "todos":listaToDos
    })
    listaToDos=[]

    MostrarProyectos(nombre)
    
    
}

function MostrarProyectos(nombre){
    var nuevoDrop = document.createElement('a');
    nuevoDrop.textContent = nombre
    nuevoDrop.setAttribute('onchange')
}


function Buscar(fe){


    
}
