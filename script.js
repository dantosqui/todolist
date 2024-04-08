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
        listaProyectos[nombreProyecto].todos.push({
            "nombre": taskDescription,
            "fecha": fechaDeHoy,
            "tachado": false,
            "fechaTachado": null,
            "cross": null,
            "dateOfVencimiento" : dateOfVencimiento
        })
        
        // console.log(listaProyectos)
        // listaToDosProyecto=(listaProyectos.find(i => i.nombre==nombreProyecto)).todos

        
        MostrarDesdeCero(nombreProyecto)
        /*
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

        */

    }
}
//no se si funciona esto 
function MostrarDesdeCero(listaTasks){
   
    labels =[]
    checkId=0

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
   // nuevoDrop.setAttribute('onchange', MostrarDesdeCero(nombre))
}


function Buscar(fe){

   listasConLaFechaDeVencimientoCondicionada =  listToDosProyecto.map(function (x) {
if(x.dateOfVencimiento == fe) return x
    })
    
}
