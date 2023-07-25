import "/node_modules/flag-icons/css/flag-icons.min.css"

export default function Option() {
  return (
    <>
      <option value="USD">
        <span class="fi fi-gr" style={{ backgroundSize: "contain",  backgroundPosition: "50%", backgroundRepeat: "no-repeat"}}>
          USD
        </span>
      </option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="BRL">BRL</option>
    </>
  )
}
