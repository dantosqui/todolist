var listaProyectos = []
var listaToDos = []
var checkId = 0
var labels = []
var tachados=[]

function AgregarElemento(taskDescription,dateOfVencimiento) {
    if(listaProyectos.length == 0){
        alert("Necesitas crear un proyecto para crear una tarea")
        return;
    }else if(listaProyectos[document.getElementById("dD").value].todos.some(x => x.nombre == taskDescription) && listaProyectos[document.getElementById("dD").value].todos.some(x => x.dateOfVencimiento == dateOfVencimiento)){
        alert("Una tarea con el mismo nombre y fecha de vencimiento ya existe")
        return;
    }//decime cuando pueda probar el codigo RIGHT HERE RIGHT NOW ok listo
    if(dateOfVencimiento == '' || taskDescription==''){
        alert("Debe insertar una fecha de vencimiento y nombre")
        return
    }
    if (!YaExiste(taskDescription)) {
            
        
        iD=document.getElementById("dD").value
        const fechaDeHoy = new Date().toLocaleString("en-ES") //
        listaProyectos[iD].todos.push({
            "nombre": taskDescription,
            "fecha": fechaDeHoy,
            "fechaTachado": null,
            "cross": null,
            "tachado":false,
            "dateOfVencimiento" : dateOfVencimiento,
            "checkbox":0
        })
        tachados.push(false)
        
        MostrarDesdeCero(listaProyectos[iD].todos)
        
    }
}

function MostrarDesdeCero(listaTasks){ //hacer que muestre el nombre y descripcion del proyecto cuando se cambia pero no cuando se busca no se suerte con eso lol
   
    labels =[]
    checkId=0
    console.log("typof: ", typeof listaTasks)
    lista=listaTasks
    if (typeof listaTasks != "object"){
        listaTasks=listaProyectos[document.getElementById("dD").value].todos
    }
    console.log("hola")
    document.getElementById("listaActual").innerHTML=""
    listaTasks.forEach(i => {
        
        var task = document.getElementById("listaActual").appendChild(document.createElement("li"))
        task.id = `li_${checkId}`

        //mas adelante: comentarios para que el codigo sea lejible
        var checkbox = task.appendChild(document.createElement("input")) //se crea la checkbox y se le ponen los atributos
        checkbox.type = "checkbox"
        checkbox.id = checkId
        i.checkbox = checkId
        
        checkbox.setAttribute("onclick", `Tachar(${i.checkbox},${JSON.stringify(i)},${JSON.stringify(listaProyectos[document.getElementById("dD").value].todos)})`);
        
        var label = task.appendChild(document.createElement("label")) //le creamos una label
        label.innerHTML = i.nombre + " - Vencimiento: " + i.dateOfVencimiento
        labels.push(label)


        var cross = task.appendChild(document.createElement("button")) //le ponemos el borrar
        cross.innerHTML = "x"
        cross.style.color = "red"
        i.cross = cross
        cross.setAttribute("onclick", `BorrarTask(${checkbox.id},${JSON.stringify(i.nombre)},${JSON.stringify(i.dateOfVencimiento)})`);
        checkId++ //cada task tiene un checkid, se reinicia cuando mostramos de nuevo
        BuscarTachar(i.checkbox,JSON.stringify(i),JSON.stringify(listaProyectos[document.getElementById("dD").value].todos))
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
    var menorFecha = 0
    var fechaDate
    var fechaVenc
    var diaDate
    var mesDate
    var anioDate
    var diaVenc
    var mesVenc
    var anioVenc
    var ddd = 0
    var j = 1
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
            console.log("ppppppppp" + proyecto.todos[i].fecha)
            // fechaDate = new Date(proyecto.todos[i].fecha)
            // diaDate = fechaDate.getDate();
            // mesDate = fechaDate.getMonth() + 1
            // anioDate = fechaDate.getFullYear()

            fechaVenc = new Date(proyecto.todos[i].dateOfVencimiento)
            diaVenc = fechaVenc.getDate();
            mesVenc = fechaVenc.getMonth() +1
            anioVenc = fechaVenc.getFullYear()

            fechaVenc2 = new Date(proyecto.todos[j].dateOfVencimiento)
            diaVenc2 = fechaVenc2.getDate();
            mesVenc2 = fechaVenc2.getMonth() +1
            anioVenc2 = fechaVenc2.getFullYear()

            
            if(anioVenc > anioVenc2){
                menorFecha = proyecto.todos[j].dateOfVencimiento
                
            }else if(anioVenc < anioVenc2){
                menorFecha = proyecto.todos[i].dateOfVencimiento
                nombreTarea = proyecto.todos[i].nombre
            }else{
            if(mesVenc > mesVenc2){
                menorFecha = proyecto.todos[j].dateOfVencimiento
                nombreTarea = proyecto.todos[j].nombre
            }else if(mesVenc < mesVenc2){
                menorFecha = proyecto.todos[i].dateOfVencimiento
                nombreTarea = proyecto.todos[i].nombre
            }else{
                if(diaVenc > diaVenc2){
                    menorFecha = proyecto.todos[j].dateOfVencimiento
                    nombreTarea = proyecto.todos[j].nombre
                }else{
                    menorFecha = proyecto.todos[i].dateOfVencimiento
                    nombreTarea = proyecto.todos[i].nombre
                }
            }
        }

            console.log(typeof proyecto.todos[i].fecha + " typeof de la fecha");
            console.log("fecha en numero: " + menorFecha)


            

            // if(menorFecha < Number(proyecto.todos[i].dateOfVencimiento) - Number(proyecto.todos[i].fecha))
            // {
            //     console.log("fsjsfljfosjfsklfse")
            //     menorFecha = Number(proyecto.todos[i].dateOfVencimiento) - Number(proyecto.todos[i].fecha)
            //     nombreTarea = proyecto.todos[i].nombre
            //     ddd = i 
            // }
            console.log(menorFecha)

            // if (proyecto.todos[i] != null && document.getElementById(i).checked) {
            //     // if (proyecto.todos[i].fecha == null || proyecto.todos[i].fecha > listaToDos[i].fechaTachado) {
            //     //     fechaRapida = proyecto.todos[i].fechaTachado
            //     //     nombreTarea = proyecto.todos[i].nombre
            //     //     console.log("Fecha rapida: " + fechaRapida + nombreTarea)
            //     // }
            //     console.log("cccccc")
            //     console.log("fecha vencimiento " + proyecto.todos[i].dateOfVencimiento)
            //     console.log("sdsdj")
            //     console.log("fecha tachado " + proyecto.todos[i].fechaTachado)
            //     if(proyecto.todos[i].dateOfVencimiento.toLocaleString("es-ES") - proyecto.todos[i].fechaTachado.toLocaleString("es-ES") < fechaRapida.toLocaleString("es-ES")){
            //         fechaRapida = proyecto.todos[i].dateOfVencimiento.toLocaleString("es-ES") - proyecto.todos[i].fechaTachado.toLocaleString("es-ES")
            //         nombreTarea = proyecto.todos[i].nombre
            //         console.log("Fecha rapida: " + fechaRapida + nombreTarea)
            //     }
            // }
            j--;
        }
        console.log("la fecha mas rapida en completarse " + menorFecha)

        if (menorFecha != null) {
            text.innerHTML = `La tarea "${nombreTarea}" fue la que mas rapido se realizó, ${menorFecha}`
        } else {
            text.innerHTML = `No hay ninguna tarea tachada`
        }
    } else {
        text.innerHTML = `No hay ninguna tarea`
    }
}

