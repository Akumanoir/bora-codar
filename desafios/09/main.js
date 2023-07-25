const options = ["USD", "EUR", "GBP", "BRL"]
const selectOption = document.querySelector(".select")

options.map((element) => {
  const optionElement = document.createElement("option")
  optionElement.setAttribute("value", `${element}`)
  optionElement.innerHTML = element

  selectOption.appendChild(optionElement)
})
