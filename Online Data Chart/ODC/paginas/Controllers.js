
/////////////////////////////////// APP ////////////////////////////////////

var app = angular.module("ODC", []);

/////////////////////////// CONTROLADOR PÁGINA 1 ///////////////////////////

app.controller("controller1", function($scope){
  $scope.clicked = function(){
    window.location = "p2.html"
  };
  
  $scope.howto = function(){
  var x = document.getElementById("myDIV");
  x.style.display = "block" }
});


/////////////////////////// CONTROLADOR PÁGINA 2 ///////////////////////////

app.controller("controller2", function($scope) {

  $scope.p2 = true;
  $scope.p3 = false;
  $scope.p4 = false;
  $scope.p5 = false;

 
  // var fileContent = '';
  
  $scope.submit = function(){
    
    var file = document.getElementById("file").files[0];
    
    if (file) {
      var aReader = new FileReader();
      aReader.readAsText(file);
      aReader.onload = function (evt){   
        fileContent = aReader.result;
      }
      
      aReader.onloadend = function(){  
        var allTextLines = fileContent.split(/\r\n|\n/);
        var headers = allTextLines[0].split(';');
        var lines = [];

        for ( var i = 0; i < allTextLines.length; i++) {
		      	// split content based on comma
              var data = allTextLines[i].split(';');
              if (data.length == headers.length) {
                var tarr = [];
                for ( var j = 0; j < headers.length; j++) {
                  tarr.push(data[j]);
                }
                lines.push(tarr);
              }
            }
            $scope.data = lines;
            $scope.headers = lines[0]; // just first row
            $scope.rows = lines.splice(1);
            $scope.p3 = $scope.p3 = true;
            $scope.p2 = $scope.p2 = false;
            $scope.header1 = headers[0];
            $scope.header2 = headers[1];
            $scope.$apply();
        }
      aReader.onerror = function (evt){ 
        $scope.fileContent = "error";
      }
    }
  }

  $scope.pagina4 = function() {

          // let table = document.getElementById('tabela')

          var col1 = [];
        $("#tabela tr:not(:nth-child(0))").each(function () {
          col1.push($(this).find("td.tbody:eq(0)").text()); //put elements into array
          col1.shift
        });

        var col2 = [];
        $("#tabela tr:not(:nth-child(0))").each(function () {
          col2.push($(this).find("td.tbody:eq(1)").text()); //put elements into array
          col2.shift
        });
          
        $scope.col1=col1.splice(1);
        $scope.col2=col2.splice(1);




              $scope.p2 = $scope.p2 = false;
              $scope.p3 = $scope.p3 = false;
              $scope.p5 = $scope.p5 = false;
              $scope.p4 = $scope.p4 = true;

  }

  $scope.export = function(){
    $scope.p2 = $scope.p2 = false;
    $scope.p3 = $scope.p3 = false;
    $scope.p4 = $scope.p4 = false;
    $scope.p5 = $scope.p5 = true;

  }

  $scope.voltargrafico = function(){
    $scope.p2 = $scope.p2 = false;
    $scope.p3 = $scope.p3 = false;
    $scope.p4 = $scope.p4 = true;
    $scope.p5 = $scope.p5 = false;
  }

  $scope.voltartabela = function(){
    $scope.p2 = $scope.p2 = false;
    $scope.p3 = $scope.p3 = true;
    $scope.p4 = $scope.p4 = false;
    $scope.p5 = $scope.p5 = false;
  }
  $scope.voltarimport = function(){
    $scope.p2 = $scope.p2 = true;
    $scope.p3 = $scope.p3 = false;
    $scope.p4 = $scope.p4 = false;
    $scope.p5 = $scope.p5 = false;
  }

  
  
});  


/////////////////////////// APAGAR LINHAS ///////////////////////////

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("tabela").deleteRow(i);
}








