let value;

$('.js-button-start').on('click', function(){
  editablesFields();
})
function editablesFields(){
  document.getElementById('js-addRow').style.visibility = "visible";
  //input 1
  let box = document.getElementById("js-box1");
  let input = document.createElement("INPUT");
  input.type = "text";
  input.setAttribute("class", "matrix__value1-input");
  let contenido = box.innerHTML;
  input.value = contenido;
  box.innerHTML = "";
  box.appendChild(input);
  //input 2
  let box2 = document.getElementById("js-box2");
  let inputBox2 = document.createElement("INPUT");
  inputBox2.type = "text";
  inputBox2.setAttribute("class", "matrix__value2-input");
  let contenidoBox2 = box2.innerHTML;
  inputBox2.value = contenidoBox2;
  box2.innerHTML = "";
  box2.appendChild(inputBox2);
}

let table = $("<table></table>");
let th = [];
let values = [];
let row; 
let col;
function addRow(row, col){
  for(i = 0; i < row; i++){
    
    for(j = 0; j < col; j++){
      th[j] = "<th class=\"auto-matrix__col js-editable\" ><input type=\"number\" class=\"auto-matrix__input\" id=\"js-colum" + j + "row" + i +"\"></input></th>";
      
    }
    let nuevoTr = "<tr class=\"tr value-y\">" + th + "</tr>";
    table.append(nuevoTr)
  }
}

$('#contenedor').append(table);
$('#js-addRow').click(function(){
  row = document.querySelector('.matrix__value1-input').value;
  col = document.querySelector('.matrix__value2-input').value;
  addRow(row, col);
  let columData = document.querySelectorAll('.js-editable');
  
  document.getElementById('js-addRow').style.display = "none";
  document.getElementById('js-matrix__instructions1').style.display = "none";
  document.getElementById('js-reset-play').style.visibility = "visible";
  document.getElementById('js-press-to-play').style.visibility = "visible";
});
$('#js-reset-play').click(function(){
  location.reload();
});
$('#js-press-to-play').click(function(){
  sum();
});
resultCol = 0;
resultRow = 0;
function sum(){
  for(i = 0; i < col; i++){
    resultCol = 0;
    resultRow = 0;
    for(j = 0; j < row; j++){
      values = Number(document.querySelector('#js-colum' + i + 'row' + j).value);
      resultCol += values;
    }
    for(j = 0; j < row; j++){
      values = Number(document.querySelector('#js-colum' + j + 'row' + i).value);
      resultRow += values;
    }
    if(resultCol < 100 || resultCol > 100){
      document.getElementById('js-player-lost').style.visibility = "visible";
      document.getElementById('js-player-win').style.visibility = "hidden";
      break
    }
  }
  function testSums(resultCol, resultRow){
    if(resultCol == 100 && resultRow == 100){
      document.getElementById('js-player-win').style.visibility = "visible";
      document.getElementById('js-player-lost').style.visibility = "hidden";
    }else{
      document.getElementById('js-player-lost').style.visibility = "visible";
      document.getElementById('js-player-win').style.visibility = "hidden";
    }
  }
  testSums(resultCol, resultRow);
}