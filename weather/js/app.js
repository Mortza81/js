let temp = document.querySelector('.degree')
let city = document.querySelector('.timezone')
let unit = document.querySelector('span')
let desc = document.querySelector('.temperature-description')
let iconel = document.querySelector('.icon')
let btn = document.querySelector('#city a')
let zone=document.querySelector('.timezone')
btn.addEventListener('click', (e) => {
    let name = e.target.parentElement.children[0].value
    gettemp(name)
    e.target.parentElement.children[0].value=''
})
function geticon(icon) {
    iconel.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png">`
}
async function gettemp(c_name) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${c_name}&appid=a6e0641974af45b652539233773d2b5b`
        const response = await fetch(url)
        if(response.ok){
            const data = await response.json()
            unit.innerHTML = 'K'
            desc.innerHTML = data.weather[0].main
            geticon(data.weather[0].icon)
            temp.innerHTML = Math.round(data.main.temp)
            zone.innerHTML=c_name
        }
        else{
            alert('!نام شهر را اشتباه وارد کرده اید')
        }
}
temp.addEventListener('click', (e) => {
    if (unit.innerHTML == 'K') {
        temp.innerHTML = Math.round(temp.innerHTML - 272.15)
        unit.innerHTML = 'C'
    } else {
        let temp1 = parseInt(temp.innerHTML)
        temp.innerHTML = Math.round(temp1 + 272.15)
        unit.innerHTML = 'K'
    }
})
window.addEventListener('offline',()=>{
    alert('!اینترنت شما قطع شد‍')}
)
gettemp('tehran')