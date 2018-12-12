var $ = require('jquery');

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: window.location + 'api/todolist/all',
        success: function (result) {
            $.each(result, function (index, todolist) {
                var toDoListRow = '<tr>' + index +
                    '<td align="center"><img src="../img/3line.png" height="30" width="30"></td>' +
                    '<td>' + todolist.id + '</td>' +
                    '<td>' + new Date(todolist.estimated).toLocaleString() + '</td>' +
                    '<td>' + new Date(todolist.createDate).toLocaleString() + '</td>' +
                    '<td>' + todolist.name + '</td>' +
                    '<td>' + '<input type="hidden" id="deleteId" value=' + todolist.id + '>' +
                    '<a>' + '<button type="submit" >Delete</button>' + '</a>' + '</td>' +
                    '</tr>' +
                    '<tr><td></td><td colspan="5">' + todolist.content + '</td></tr>';
                $('#toDoListTable tbody').append(toDoListRow);
            });
        },
        error: function (e) {
            alert('ERROR: ', e);
            console.log('ERROR: ', e);
        }
    });

})