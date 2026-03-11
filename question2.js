document.getElementById("add").addEventListener("click", function(){

    let input = document.getElementById("item").value;
 
    if(input == ""){
        alert("please fill in the field before you click the add button")
        return;
    }

    let li = document.createElement("li");
    li.textContent = input;

    document.getElementById("list").appendChild(li);
    document.getElementById("item").value = "";

    style()

})

/*document.getElementById("remove").addEventListener("click", function(){
    list.remove();
})*/
let removedItems = 0;
document.getElementById("remove").addEventListener("click", function(){

    let itemToRemove = document.getElementById("item").value;
    let listItems = document.querySelectorAll("#list li");

    for(let i = 0; i < listItems.length; i++){

        if(listItems[i].textContent.toLowerCase() === itemToRemove.toLowerCase()){
            listItems[i].remove();
            removedItems++;
            break;
        }

    }

    let itemRemoved = document.createElement("p");
    itemRemoved.textContent = `${itemToRemove}`;
    itemRemoved.style.color = "red";
    itemRemoved.style.fontWeight = "bold";
    document.body.appendChild(itemRemoved);

    let numberOfDeletedItems = document.createElement("p");
    numberOfDeletedItems.textContent = `(${removedItems}) item(s) removed.`;
    numberOfDeletedItems.style.color = "green";
    document.body.appendChild(numberOfDeletedItems);

    document.getElementById("item").value = "";
    
    style()
});

function style(){
    let items = document.querySelectorAll("#list li");
    for(let i = 0; i < items.length;i++){
        items[i].style.background = "white";
        if((i+1)%2 == 0){
            items[i].style.background = "yellow"
        }
    }
}