function BorrarTask(idCheck, nombreNow, fVNow) {
    console.log(idCheck)
    document.getElementById(`li_${idCheck}`).remove()
    listaProyectos[document.getElementById("dD").value].todos = listaProyectos[document.getElementById("dD").value].todos.filter(x=>x.nombre!=nombreNow && x.dateOfVencimiento!=fVNow)
    console.log(listaProyectos[document.getElementById("dD").value].todos)
}
function BuscarTachar(idCheck){
    proy = lista[idCheck]
    if (proy.tachado) {
        labels[idCheck].innerHTML = proy.nombre + ` - Vencimiento: ${proy.dateOfVencimiento} - Tachado: ${proy.fechaTachado}`
        console.log(proy.tachado)
        document.getElementById(idCheck).checked = true
        console.log(proy.tachado)

    } 
    else {
        labels[idCheck].innerHTML = proy.nombre + ` - Vencimiento: ${proy.dateOfVencimiento}`
        document.getElementById(idCheck).checked = false
    }   
}

function Tachar(idCheck) {
    proy = lista[idCheck]
    console.log(proy)
    proy.fechaTachado = new Date().toLocaleString("en-EN")
    proy.tachado = !proy.tachado
    if (proy.tachado) {
        labels[idCheck].innerHTML = proy.nombre + ` - Vencimiento: ${proy.dateOfVencimiento} - Tachado: ${proy.fechaTachado}`
        console.log(proy.tachado)
        document.getElementById(idCheck).checked = true
        console.log(proy.tachado)

    } 
    else {
        labels[idCheck].innerHTML = proy.nombre + ` - Vencimiento: ${proy.dateOfVencimiento}`
        document.getElementById(idCheck).checked = false
    }   
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
    if(listaProyectos.length==0) {alert("No hay ningun proyecto");return}
if(listaProyectos[document.getElementById("dD").value].todos.length==0) {alert("No hay tareas para buscar");return}
    listasConLaFechaDeVencimientoCondicionada =  listaProyectos[document.getElementById("dD").value].todos.filter(function (x) { if(x.dateOfVencimiento == fe) {return x}})
    console.log("h") 
    for(var i=0; i< listasConLaFechaDeVencimientoCondicionada.length; i++){
        console.log(listasConLaFechaDeVencimientoCondicionada[i].nombre)
    }
    console.log(listasConLaFechaDeVencimientoCondicionada)
    MostrarDesdeCero(listasConLaFechaDeVencimientoCondicionada)
}
function DesBuscar(){
    if(listaProyectos.length==0) {alert("No hay ningun proyecto");return}
    MostrarDesdeCero(listaProyectos[document.getElementById("dD").value].todos)
     
 }