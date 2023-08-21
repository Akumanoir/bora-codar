const getEquation = document.querySelector("#last-calc")
const getResult = document.querySelector("#result>span")
const getNumber = [...document.querySelectorAll("button.value")]
const equal = document.querySelector("#equal")
const deleteAll = [...document.querySelectorAll("button.delete")]

deleteAll[0].addEventListener("click", clearEquation)
deleteAll[1].addEventListener("click", deleteString)

getNumber.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.value
    if (isOperator(buttonValue)) {
      handleOperatorClick(buttonValue)
    } else if (button.classList.contains("number")) {
      handleNumberClick(buttonValue)
    }

  })
})

equal.addEventListener("click", () => {
  evalueateEquation()
})

function clearEquation() {
  getResult.innerHTML = ""
  getEquation.innerHTML = ""
}

function deleteString() {
  const teste = getResult.innerHTML
  const teste2 = teste.toString().slice(0, -1)
  getResult.innerHTML = teste2
}

function isOperator(content) {
  const operators = ["+", "-", "*", "/", "%", "+/-", "."]
  if (content.includes("+/-"))
    return alert("Botão sem funcionalidade por enquanto")
  return operators.includes(content)
}

function handleOperatorClick(operator) {
  if (operator.includes("%")) {
    evalueateEquation()
    getResult.innerHTML = "0"
  } else {
    getResult.innerHTML += operator
  }
}

function handleNumberClick(number) {
  const equationContent = getEquation.innerHTML
  const resultContent = getResult.innerHTML
  const hasOperator = /[-+*/%]/.test(resultContent) // Verifica se há operadores na equação
  if (equationContent !== "" && !hasOperator) {
    clearEquation()
  }
  getResult.innerHTML += number
}

function evalueateEquation() {
  getEquation.innerHTML = getResult.innerHTML
  const result = eval(getEquation.innerHTML)
  if (result == undefined) {
    alert("Nenhum valor foi colocado")
  } else {
    getResult.innerHTML = result
  }
}