const activityPromise = await fetch("../data/activities.json")
const activities = await activityPromise.json()

const template = document.querySelector("#animal-card")
const wrapper = document.createElement("div")

activities.forEach(activity => {
    const clone = template.content.cloneNode(true)
    clone.querySelector("h3").textContent = activity.name

    const img = clone.querySelector("img")
    img.src = `../images/activities/${activity.photo}`
    img.alt = activity.name

    clone.querySelector(".date").textContent = activity.date == undefined ? "" : `${activity.date}`
    
    clone.querySelector(".attending").textContent = activity.attending
    clone.querySelector(".description").textContent = activity.description

    const button = clone.querySelector(".primary-btn")
    if (activity.link == undefined) {
        button.remove()
    } else {
        button.href = `${activity.link}`
    }
    

    wrapper.appendChild(clone)
});

document.querySelector(".animals").appendChild(wrapper)

function filteractivitys(species) {
    const allactivitys = document.querySelectorAll(".animal-card")
    if (species == "all") {
        allactivitys.forEach(el => {
            el.style.display = ""
        })
    } else {
        allactivitys.forEach(el => {
            if (el.querySelector(".species").textContent == species) {
                el.style.display = ""
            } else {
                el.style.display = "none"
            }
        })
    }
}