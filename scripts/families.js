const familyPromise = await fetch("../data/families.json")
const families = await familyPromise.json()

const template = document.querySelector("#people-card")
const wrapper = document.createElement("div")

families.forEach((family, index) => {
    const clone = template.content.cloneNode(true)

    clone.querySelector(".names").textContent = family.name

    const img = clone.querySelector("img")
    img.src = `../images/people/${family.photo}`
    img.alt = family.name

    clone.querySelector(".arrival-flight").append(family.arrivalFlight)
    clone.querySelector(".arrival-date").textContent = family.arrivalDate
 
    clone.querySelector(".departure-flight").append(family.departureFlight)
    clone.querySelector(".departure-date").textContent = family.departureDate

    wrapper.appendChild(clone)
});

document.querySelector(".people-wrapper").appendChild(wrapper)



function landingIcon() {
    const landed = document.createElement("i")
    landed.classList.add("fa-solid", "fa-plane-departure")
    return landed
}

function takeOffIcon() {
    const takeOff = document.createElement("i")
    takeOff.classList.add("fa-solid", "fa-plane-departure")
    return takeOff
}