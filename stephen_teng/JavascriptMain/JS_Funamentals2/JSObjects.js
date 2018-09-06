let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function displayStudents(students){
    for (var i in students){
        console.log(`Name: ${students[i]["name"]}, Cohort: ${students[i]["cohort"]}`);
    }
}

// displayStudents(students);

//***************************************************/
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function displayUsers(users){
    let employees = users["employees"];
    let managers = users["managers"];
    console.log("EMPLOYEES\n")
    for (var i= 0, l= employees.length; i < l; i++){
        console.log(`${i+1} - NAME: ${employees[i]["last_name"].toUpperCase()}, ${employees[i]["first_name"].toUpperCase()} - ${(employees[i]["last_name"]+employees[i]["first_name"]).length}`);
    }
    console.log("MANAGERS\n")
    for (var i= 0, l= managers.length; i < l; i++){
        console.log(`${i+1} - NAME: ${managers[i]["last_name"].toUpperCase()}, ${managers[i]["first_name"].toUpperCase()} - ${(managers[i]["last_name"]+managers[i]["first_name"]).length}`);
    }
}

displayUsers(users)