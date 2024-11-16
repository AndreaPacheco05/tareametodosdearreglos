let tareas = [
    { id: 16, agregada: "Hacer mercado", completada: true },
    { id: 60, agregada: "Estudiar para la prueba", completada: false },
    { id: 24, agregada: "Sacar a pasear a Tobby", completada: false }
];

const inputTareaNueva = document.querySelector("#tareaNueva");
const btnAgregar = document.querySelector("#agregar");
const lista = document.querySelector("#lista");
const total = document.querySelector("#total");
const realizadas = document.querySelector("#realizadas");

function actualizarLista() {
    lista.innerHTML = ""; 
    tareas.forEach((tarea, index) => {
        const listaa = document.createElement("li");
        listaa.innerHTML = `
            <span>${tarea.id}</span>
            <span class="tareas">${tarea.agregada}</span>
            <span>
                <button class="btn-borrar">X</button>
                <button class="btn-cambiar">✓</button>
            </span>`;  

        const btnBorrar = listaa.querySelector(".btn-borrar");
        btnBorrar.addEventListener("click", () => borrarTarea(index));
        const btnCambiar = listaa.querySelector(".btn-cambiar");
        btnCambiar.addEventListener("click", () => cambiarCheck(index));
        
        if (tarea.completada) {
            listaa.classList.add("realizada")
        ;}
        lista.appendChild(listaa);
    });
    total.textContent = tareas.length;
    realizadas.textContent = tareas.filter(c => c.completada).length;
}

btnAgregar.addEventListener("click", agregarTarea);
actualizarLista();

function agregarTarea() {
    const agregada = inputTareaNueva.value.trim();
    if (agregada === "") {
        alert("No ingresó una tarea, agreguela xfis :D"); return;}

    const tareaNueva = {
        id: Date.now(),
        agregada: agregada,
        completada: false};
    tareas.push(tareaNueva); 
    inputTareaNueva.value = ""; 
    actualizarLista(); 
}
function borrarTarea(index) {
    tareas.splice(index, 1);
    actualizarLista();
}
function cambiarCheck(index) {
    tareas[index].completada = !tareas[index].completada;
    actualizarLista();
}


