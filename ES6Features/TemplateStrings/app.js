var container = document.getElementById('container');

var todo = {
    id : 12,
    name : "Complete chapter1 from typescript certification course",
    completed : true
}

var content = `
<div todo='${todo.id}' class="list-group-item">
    <i class="${ todo.completed ? "" : "hidden" } text-success glyphicon glyphicon-ok"></i>
    <span class="name">${todo.name}</span>
</div>
`;

container.innerHTML = content;