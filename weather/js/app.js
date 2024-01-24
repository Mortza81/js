let temp=document.querySelector('.degree')
let city=document.querySelector('.timezone')
let unit=document.querySelector('span')
let desc=document.querySelector('.temperature-description')
let iconel=document.querySelector('.icon')
function geticon(icon){
    iconel.innerHTML+=`<img src="https://openweathermap.org/img/wn/${icon}@2x.png">`
}
async function gettemp(){
    url='https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=a6e0641974af45b652539233773d2b5b'
    const response=await fetch(url)
    const data=await response.json()
    temp.innerHTML=Math.round(data.main.temp)
    unit.innerHTML='K'
    desc.innerHTML=data.weather[0].main
    geticon(data.weather[0].icon)
}
temp.addEventListener('click',(e)=>{
    if(unit.innerHTML=='K'){
        temp.innerHTML=Math.round(temp.innerHTML-272.15)
        unit.innerHTML='C'
    } else{
        let temp1=parseInt(temp.innerHTML)
        temp.innerHTML=Math.round(temp1+272.15)
        unit.innerHTML='K'
    }
})
gettemp()