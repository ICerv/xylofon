console.log('Funguju')
const nadpis = document.querySelector('h1')
const kameny = document.querySelectorAll('.kamen')

const prehrajTon = (kamen) => {
  const ton = kamen.textContent
  nadpis.textContent = ton

  const zvuk = new Audio(`tony/${ton}.mp3`)
  zvuk.play()
}

const naStisknuti = (event) => {
  prehrajTon(event.target)
}

kameny.forEach((kamen) => {
  kamen.addEventListener('click', naStisknuti)
})

//Bonus
const naKlavesu = (event) => {
  const { code } = event
  if (code.startsWith('Digit')) {
    const cislo = parseInt(code.substring(5))
    if (cislo >= 1 && cislo <= kameny.length) {
      prehrajTon(kameny[cislo - 1])
    }
  }
}

document.addEventListener('keydown', naKlavesu)