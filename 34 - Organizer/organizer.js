const botonAgregarTarea = document.querySelector('.add-items');
const listaDeTareas = document.querySelector('.tasks');
const tareas = JSON.parse(localStorage.getItem("items")) || [];

function agregarTarea(e) {
    e.preventDefault();
    const text = (this.querySelector("[name=item]")).value;

    const tarea = {
        text,
        done: false
    };

    tareas.push(tarea);
    popularListaDeTareas(tareas, listaDeTareas);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    this.reset();
}

function popularListaDeTareas(tareas = [], listaDeTareas) {
    listaDeTareas.innerHTML = tareas.map((tarea, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${tarea.done ? "checked" : "" }>
            <label for="item${i}">${tarea.text}</label>
            <button class="btn-delete">Borrar tarea</button>
        </li>
        `;
    }).join("");
}

function toggle(e) {
    if(!e.target.matches("input")) return;
    const element = e.target;
    const indice = element.dataset.index;
    
    tareas[indice].done = !tareas[indice].done;

    localStorage.setItem("tareas", JSON.stringify(tareas));
    popularListaDeTareas(tareas, listaDeTareas);
}

botonAgregarTarea.addEventListener("submit", agregarTarea);
listaDeTareas.addEventListener("click", toggle);
popularListaDeTareas(tareas, listaDeTareas);