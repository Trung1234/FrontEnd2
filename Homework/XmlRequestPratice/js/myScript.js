//https://www.c-sharpcorner.com/blogs/get-data-from-xml-content-using-javascript

function readData(){
  var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

  function reportStatus() {
      if (oXHR.readyState == 4)               // REQUEST COMPLETED.
          showTheList(this.responseXML);      // ALL SET. NOW SHOW XML DATA.
  }

  oXHR.onreadystatechange = reportStatus;
  oXHR.open("GET", "file/cd_catalog.xml", true);      // true = ASYNCHRONOUS REQUEST (DESIRABLE), false = SYNCHRONOUS REQUEST.
  oXHR.send();
}      

function showTheList(xml) {

  var x = xml.getElementsByTagName('CD');       // THE XML TAG NAME.

  for (var i = 0; i < x.length; i++) {

    var title, artist, country, company, price, year; 
              
    title = x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue   
    artist = x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue    
    country =  x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue    
    company =  x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue   
    price = x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue  
    year = x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue    
    $('#artists').append('<tr>'
    +'<td>'+title +'</td>'
    +'<td class="">'+ artist+'</td>'
    +'<td class="">'+country+'</td>'
    +'<td class="">'
    + company
    +'</td>'
    +'<td class="">'
    + price
    +'</td>'
    +'<td class="">'+ year
   +
    '</td></tr>');
  }
}