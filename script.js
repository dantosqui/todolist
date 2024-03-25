

var listaToDos = []
var checkId =0
var labels = []

function AgregarElemento(taskDescription){
    laLista=document.getElementById("lalista")

    const fechaDeHoy= new Date().toLocaleString("es-ES")
    listaToDos.push({
        "nombre":taskDescription,
        "fecha":fechaDeHoy,
        "tachado":false,
        "fechaTachado":null,
        "cross":null
    })
    
        var task = document.getElementById("lalista").appendChild(document.createElement("li"))
        
        var checkbox = task.appendChild(document.createElement("input"))
        checkbox.type = "checkbox"
       checkbox.id = checkId 
       checkbox.setAttribute("onclick",`Tachar(${checkbox.id})`);
       checkbox.setAttribute("onmouseover",`MostrarFecha(${checkbox.id})`);
       checkbox.setAttribute("onmouseout",`SacarFecha(${checkbox.id})`);
        var label= task.appendChild(document.createElement("label"))
        label.innerHTML=listaToDos[checkId].nombre
        labels.push(label)
        var cross = task.appendChild(document.createElement("button"))
        cross.innerHTML = "x"
        cross.style.color = "red"
       // cross.style.marginLeft = "100px"
       // label.style.marginLeft = "100px"
        listaToDos[checkId].cross = cross
        cross.setAttribute("onclick",`BorrarTask(${checkbox.id})`);
        checkId++
    
    
    
    
}

function TareaMasRapidaEnRealizarse(){
    var fechaRapida
    var nombreTarea
    for(var i = 0; i<listaToDos.length; i++){
        if(document.getElementById(i).checked){
           if(fechaRapida == null || fechaRapida > listaToDos[i].fechaTachado){
            fechaRapida = listaToDos[i].fechaTachado
            nombreTarea = listaToDos[i].nombre
           }
        }
    }
    
    var text = document.getElementById("fmt")
    text.innerHTML = ""
    text.innerHTML = `La tarea "${nombreTarea}" fue la que mas rapido se realizó, el dia ${fechaRapida.toLocaleString("es-ES")}`

}
function BorrarTask(idCheck){
    
    delete listaToDos[idCheck]
}

function Tachar(idCheck){
    listaToDos[idCheck].fechaTachado = new Date().toLocaleString("es-ES")
    if(document.getElementById(idCheck).checked){
         labels[idCheck].innerHTML=listaToDos[idCheck].nombre.strike() + ` - ${listaToDos[idCheck].fechaTachado}`
         
    }else{
        labels[idCheck].innerHTML=listaToDos[idCheck].nombre + ` - ${listaToDos[idCheck].fecha}`
    }
}
function MostrarFecha(idCheck){
    listaToDos[idCheck].cross.style.visibility = "hidden"
    if(labels[idCheck].firstElementChild)
    labels[idCheck].innerHTML += ` - ${listaToDos[idCheck].fechaTachado}`
    else
    labels[idCheck].innerHTML += ` - ${listaToDos[idCheck].fecha}`
}
function SacarFecha(idCheck){
    listaToDos[idCheck].cross.style.visibility = "visible"
    if(labels[idCheck].firstElementChild)
    labels[idCheck].innerHTML = listaToDos[idCheck].nombre.strike()
    else
    labels[idCheck].innerHTML = listaToDos[idCheck].nombre
}

//What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.


// ⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣶⣿⣿⣿⣿⣿⣿⣿⣶⣦⣀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⢠
// ⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣛⣻⣿⣿⣟⣿⣿⣿⣷⠀⠀⠀
// ⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣫⣽⣾⣻⣾⣿⣿⣿⣿⡿⣿⣿⠀⠀⠀
// ⠀⠀⠀⢰⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠻⡿⠿⠟⠛⣟⣿⣽⠀⠀⠀
// ⠀⠀⠀⠸⣿⣿⣿⣷⣿⣿⣿⣿⡿⠍⠈⠀⠁⣴⡆⠀⠀⠠⢭⣮⣿⡶⠀⠀
// ⠀⡴⠲⣦⢽⣿⣿⣿⣿⣿⣟⣩⣨⣀⡄⣐⣾⣿⣿⣇⠠⣷⣶⣿⣿⡠⠁⠀
// ⠀⠃⢀⡄⠀⢻⣿⣿⣿⣿⣽⢿⣿⣯⣾⣿⣿⣿⣿⣿⢿⣿⣿⡟⣿⠀⠀⠀
// ⠀⠀⠣⠧⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢸⣿⠿⠿⠿⣧⠙⣿⣿⡿⠀⠀⠀
// ⠀⠀⠀⠁⠼⣒⡿⣿⣿⣿⣿⣿⣿⣿⣠⣬⠀⠀⠀⠀⣾⣷⡈⣿⡇⠀⠀⠀
// ⠀⠀⠀⠀⠀⠉⢳⣿⣿⣿⣿⣿⣿⣿⢟⠗⠼⠖⠒⠔⠉⠉⠻⣿⠇⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠈⣻⡿⣿⣿⣿⣿⡿⡀⣤⡄⠸⣰⣾⡒⣷⣴⣿⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠂⢸⡗⡄⠘⠭⣭⣷⣿⣮⣠⣌⣫⣿⣷⣿⣿⠃⠀⠈⠀⠀
// ⠀⠀⠀⠀⠀⠈⠀⢸⣿⣾⣷⣦⡿⣿⣿⣿⡿⢻⠞⣹⣿⣿⠏⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⢘⠀⠘⢻⡿⢿⣋⣤⣤⠌⠉⠛⠛⠀⠈⠉⠁⠀⠀⠀⠀⠀⡀