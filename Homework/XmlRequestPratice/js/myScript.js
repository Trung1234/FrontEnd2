//https://www.c-sharpcorner.com/blogs/get-data-from-xml-content-using-javascript
function readData(){
    var parser, xmlDoc;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(this.responseText,"text/xml");
        var i;
        for (i = 0; i < cars.length; i++) {
          text += cars[i] + "<br>";
        }
      }
    };
    xhttp.open("GET", "file/cd_catalog.xml", true);
    xhttp.send();
    if(isValid){
        $(document).ready(function () {
            $('#employees').append('<tr id="row'+tableRows+'">'
            +'<td>'+name +'</td>'
            +'<td class="">'+ department+'</td>'
            +'<td class="">'+birthday+'</td>'
            +'<td class="">'+radioGender+'</td>'
            +'<td class="">'
            + language 
            +'</td>'
            +'<td class="">'+
            '<a  href="#" onclick="deleteEmployee(this)">Delete</a>'+
            '</td></tr>');
        });
    }
}
