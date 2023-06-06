
// document.getElementById("count").innerText = 5

let countEl = document.getElementById("count-el")
let count = 0
let countSave = document.getElementById("count-save")

function increment() {
    count += 1
    countEl.innerText = count
}

function decrease() {
    count -= 1
    countEl.innerText = count
}

function save() {
    let countString = count + " - "
    countSave.textContent += countString 
    countEl.textContent = 0
    count = 0
}
