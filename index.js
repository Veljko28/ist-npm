const { evaluate } = require('mathjs')

function izracunajIzraze() {
  const izrazi = [
    { opis: 'Kvadratni koren zbira kvadrata (3^2 + 4^2)', izraz: 'sqrt(3^2 + 4^2)' },
    { opis: 'Sinus od 45 stepeni na kvadrat', izraz: 'sin(45 deg) ^ 2' },
    { opis: 'Logaritam osnova 10 od 10000', izraz: 'log(10000, 10)' },
    { opis: 'Determinanta matrice [[-1,2],[3,1]]', izraz: 'det([-1, 2; 3, 1])' },
    { opis: 'Povrsina kruga poluprecnika 5', izraz: 'pi * 5^2' },
  ]

  console.log('=== Matematicki izrazi - mathjs ===\n')

  izrazi.forEach(({ opis, izraz }) => {
    const rezultat = evaluate(izraz)
    console.log(`${opis}:`)
    console.log(`  Izraz:   ${izraz}`)
    console.log(`  Rezultat: ${rezultat}\n`)
  })
}

module.exports = { izracunajIzraze }

if (require.main === module) {
  izracunajIzraze()
}
