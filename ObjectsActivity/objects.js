//Practice with Objects

const myInfo ={
    name: "Dani",
    birthday: "December 8th",
    favColor: "Pink",
    favFood: "Ramen",
    codingLevel: "Noob",
}
//Creates an object called myInfo which stores information about me.

myName= myInfo.name;
console.log(myName)

//creates a variable named myName and stored the object value "Name" from myInfo

myInfo.location = "Houston";
console.log(myInfo.location)
//adds the key location with the value Houston the the object my info
//delete object.key command will remove a key and value from an object

let toDo=["Clean my room","work","Fold clothes","Make dinner","study"];
//Sets variable toDo as an array containing a lit of to do items

console.log("Today If nothing else I really need to accomplish: "+ toDo[4] + ", out of the "
 + toDo.length+ " things I have to do today.");
//Index's (search) the array values starting at position 0 (considered 1) and returns
//position 4 (study) and also prints out the number of items stored in the array.



