function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(day, date, games) {
  delay = delay + 0.6
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>
        ${day} <span>${date}</span>
      </h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "21/11",
    "segunda",
    createGame("senegal", "13:00", "netherlands")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudi_arabia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("germany", "07:00", "japan") +
      createGame("spain", "13:00", "costa_rica") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "16:00", "serbia") +
      createGame("uruguay", "10:00", "south_korea") +
      createGame("portugal", "13:00", "ghana")
  ) +
  createCard("25/11", "sexta", createGame("netherlands", "07:00", "ecuador"))
createCard(
  "26/11",
  "sábado",
  createGame("france", "13:00", "denmark") +
    createGame("argentina", "16:00", "mexico")
) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "07:00", "costa_rica") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))
