//https://www.c-sharpcorner.com/blogs/get-data-from-xml-content-using-javascript

function readData(){
  var parser, xmlDoc;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        xmlDoc = this.responseText;
      }
    };
    xhttp.open("GET", "file/cd_catalog.xml", true);
    xhttp.send();
  if(window.ActiveXObject)  
  {  
      doc = new ActiveXObject('Microsoft.XMLDOM'); // For IE6, IE5  
      doc.async = 'false';  
      doc.loadXML(xmlDoc);  
  }  
  else  
  {  
      var parser = new DOMParser();  
      doc = parser.parseFromString(xmlDoc, 'text/xml'); // For Firefox, Chrome etc  
  }  
    
  var x = doc.getElementsByTagName("CD");  
  for (i = 0;i < x.length; i++)  
  {  

    var title, artist, country, company, price, year; 
              
    title = x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue   
    artist = x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue    
    country =  x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue    
    company =  x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue   
    price = x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue  
    year = x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue    
    $(document).ready(function () {
      $('#employees').append('<tr>'
      +'<td>'+title +'</td>'
      +'<td class="">'+ artist+'</td>'
      +'<td class="">'+country+'</td>'
      +'<td class="">'+radioGender+'</td>'
      +'<td class="">'
      + company
      +'</td>'
      +'<td class="">'
      + price
      +'</td>'
      +'<td class="">'+ year
     +
      '</td></tr>');
});  
  }  
}      