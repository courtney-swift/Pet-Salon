// 1. Create an array
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
//position of  0        1        2         3       4 of elements in the array 

// 2. Accessing array elements ->
names[0];
console.log(names[0]);

// 3. Modifying array elements  -> Assign -> =
names[0] = "Alice";
console.log(names[0]);

// 4. Adding values to the end -> push
names.push("Alice Smith");
console.log(names);

// 5. Travelling through an array -> for loop
// print each name -without for loop -> console.log(names[0]), console.log(names[1]), console.log(names[2])

let mylist = document.getElementById("list");

for (let i = 0; i < names.length; i++) { // action that will be performed for each element in the array/ will repeat for each element // I will auto go from 0 to the full lenght of the names
    console.log(names[i]);

    //Create thelist item element
    let li = document.createElement("li");

    // Add the value (the name) to the list item
    li.textContent = names[i];

    //Add the list item to the unordered list
    mylist.appendChild(li);
}

