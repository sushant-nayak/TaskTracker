

$("form#newTaskForm").submit(function(event){
	console.log('Form Submit...');
	var itemName = $('#taskName').val();
	var itemDate = $('#taskDate').val();
	var itemAssignedTo = $('#taskAssignedTo').val();
	var data = { "iname": itemName, "idate": itemDate, "iassigned": itemAssignedTo };
	//console.log('data: ', data);
	var trHtml = '<tr><td>' + data.iname +'</td><td>'+ data.idate +'</td><td>'+ data.iassigned +'</td></tr>';
	//console.log('Result', trHtml);
    $('#dataTable tbody').prepend(trHtml);
    return false;
});

$(function() {
	$.ajax( {
    	url: "data.json", 
    	success: function(result) {
            //console.log('Result', result);
        	popolateTable(result);
    }});
});

var popolateTable = function(response) {
    $.each(response, function(i, item) {
        //console.log(item);

        var trHtml = '<tr><td>' + item.name +'</td><td>'+ item.date +'</td><td>'+ item.assigned +'</td></tr>';
		$('#dataTable tbody').append(trHtml);

    });
};