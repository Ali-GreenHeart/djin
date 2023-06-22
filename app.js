const djin = document.querySelector('.djin')
const fetched = document.querySelector('.fetched')
const answer = document.getElementById('answer')
const image = document.getElementById('image')
const audio = document.querySelector('audio')

let mesaj = ''
let djinCalled = false


window.addEventListener("keydown", (e) => {
    mesaj += e.key
    if (mesaj === 'djin') {
        djin.style.display = 'block'
        mesaj = ''
        djinCalled = true
    } else if (mesaj === 'murad') {
        if (djinCalled) {
            fetched.style.display = 'block';
            answer.textContent = 'Buyur, bu da Murad abi'
            image.src = "./murad.png"
        } else {
            alert('Birinci djin-i cagir')
        }
        mesaj = ''
    } else if (mesaj === 'ali') {
        if (djinCalled) {
            fetched.style.display = 'block'
            answer.textContent = 'Neynirsene alini, al!'
            image.src = "./lion.jpg"
        } else {
            alert('Birinci djin-i cagir')
        }
        mesaj = ''
    } else if (mesaj === 'music') {
        if (djinCalled) {
            audio.style.display = 'block'
            audio.src = './qruz.mp3'
        } else {
            alert('Birinci djin-i cagir')
        }
        mesaj = ''
    }
    console.log(mesaj)
})


window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        mesaj = ''
    }
})
