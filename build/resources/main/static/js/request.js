var $ = require('jquery');
var { DateTime } = require('luxon');

$(document).ready(function () {

    $('#todolistForm').submit(function (event) {
        event.preventDefault();        

        function datetimeToLong(estimated) {
            return DateTime.fromISO(estimated).toMillis();
        }

        var dataEstime = $('#estimated').val();

        var formData = {
            estimated: datetimeToLong(dataEstime),
            date: new Date().getTime(),
            name: $('#name').val(),
            content: $('#content').val()
        }

        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: window.location + 'api/todolist/',
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (result) {
                console.log(result);
            },
            error: function (e) {
                alert('Error!')
                console.log('ERROR: ', e);
            }
        });
        resetData();
        window.location.reload();

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

    function resetData() {
        $('#name').val();
        $('#content').val();
    }
})