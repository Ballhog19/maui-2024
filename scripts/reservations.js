const reservationPromise = await fetch("../data/reservations.json")
const reservations = await reservationPromise.json()

const template = document.querySelector("#reservation-card")
const wrapper = document.createElement("div")

reservations.forEach(reservation => {
    const clone = template.content.cloneNode(true)
    clone.querySelector("h3").textContent = reservation.name

    clone.querySelector(".address").textContent = reservation.address

    const img = clone.querySelector("img")
    img.src = `../images/Reservations/${reservation.photo}`
    img.alt = reservation.name

    clone.querySelector(".date").textContent = reservation.date == undefined ? "" : reservation.date

    clone.querySelector(".attending").textContent = reservation.attending
    clone.querySelector(".description").textContent = reservation.description

    const button = clone.querySelector(".primary-btn")
    if (reservation.link == undefined) {
        button.remove()
    } else {
        button.href = reservation.link
    }

    wrapper.appendChild(clone)
});

document.querySelector(".reservations").appendChild(wrapper)