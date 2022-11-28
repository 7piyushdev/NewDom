var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

// Form submit event
form.addEventListener("submit", addItem);

// delete event
itemList.addEventListener('click', removeItem)

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;

  //create new li item

  var li = document.createElement("li");
  li.className = "list-group-item";

  //Add textNode with input value

  li.appendChild(document.createTextNode(newItem));

  //create the delete button

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  deleteBtn.appendChild(document.createTextNode("X"));

  //create edit button
  var editBtn = document.createElement('button')
  editBtn.className = "btn btn-primary btn-sm rounded-0"

  editBtn.appendChild(document.createTextNode("E"))

  li.appendChild(editBtn)

  //append button to li
  li.appendChild(deleteBtn);

  //append li to list
  itemList.appendChild(li);
}

// Remove Item on delete button

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}