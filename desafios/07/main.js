let btnMainToggle = [...document.querySelectorAll('button.btn')]

for (let i in btnMainToggle) {
  btnMainToggle[i].addEventListener('click', () => {
    let grid = document.querySelector("div#grid-cards-container")
    let map = document.querySelector('div#map')
    let main = document.getElementsByTagName('main')[0]
    let classes = btnMainToggle[i].classList

    switch (btnMainToggle[i]) {
      case btnMainToggle[0]: 
      grid.classList.remove('toggle')
      map.classList.add('toggle')
      btnMainToggle[0].classList.replace("secondary", "primary")
      btnMainToggle[1].classList.replace("primary", "secondary")
      break
      case btnMainToggle[1]: 
      grid.classList.add("toggle")
      map.classList.remove("toggle")
      btnMainToggle[0].classList.replace("primary", "secondary")
      btnMainToggle[1].classList.replace("secondary", "primary")
      main.firstElementChild.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      break
    }
  })
}