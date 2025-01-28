type="text/javascript">
  $(document).ready(function(){
    var data;
    $.ajax({
      type: "GET",
      url: "Bookstore.csv",
      dataType: "text",
      success: function(response)
      {
        data = $.csv.toArrays(response);
        generateHtmlTable(data);
      }
    });

    function generateHtmlTable(data) {
        var html = '<table>';

      if(typeof(data[0]) === 'undefined') {
        return null;
      }
      else {
        $.each(data, function( index, row ) {
          //bind header
          if(index == 0) {
            html += '<thead>';
            html += '<tr> <center>';
            $.each(row, function( index, colData ) {
                html += '<th>';
                html += colData;
                html += '</th>';
            });
            html += '</center></tr>';
            html += '</thead>';

          } else {
            html += '<tr><center>';
            $.each(row, function( index, colData ) {
        let result = colData.includes("jpg");
        if(result)
        {
          html += '<td>';
          html += '<img src="./Images/'+colData +'" alt="Dog" style="width:200px;height;200px">';
          html += '</td>';
        }
        else{
          html += '<td>';
          html += colData;
          html += '</td>';
      }
            });
            html += '</center></tr>';
          }
        });

        html += '</table>';

        $('#csv-display').append(html);
      }
    }
  });

