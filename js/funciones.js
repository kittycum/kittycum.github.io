function addHtmlTableRow(){
         
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var edad = document.getElementById("edad").value;
  var x = document.getElementsByClassName("radioButton");
  var mail = document.getElementById("mail").value;
 

  table = document.getElementById("table");
            
         
         function checkEmptyInput(){

     var isEmpty = false,
         nombre = document.getElementById("nombre").value;
         apellido = document.getElementById("apellido").value;
         edad = document.getElementById("edad").value;
         mail = document.getElementById("mail").value;
         sexo = document.getElementByClass("sexo").value;
      
     return isEmpty;
   }
  
  var table = document.getElementById("mytable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML = nombre;
  cell2.innerHTML = apellido;
  cell3.innerHTML = edad;
    for(var i=0;i<x.length;i++){
      if(x[i].checked){
        cell4.innerHTML = x[i].value

        }
  }
  cell5.innerHTML = mail;
  cell6.innerHTML = '<button type="button" name="remove" onclick="borrar(this)" class="btn btn-danger btn_remove">Quitar</button>';



     if(nombre === ""){
         alert("NO DIJISTE TU NOMBRE");
         isEmpty = true;
     }
    if(apellido === ""){
         alert("¿Y TU APELLIDO?");
         isEmpty = true;
     }
    if(edad === ""){
         alert("¿CUÁNTOS AÑOS TENÉS?");
         isEmpty = true;
     }

     if(mail === ""){
         alert("¿COMO QUIERES QUE TE ESCRIBA?");
         isEmpty = true;
     }

     if(sexo === ""){
         alert("ME GUSTARÍA SABER TU SEXO");
         isEmpty = true;
     }

}

function borrar(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("mytable").deleteRow(i);

                  
}

var tableToExcel = (function() { //funcion para pasar la tabla a un excel
    var uri = 'data:application/vnd.ms-excel;base64,',
      template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
      base64 = function(s) {
        return window.btoa(unescape(encodeURIComponent(s)))
      },
      format = function(s, c) {
        return s.replace(/{(\w+)}/g, function(m, p) {
          return c[p];
        })
      }
    return function(table, name) {
      if (!table.nodeType) table = document.getElementById(table)
      var ctx = {
        worksheet: name || 'Worksheet',
        table: table.innerHTML
      }
      window.location.href = uri + base64(format(template, ctx))
    }
  })()