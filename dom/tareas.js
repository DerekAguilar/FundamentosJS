const inputTarea=document.querySelector('#inputTarea');
const btnTarea=document.querySelector('#btnTarea');
const tareas=document.querySelector('#tareas');

let counter=0;

function createAlert(message){
    /* <div class="alert alert-dark" role="alert">
        A simple dark alert—check it out!
    </div> */
    const alerta=document.createElement('div');
    alerta.classList.add('alert');
    if (counter%2===0){
        alerta.classList.add('alert-light');
    }
    else {
        alerta.classList.add('alert-dark');
    }
    counter++;
    alerta.setAttribute('role','alert');
    let buttons='<div>';
    buttons+=`<button class="btn red"></button>`;
    buttons+=`<button class="btn yellow"></button>`;
    buttons+=`<button class="btn green"></button>`;
    buttons+=`<button class="btn x">X</button>`;
    buttons+=`</div>`;
    alerta.innerHTML=`<div>${message}</div>${buttons}`;
    return alerta;
}

function addTarea(){
    const data=inputTarea.value;
    if (data){
    const alerta=createAlert(data);
    inputTarea.value='';
        tareas.appendChild(alerta);
    }
    else{
        alert('No se ha escrito una tarea aún...');
    }
}

function getButton(e){
    if(e.target.classList.contains('btn')){
        const action=e.target.classList[1];
        const alertActual=e.target.parentElement.parentElement;
        switch(action){
            case 'red':
                alertActual.classList=[];
                alertActual.classList.add('alert','alert-danger');
                break;
            case 'yellow':
                alertActual.classList=[];
                alertActual.classList.add('alert','alert-warning');
                break;
            case 'green':
                alertActual.classList=[];
                alertActual.classList.add('alert','alert-success');
                break;
            default:
                alertActual.remove();
                break;
        }
    }
}

btnTarea.addEventListener('click',addTarea);
tareas.addEventListener('click',getButton);