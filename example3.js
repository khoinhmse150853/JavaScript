function viewPerson(){
    let person = {
        id: 1,
        name: 'John',
    }

    document.getElementById("person").innerHTML = 
    "His name is " + person.name + " and his id is " 
    + person.id;
}