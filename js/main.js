const kitchens =       ["Модульные кухни", "Готовые комплекты", "Маленькие кухни", "Угловые кухни",
                        "Кухонные уголки", "Столы кухонные", "Стулья для кухни", "Комплектующие"];
const livingRooms =    ["Готовые комплекты", "Маленькие гостинные", "С камином", "Комплектующие"];
const bedrooms =       ["Готовые комплекты", "Маленькие спальни", "Шкаф-кровать", "Комплектующие"];
const halls =          ["Готовые комплекты", "Комплектующие"];
const wardrobs =       ["Шкаф для одежды", "Шкаф для поделок", "Детали"];
const childrenRooms =  ["Готовые комплекты", "Игрушки", "Кровати", "Наклейки"];
const sofas =          ["Широкие", "Складные", "С подушками"];

var hotbares = document.getElementById("hotbares");


function createHotbar(type, name){
    name += "__hotbar";
    var resultList = "";
    for(let i in type){
        resultList += `<li>${type[i]}</li>`;
    }
    hotbares.insertAdjacentHTML('beforeend', `<div class=\"col ${name} invisible-100\">  <ul>  ${resultList}  </ul>  </div>`);
}


// on off
function onOffKitchen(){
    if(hotbares.children[0].classList.contains("invisible-100")){
        hotbares.children[0].classList.remove("invisible-100");
    }
    else{
        hotbares.children[0].classList.add("invisible-100");
    }
}

function onOfflivingRoom(){
    if(hotbares.children[1].classList.contains("invisible-100")){
        hotbares.children[1].classList.remove("invisible-100");
    }
    else{
        hotbares.children[1].classList.add("invisible-100");
    }
}

function onOffBedroom(){
    if(hotbares.children[2].classList.contains("invisible-100")){
        hotbares.children[2].classList.remove("invisible-100");
    }
    else{
        hotbares.children[2].classList.add("invisible-100");
    }
}

function onOffHall(){
    if(hotbares.children[3].classList.contains("invisible-100")){
        hotbares.children[3].classList.remove("invisible-100");
    }
    else{
        hotbares.children[3].classList.add("invisible-100");
    }
}

function onOffWardrobe(){
    if(hotbares.children[4].classList.contains("invisible-100")){
        hotbares.children[4].classList.remove("invisible-100");
    }
    else{
        hotbares.children[4].classList.add("invisible-100");
    }
}

function onOffChildrenRoom(){
    if(hotbares.children[5].classList.contains("invisible-100")){
        hotbares.children[5].classList.remove("invisible-100");
    }
    else{
        hotbares.children[5].classList.add("invisible-100");
    }
}

function onOffSofa(){
    if(hotbares.children[6].classList.contains("invisible-100")){
        hotbares.children[6].classList.remove("invisible-100");
    }
    else{
        hotbares.children[6].classList.add("invisible-100");
    }
}

createHotbar(kitchens, "kitchen");
createHotbar(livingRooms, "livingRoom");
createHotbar(bedrooms, "bedroom");
createHotbar(halls, "hall");
createHotbar(wardrobs, "wardrobe");
createHotbar(childrenRooms, "childrenRoom");
createHotbar(sofas, "sofa");
createHotbar([], "");


document.getElementById("kitchen__navbar").addEventListener("click", onOffKitchen);
document.getElementById("living_room__navbar").addEventListener("click", onOfflivingRoom);
document.getElementById("bedroom__navbar").addEventListener("click", onOffBedroom);
document.getElementById("hall__navbar").addEventListener("click", onOffHall);
document.getElementById("wardrobe__navbar").addEventListener("click", onOffWardrobe);
document.getElementById("children_room__navbar").addEventListener("click", onOffChildrenRoom);
document.getElementById("sofa__navbar").addEventListener("click", onOffSofa);
