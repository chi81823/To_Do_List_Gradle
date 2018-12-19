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
            url: '/api/todolist/',
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function () {
                alert('新增成功!')
                history.back()                
            },
            error: function (e) {
                alert('Error!')
                console.log('ERROR: ', e);
            }
        });

    });

    $('#todolistSelectCreate').submit(function (event) {
        event.preventDefault();

        function datetimeToLong(estimated) {
            return DateTime.fromISO(estimated).toMillis();
        }

        var selectTime = datetimeToLong($('#selectCreate').val());

        $.ajax({
            type: 'GET',
            url: 'api/todolist/createTime',
            data: 'time=' + selectTime,
            success: function (result) {
                $.each(result, function (index, todolist) {
                    var toDoListRow = '<tr>' + index +
                        '<td>' + todolist.id + '</td>' +
                        '<td>' + DateTime.fromISO(todolist.estimated).toISODate() + '</td>' +
                        '<td>' + DateTime.fromISO(todolist.createDate).toISODate() + '</td>' +
                        '<td>' + todolist.name + '</td>' +
                        '</tr>' +
                        '<tr><td></td><td colspan="5">' + todolist.content + '</td></tr>';
                    $('#toDoListSelectCreateTable tbody').append(toDoListRow);
                });
            },
            error: function (e) {
                alert('ERROR: ', e);
                console.log('ERROR: ', e);
            }
        });
    });


    function resetData() {
        $('#name').val();
        $('#content').val();
    }
})