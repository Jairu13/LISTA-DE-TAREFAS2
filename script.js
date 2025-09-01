//estado da aplicação
const tarefas = []

// ALTERADORES DE ESTADO DA APLICAÇÃO
function add() {
    const input = document.querySelector("input")
    const tarefa = input.value
    
    if (tarefa !== null && tarefa.trim() !== "")
    tarefas.push(tarefa)
    input.value = ""
    render()
}

function limpar(){
    tarefas.length = 0
    render()
}

function editar(index) {
    const novoTexto = prompt("modificar tarefa:", tarefas[index])
    if (novoTexto !== null && novoTexto.trim() !== "") {
        tarefas[index] = novoTexto.trim()
        render()
    }

}

function excluir(index) {
    tarefas.splice(index, 1)
    render()
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

    console.log(tarefas)
    tarefas.forEach(function (tarefa, index) {
        const li = document.createElement("li")

        const span = document.createElement("span")
        span.innerText = tarefa


        const btneditar = document.createElement("button")
        btneditar.innerText = "Editar"
        btneditar.onclick = () => editar(index)

        const btnexcluir = document.createElement("button")
        btnexcluir.innerText = "excluir"
        btnexcluir.onclick = () => excluir(index)
        btnexcluir.id = "btnexluir"


        li.appendChild(span)
        li.appendChild(btneditar)
        li.appendChild(btnexcluir)
        ul.appendChild(li)
    })



}

// iniciar
render()