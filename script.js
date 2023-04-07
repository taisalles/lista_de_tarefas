//TO GO: criar método para salvar lista no localStorage e carregar lista já salva
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0;
function addTarefa(){
    let tarefa = input.value;

    //para inserir ícone de lixeira:  <i class="bi bi-trash"></i>
    if(tarefa !== '' && tarefa !== null && tarefa !== undefined){
        ++contador;
        let novoItem = `<div class="item" id=${contador}>
        <div class="item-icone" onclick="marcarTarefa(${contador})">
            <i id="icone_${contador}" class="bi bi-circle"> </i>
        </div>
        
        <div class="item-nome" onclick="marcarTarefa(${contador})">
            ${tarefa}
        </div>

        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete">excluir</button>
        </div>
    </div>`;

    main.innerHTML += novoItem;
    input.value = '';
    input.focus();
    }
}

function marcarTarefa(id){
    var tarefa = document.getElementById(id);
    var classe = tarefa.querySelector('.item');
    var icone = document.getElementById('icone_' + id);
    if(tarefa.classList.contains('clicado')){
        tarefa.classList.remove('clicado');
        icone.classList.remove('bi-check-circle-fill');
        icone.classList.add('bi-circle');
   
    }else{
        tarefa.classList.add('clicado');
        icone.classList.remove('bi-circle');
        icone.classList.add('bi-check-circle-fill');

       /* INSERINDO TAREFA NO FINAL DA LISTA
       tarefa.parentNode.appendChild(tarefa); 
       */
    }
}


function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

input.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
});

