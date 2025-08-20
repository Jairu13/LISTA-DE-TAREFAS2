//estado da aplicação
const tarefas = []

// ALTERADORES DE ESTADO DA APLICAÇÃO
function add() {
    const input = document.querySelector("input")
    const tarefa = input.value
    tarefas.push(tarefa)
    input.value = ""
    render()
}

function limpar(){
    tarefas.length = 0
    tarefas.push()
    render()
}

function editar(index) {
    const novoTexto = prompt("modificar tarefa:", tarefas[index])
    if (novoTexto !== null && novoTexto.trim() !== "") {
        tarefas[index] = novoTexto.trim()
        render()
    }

}

// mostrar estado na tela
function render() {
    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    
    if (tarefas.length == 0) {
    const vazio = document.createElement("vazio")
    vazio.innerText = "não a tarefas"
    ul.appendChild(vazio)

    }

    tarefas.forEach(function (tarefa, index) {
        const li = document.createElement("li")

        const span = document.createElement("span")
        span.innerText = tarefa


        const btneditar = document.createElement("button")
        btneditar.innerText = "Editar"
        btneditar.onauxclick = () => editar(index)
      

        li.appendChild(span)
        li.appendChild(btneditar)
        ul.appendChild(li)
    })



}

// iniciar
render()