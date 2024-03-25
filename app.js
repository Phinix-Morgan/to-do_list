/*const btnx =  document.querySelector("#btnu");
btnx.addEventListener("click",() => {
  var title = document.querySelector("#title").value;
  var des = document.querySelector("#des").value;
  if(localStorage.getItem('itemsJson')==null){
    itemJsonArray = [];
    itemJsonArray.push([title,des]);
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))

  }
  else{
    itemJsonArraystr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.push([title,des]);
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
  }

      //populate the Table
      let tableBody = document.querySelector("#tableBody");
      let str = "";
      itemJsonArray.forEach((element,index) => {
        str += `<tr>
            <th scope="row">${index +1 }</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td> <button id="btn" onclick = "Delete(${index})">Delete</button> </td>
          </tr>`;
      });
 tableBody.innerHTML = str;
 update();

});

const Delete = (itemIndex) => {
console.log("Delete",itemIndex);
  itemJsonArraystr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArraystr);
//delete itemIndex element from the array

itemJsonArray.splice(itemIndex,1);
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    update();
};*/

const addButton = document.querySelector("#btnu");

// Function to handle adding item
addButton.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const des = document.querySelector("#des").value;

    // Retrieve items from localStorage
    let itemJsonArray = localStorage.getItem('itemsJson') ? JSON.parse(localStorage.getItem('itemsJson')) : [];

    // Add new item to the array
    itemJsonArray.push({ title, des });

    // Update localStorage with the modified array
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

    // Update the table
    updateTable(itemJsonArray);
});

// Function to handle deleting item
const handleDelete = (itemIndex) => {
    // Retrieve items from localStorage
    let itemJsonArray = localStorage.getItem('itemsJson') ? JSON.parse(localStorage.getItem('itemsJson')) : [];

    // Remove the item at the specified index
    itemJsonArray.splice(itemIndex, 1);

    // Update localStorage with the modified array
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

    // Update the table
    updateTable(itemJsonArray);
};

// Function to update the table
const updateTable = (items) => {
    let tableBody = document.querySelector("#tableBody");
    let str = "";

    // Generate table rows for each item
    items.forEach((item, index) => {
        str += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${item.title}</td>
            <td>${item.des}</td>
            <td> <button class="btn-delete" data-index="${index}" onclick="handleDelete(${index})">Delete</button> </td>
          </tr>`;
    });

    // Update table body
    tableBody.innerHTML = str;
};

// Function to initialize the table on page load
const initializeTable = () => {
    let itemJsonArray = localStorage.getItem('itemsJson') ? JSON.parse(localStorage.getItem('itemsJson')) : [];
    updateTable(itemJsonArray);
};

// Call initializeTable function to set up the table when the page loads
initializeTable();
