var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);

// delete event
itemList.addEventListener("click", removeItem);

//filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;
  var newDescription = document.getElementById("description").value;

  localStorage.setItem('item', newItem)
  localStorage.setItem('description', newDescription)

  //create new li item

  var li = document.createElement("li");
  li.className = "list-group-item";

  //Add textNode with input value

  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newDescription));

  //create the delete button

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  deleteBtn.appendChild(document.createTextNode("X"));

  //create edit button
  var editBtn = document.createElement("button");
  editBtn.className = "btn btn-primary btn-sm rounded-0";

  editBtn.appendChild(document.createTextNode("E"));

  li.appendChild(editBtn);

  //append button to li
  li.appendChild(deleteBtn);

  //append li to list
  itemList.appendChild(li);
}

// Remove Item on delete button

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure ?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter items function

function filterItems(e) {
  //convert texts to lowercase
  var text = e.target.value.toLowerCase();

  //get Lists(li's)
  var items = document.getElementsByTagName("li");

  //convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;

    var descriptions = item.childNodes[1].textContent;

    if (
      itemName.toLocaleLowerCase().indexOf(text) != -1 ||
      descriptions.toLocaleLowerCase().indexOf(text) != -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

