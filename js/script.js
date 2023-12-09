var btn = document.getElementById("btn")
var items = document.getElementById("items")

data = [
    {id:1 , name: "Iphone 14"},
    {id:2 , name: "Iphone 15"},   
    {id:3 , name: "Reno 5"},
    {id:4 , name: "Relme note"},
    {id:5 , name: "samsung 10x"}
]

function broduct(xfor){
    items.innerHTML ="";
xfor.forEach(function(elemnt){
    items.innerHTML +=  `<div onclick = deleteItems(${elemnt.id})>${elemnt.name}</div>`

})
}
window.onload = function(){
    broduct(data)
}
                btn.addEventListener( "click", addItmes)
                function addItmes(){
                    var Input = document.getElementById("Input1")
                    alert ("if you want delet click on it");
                    var lastID = data[data.length -1].id
                    data.push({id: ++lastID , name:Input.value })
                    var addItmes = data[data.length -1]
                    items.innerHTML += `<div onclick = deleteItems(${addItmes.id})>${addItmes.name}</div>`
                    Input.value = ""
                }

function deleteItems(id){
   var index = data.map(function(i){
    return i.id
   }).indexOf(id)
   if(index !== -1){
    data.splice( index, 1 )
   }
   broduct(data)
}
