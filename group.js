const gropus_saved = JSON.parse(localStorage.getItem('groups'));
var newArr=gropus_saved
const main = document.getElementById("contenedor")



const buttonGroup= document.getElementById("button-group")
buttonGroup.onclick= function(){
    const groupElement = document.getElementById("groupsCreate")
    newArr.push(groupElement.value)
    localStorage.setItem('groups', JSON.stringify([]))
    groupElement.value=""
}
console.log(newArr)



