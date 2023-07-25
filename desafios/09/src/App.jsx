import "./style/App.css"
import arrow from "./assets/arrow-exchange.svg"
import chart from "./assets/chart.svg"
import Currency from "./components/currency/index"

export default function App() {
  // const options = ["USD", "EUR", "GBP", "BRL"]
  // const selectOption = document.querySelector(".select")

  // options.map((element) => {
  //   const optionElement = document.createElement("option")
  //   optionElement.setAttribute("value", `${element}`)
  //   optionElement.innerHTML = element

  //   selectOption.appendChild(optionElement)
  // })
  return (
    <>
      <main>
        <div id="conversor" className="wrapper">
          <h1>Conversor de moedas</h1>
          <div className="currency-wrapper">
            <Currency />
            <img
              src={arrow}
              alt="flecha para inverter a posição do conversor de moedas"
            />
            <Currency />
          </div>
        </div>
        <div id="exchange-rate" className="wrapper">
          <h1>Taxa de Câmbio</h1>
          <img src={chart} alt="ué" />
        </div>
      </main>
    </>
  )
}
