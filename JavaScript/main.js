function showNavbar(){
 var icon = document.getElementById("navbar")
 
 icon.onclick = function(){
  document.querySelector(".navbar__menu").classList.toggle("none")
 }
  
 const list = document.querySelector(".navbar__menu-list")
  list.onclick = ()=>{
  document.querySelector(".navbar__menu").classList.toggle("none")
  }
 }
showNavbar()
function renderSkill(array){
var htmls  =[]
for (var value of array){
htmls.push(` 
<div data-aos="flip-up" data-aos-duration="3000" class="skill__item">
         <div class="skill__item-name">
           <i class="${value.icon}"></i>${value.name}
         </div>
         <div class="img">
           <img src="./workspace/img/${value.image}" alt="" />
         </div>
         </div>`)  
}
var skillItem = document.querySelector(".skill__list")
skillItem.innerHTML = htmls.join("")
}
renderSkill(data.certificate)
function renderMXH(array){
 var item = document.querySelector(".mxh__list")
 var htmls =[]
 
 for (var value of array){
   htmls.push(`
  <div data-aos="fade-right"data-aos-duration="3000"  class="mxh__list-item">
        <a href="${value.link}" >
          <div style="color:${value.color}" class="mxh-icon">
            <i class="${value.icon}"></i>
          </div>
          <div class="mxh-name">
            <span>${value.name}</span>
            <span class="mxh-name-link">${value.url}</span>
         </a>
          </div>
        </div> 
   `)
 }
 item.innerHTML= htmls.join("")
}
renderMXH(data.mxh)

function renderInfo(array){
  const item = document.querySelector(".info__list")
  var htmls = []
  for (var value of array){
    if (value.org){
     htmls.push(`
     <li data-aos="fade-up" data-aos-duration="3000" class="info__list-item">
             <a class="info__list-item-link" href="${value.link}">
            <i class="${value.icon}"></i> ${value.key}: ${value.value}</a>
          </li>
     `)
    }else{
      htmls.push(`
     <li data-aos="fade-up" data-aos-duration="3000"
    class="info__list-item">
            <i class="${value.icon}"></i> ${value.key}: ${value.value}
          </li>
     `)
    }
  }
  
  item.innerHTML= htmls.join("")
}

renderInfo(data.info)
