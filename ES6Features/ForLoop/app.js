var toDoList = [
    "Prepare for TOI",
    "TypeScript course",
    "Conclude on jira"
];

for(var index in toDoList) {
    var value = toDoList[index];
    console.log("Value at index " + index + " is " + value);
    console.log(`${index} : ${value}`)
}

for(toDoItem of toDoList) {
    console.log(`${toDoItem}`);
}