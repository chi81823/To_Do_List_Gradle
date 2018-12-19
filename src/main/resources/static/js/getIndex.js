var $ = require('jquery');
var { DateTime } = require('luxon');

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: window.location + 'api/todolist/all',
        success: function (result) {
            $.each(result, function (index, todolist) {                
                var toDoListRow = '<tr>' + index +
                    '<td align="center"><img src="../img/3line.png" height="30" width="30"></td>' +
                    '<td>' + todolist.id + '</td>' +
                    '<td>' + DateTime.fromISO(todolist.estimated).toISODate() + '</td>' +
                    '<td>' + DateTime.fromISO(todolist.createDate).toISODate() + '</td>' +
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

    $('#toDoListTable').on('click', 'a', function () {
        var todolistId = $(this).parent().find('#deleteId').val();

        $.ajax({
            type: 'DELETE',
            url: window.location + 'api/todolist/' + todolistId,
            success: function (result) {
                console.log(result);
            },
            error: function (e) {
                alert('ERROR: ', e);
                console.log('ERROR: ', e);
            }
        });
        window.location.reload();
    });

})