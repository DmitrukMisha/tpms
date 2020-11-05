 var sensors = [
 //Датчик TPMS Autel MX Sensor (Универсальная частота MHz)(Серебряный вентиль)
    {price:'85', article:'1-SENSOR M', activation:'false', counts:'1', name:'Датчик TPMS Autel MX Sensor<br>(Универсальная частота MHz)<br>(Серебряный вентиль)', pic:'images/products/1-SENSOR-M.jpg', brand:"autel"},
    {price:'90', article:'1-SENSOR M', activation:'true', counts:'1', name:'Датчик TPMS Autel MX Sensor<br>(Универсальная частота MHz)<br>(Серебряный вентиль) + активация', pic:'images/products/1-SENSOR-Mп.jpg', brand:"autel"},
    {price:'340', article:'1-SENSOR M', activation:'true', counts:'4', name:'Датчик TPMS Autel MX Sensor<br>(Универсальная частота MHz)<br>(Серебряный вентиль) + активация(4 шт.)', pic:'images/products/1-SENSOR-Mп4.jpg', brand:"autel"},
//Датчик TPMS Huf (BH Sens)(Универсальная частота MHz)(Серебряный вентиль)
    {price:'90', article:'73.907.410', activation:'false', counts:'1', name:'Датчик TPMS Huf (BH Sens)<br>(Универсальная частота MHz)<br>(Серебряный вентиль)', pic:'images/products/73.907.410-1.jpg', brand:"huf"},
    {price:'100', article:'73.907.410', activation:'true', counts:'1', name:'Датчик TPMS Huf (BH Sens)<br>(Универсальная частота MHz)<br>(Серебряный вентиль) + активация', pic:'images/products/73.907.410-1п.jpg', brand:"huf"},
    {price:'360', article:'73.907.410', activation:'true', counts:'4', name:'Датчик TPMS Huf (BH Sens)<br>(Универсальная частота MHz)<br>(Серебряный вентиль) + активация(4 шт.)', pic:'images/products/73.907.410-1п4.jpg', brand:"huf"},
//Датчик TPMS Huf (BH Sens)(Универсальная частота MHz)(Резиновый вентиль)
    {price:'90', article:'73.907.410', activation:'false', counts:'1', name:'Датчик TPMS Huf (BH Sens)<br>(Универсальная частота MHz)<br>(Резиновый вентиль)', pic:'images/products/73.907.410-2.jpg', brand:"huf"},
    {price:'100', article:'73.907.410', activation:'true', counts:'1', name:'Датчик TPMS Huf (BH Sens)<br>(Универсальная частота MHz)<br>(Резиновый вентиль) + активация', pic:'images/products/73.907.410-2п.jpg', brand:"huf"},
    {price:'360', article:'73.907.410', activation:'true', counts:'4', name:'Датчик TPMS Huf (BH Sens)<br>(Универсальная частота MHz)<br>(Резиновый вентиль) + активация(4 шт.)', pic:'images/products/73.907.410-2п4.jpg', brand:"huf"},
//Датчик TPMS Huf (BH Sens)(Универсальная частота MHz)(Серебряный вентиль)
    {price:'120', article:'73.903.440', activation:'false', counts:'1', name:'Датчик TPMS Huf (BH Sens)<br>(Универсальная частота MHz)<br>(Серебряный вентиль)', pic:'images/products/73.903.440.jpg', brand:"huf"},
    {price:'130', article:'73.903.440', activation:'true', counts:'1', name:'Датчик TPMS Huf (BH Sens)<br>(Универсальная частота MHz)<br>(Серебряный вентиль) + активация', pic:'images/products/73.903.440п.jpg', brand:"huf"},
    {price:'480', article:'73.903.440', activation:'true', counts:'4', name:'Датчик TPMS Huf (BH Sens)<br>(Универсальная частота MHz)<br>(Серебряный вентиль) + активация(4 шт.)', pic:'images/products/73.903.440п4.jpg', brand:"huf"},
//Датчик TPMS Italsensor 433 MHz Europe (Черный вентиль)
    {price:'100', article:'IT-230B', activation:'false', counts:'1', name:'Датчик TPMS Italsensor<br>433 MHz Europe<br>(Черный вентиль)', pic:'images/products/IT-230B.jpg', brand:"italsensor"},
    {price:'110', article:'IT-230B', activation:'true', counts:'1', name:'Датчик TPMS Italsensor<br>433 MHz Europe<br>(Черный вентиль) + активация', pic:'images/products/IT-230Bп.jpg', brand:"italsensor"},
    {price:'400', article:'IT-230B', activation:'true', counts:'4', name:'Датчик TPMS Italsensor<br>433 MHz Europe<br>(Черный вентиль) + активация(4 шт.)', pic:'images/products/IT-230Bп4.jpg', brand:"italsensor"},
 //Датчик TPMS Alligator SENS.IT RS3 433 MHz черный
  //	{price:'100', article:'590914', activation:'false', counts:'1', name:'Датчик TPMS Alligator SENS.IT RS3<br>433 MHz Europe<br>(для металлического вентиля)', pic:'images/products/590914.jpg', brand:"alligator"},
    {price:'110', article:'590914', activation:'false', counts:'1', name:'Датчик TPMS Alligator SENS.IT RS3<br>433 MHz Europe<br>и металлический вентиль', pic:'images/products/590914в.jpg', brand:"alligator"},
    {price:'120', article:'590914', activation:'true', counts:'1', name:'Датчик TPMS Alligator SENS.IT RS3<br>433 MHz Europe<br>и металлический вентиль + активация', pic:'images/products/590914п.jpg', brand:"alligator"},
    {price:'440', article:'590914', activation:'true', counts:'4', name:'Датчик TPMS Alligator SENS.IT RS3<br>433 MHz Europe<br>и металлический вентиль + активация(4 шт.)', pic:'images/products/590914п4.jpg', brand:"alligator"},
 //Датчик TPMS Alligator SENS.IT RS3 433 MHz   серебро 
    {price:'110', article:'590914', activation:'false', counts:'1', name:'Датчик TPMS Alligator SENS.IT RS3<br>433 MHz Europe<br>и металлический вентиль', pic:'images/products/s590914в.jpg', brand:"alligator"},
    {price:'120', article:'590914', activation:'true', counts:'1', name:'Датчик TPMS Alligator SENS.IT RS3<br>433 MHz Europe<br>и металлический вентиль + активация', pic:'images/products/s590914п.jpg', brand:"alligator"},
    {price:'440', article:'590914', activation:'true', counts:'4', name:'Датчик TPMS Alligator SENS.IT RS3<br>433 MHz Europe<br>и металлический вентиль + активация(4 шт.)', pic:'images/products/s590914п4.jpg', brand:"alligator"},
//Датчик TPMS Alligator SENS.IT RS3 433 MHz  резина
   // {price:'100', article:'590918', activation:'false', counts:'1', name:'Датчик TPMS Alligator SENS.IT RS3<br>433 MHz Europe<br>(для резинового вентиля TR-413)', pic:'images/products/590918.jpg', brand:"alligator"},
    {price:'110', article:'590918', activation:'false', counts:'1', name:'Датчик TPMS Alligator SENS.IT RS3<br>433 MHz Europe<br>и резиновый вентиль TR-413', pic:'images/products/590918в.jpg', brand:"alligator"},
    {price:'120', article:'590918', activation:'true', counts:'1', name:'Датчик TPMS Alligator SENS.IT RS3<br>433 MHz Europe<br>и резиновый вентиль TR-413 + активация', pic:'images/products/590918п.jpg', brand:"alligator"},
    {price:'440', article:'590918', activation:'true', counts:'4', name:'Датчик TPMS Alligator SENS.IT RS3<br>433 MHz Europe<br>и резиновый вентиль TR-413 + активация(4 шт.)', pic:'images/products/590918п4.jpg', brand:"alligator"},
// Датчик TPMS Alligator SENS.IT ONE(Универсальная частота MHz)(Серебряный вентиль)   
    {price:'130', article:'591112', activation:'false', counts:'1', name:'Датчик TPMS Alligator SENS.IT ONE<br>(Универсальная частота MHz)<br>(Серебряный вентиль)', pic:'images/products/591112-1.jpg', brand:"alligator"},
    {price:'140', article:'591112', activation:'true', counts:'1', name:'Датчик TPMS Alligator SENS.IT ONE<br>(Универсальная частота MHz)<br>(Серебряный вентиль) + активация', pic:'images/products/591112-1п.jpg', brand:"alligator"},
    {price:'520', article:'591112', activation:'true', counts:'4', name:'Датчик TPMS Alligator SENS.IT ONE<br>(Универсальная частота MHz)<br>(Серебряный вентиль) + активация(4 шт.)', pic:'images/products/591112-1п4.jpg', brand:"alligator"},
// Датчик TPMS Alligator SENS.IT ONE(Универсальная частота MHz)(Черный вентиль)    
    {price:'130', article:'591113', activation:'false', counts:'1', name:'Датчик TPMS Alligator SENS.IT ONE<br>(Универсальная частота MHz)<br>(Черный вентиль)', pic:'images/products/591113-1.jpg', brand:"alligator"},
    {price:'140', article:'591113', activation:'true', counts:'1', name:'Датчик TPMS Alligator SENS.IT ONE<br>(Универсальная частота MHz)<br>(Черный вентиль) + активация', pic:'images/products/591113-1п.jpg', brand:"alligator"},
    {price:'520', article:'591113', activation:'true', counts:'4', name:'Датчик TPMS Alligator SENS.IT ONE<br>(Универсальная частота MHz)<br>(Черный вентиль) + активация(4 шт.)', pic:'images/products/591113-1п4.jpg', brand:"alligator"},
// Датчик TPMS Alligator SENS.IT ONE(Универсальная частота MHz)(Резиновый вентиль)    
    {price:'130', article:'591114', activation:'false', counts:'1', name:'Датчик TPMS Alligator SENS.IT ONE<br>(Универсальная частота MHz)<br>(Резиновый вентиль)', pic:'images/products/591114-1.jpg', brand:"alligator"},
    {price:'140', article:'591114', activation:'true', counts:'1', name:'Датчик TPMS Alligator SENS.IT ONE<br>(Универсальная частота MHz)<br>(Резиновый вентиль) + активация', pic:'images/products/591114-1п.jpg', brand:"alligator"},
    {price:'520', article:'591114', activation:'true', counts:'4', name:'Датчик TPMS Alligator SENS.IT ONE<br>(Универсальная частота MHz)<br>(Резиновый вентиль) + активация(4 шт.)', pic:'images/products/591114-1п4.jpg', brand:"alligator"},
//Датчик TPMS T-PRO Hybrid 3.5 433 MHz Europe (Серебряный вентиль)    
    {price:'110', article:'T-72-21-945', activation:'false', counts:'1', name:'Датчик TPMS T-PRO Hybrid 3.5<br>433 MHz Europe<br>(Серебряный вентиль)', pic:'images/products/72-21-945.jpg', brand:"tech"},
    {price:'120', article:'T-72-21-945', activation:'true', counts:'1', name:'Датчик TPMS T-PRO Hybrid 3.5<br>433 MHz Europe<br>(Серебряный вентиль) + активация', pic:'images/products/72-21-945п.jpg', brand:"tech"},
    {price:'440', article:'T-72-21-945', activation:'true', counts:'4', name:'Датчик TPMS T-PRO Hybrid 3.5<br>433 MHz Europe<br>(Серебряный вентиль) + активация(4 шт.)', pic:'images/products/72-21-945п4.jpg', brand:"tech"},
//Датчик TPMS U-PRO Hybrid 315 MHz USA (Серебряный вентиль) 
    {price:'110', article:'T-72-21-916', activation:'false', counts:'1', name:'Датчик TPMS U-PRO Hybrid<br>315 MHz USA<br>(Серебряный вентиль)', pic:'images/products/72-21-916.jpg', brand:"tech"},
    {price:'120', article:'T-72-21-916', activation:'true', counts:'1', name:'Датчик TPMS U-PRO Hybrid<br>315 MHz USA<br>(Серебряный вентиль) + активация', pic:'images/products/72-21-916п.jpg', brand:"tech"},
    {price:'440', article:'T-72-21-916', activation:'true', counts:'4', name:'Датчик TPMS U-PRO Hybrid<br>315 MHz USA<br>(Серебряный вентиль) + активация(4 шт.)', pic:'images/products/72-21-916п4.jpg', brand:"tech"}
  ] 
  	
function show(item){
	let text='';
	for (var i = 0; i < item.length; i++){
    	
text+='<div class="block"><img id="pictureInBlock" alt="'+item[i].name+'" src="'+item[i].pic+'"><p>Артикул: '+item[i].article+'</p><p>'+item[i].name+'</p><p>Цена:'+item[i].price+' руб.</p></div>'

	}

document.getElementById('cont').innerHTML=text;
}


function sort(sensors1) {
   var sensObj= JSON.parse(JSON.stringify(check(sensors1)));
    var sort,revers;
   sort=document.getElementById('sort');
   revers=document.getElementById('revers');
    if (sort.checked) {
    revers.checked=false;
    sensObj.sort(function(a, b){return a.price - b.price});
    show(sensObj);
  } else{
    show(sensObj);
  }
}

function revers(sensors1) {
   var sensObj= JSON.parse(JSON.stringify(check(sensors1)));
  var sort,revers;
  sort=document.getElementById('sort');
  revers=document.getElementById('revers');
   if(revers.checked){
    sort.checked=false;
    sensObj.sort(function(a, b){return b.price - a.price});
    show(sensObj);
  } else{
    show(sensObj);
  }
  
}

function main(sensors1){
    var sorts;
   sorts=document.getElementById('sort');
    if (sorts.checked) {
    sort(sensors1);
  } else{
    revers(sensors1);
  }
}


function showw(sensors1) {
    show(sensors1);
}
function check(sensors1){
  var activate,x4,alligator,tech,autel,huf,italsensor;
  
  activate=document.getElementById('activate');
  x4=document.getElementById('x4');
  x1=document.getElementById('x1');
  alligator=document.getElementById('alligator');
  tech=document.getElementById('tech');
  autel=document.getElementById('autel');
  huf=document.getElementById('huf');
  italsensor=document.getElementById('italsensor');


  var sensObj= JSON.parse(JSON.stringify(sensors1));

if (activate.checked){
  sensObj=sensObj.filter(el=> el.activation === "true")
}

if (x4.checked){
  sensObj=sensObj.filter(el=> el.counts == 4)
}
if (x1.checked){
  sensObj=sensObj.filter(el=> el.counts == 1)
}
//var sensObj1= JSON.parse(JSON.stringify(sensObj));
var brandChose=false;
var sensObj1= new Array();
if (alligator.checked){
  Array.prototype.push.apply(sensObj1, sensObj.filter(el=> el.brand === "alligator"));
  brandChose=true;
}
if (tech.checked){
  Array.prototype.push.apply(sensObj1, sensObj.filter(el=> el.brand === "tech"));
  brandChose=true;
}
if (autel.checked){
  Array.prototype.push.apply(sensObj1, sensObj.filter(el=> el.brand === "autel"));
  brandChose=true;
}
if (huf.checked){
  Array.prototype.push.apply(sensObj1, sensObj.filter(el=> el.brand === "huf"));
  brandChose=true;
}
if (italsensor.checked){
  Array.prototype.push.apply(sensObj1, sensObj.filter(el=> el.brand === "italsensor"));
  brandChose=true;
}
if(brandChose){
 var sensObj= JSON.parse(JSON.stringify(sensObj1));
}
//show(sensObj);

if (!sort.checked && !revers.checked && !activate.checked && !x4.checked && !x1.checked && !alligator.checked && !tech.checked && !autel.checked && !huf.checked && !italsensor.checked) {
    return (sensors);
  }
return (sensObj);
}


function showPrice(){
  let text='';
      
text+='<table style="float: left;" class="table1"><col width="45%" valign="top"><col width="45%" valign="top">'+
'<tr><th>Артикул</th><th>Товар</th><th>Цена за датчик + вентиль</th>'+
'<th>Цена за датчик + вентиль + активация</th><th>Цена за комплект (4 шт.)</th></tr>';
for (var i = 0; i < sensors.length; i++){
  text+='<tr>'+
  '<td>'+sensors[i].article+'</td>'+
  '<td>'+sensors[i].name+'</td>'+
  '<td>'+sensors[i].price+'</td>'+
  '<td>'+sensors[i+1].price+'</td>'+
  '<td>'+sensors[i+2].price+'</td></tr>';
  i++;
  i++;
  }

 text+='<tr><th colspan="2">Наименование услуги</th><th colspan="2">ЦЕНА за 1 шт.</th><th colspan="2">ЦЕНА за комплект (4 шт.)</th>'+
 '</tr><tr><td colspan="2">Диагностика  датчика</td><td colspan="2">5 руб.</td><td colspan="2">18 руб.</td></tr><tr>'+
 '<td colspan="2">Диагностика и программирование  датчика</td><td colspan="2">10 руб.</td><td colspan="2">35 руб.</td>'+
 '</tr><tr><td colspan="2">Диагностика и программирование  датчика с выездом к клиенту в пределах МКАД</td><td colspan="2">20 руб.</td>'+
 '<td colspan="2">45 руб.</td></tr></table>';

  text+='<table style="float: left;" class="table2"><col width="45%" valign="top"><col width="45%" valign="top"><tr><th>Наименование услуги</th>'+
  '<th>ЦЕНА за 1 шт.</th><th>ЦЕНА за комплект (4 шт.)</th></tr><tr><td >Диагностика  датчика</td><td >5 руб.</td><td >18 руб.</td></tr><tr>'+
  '<td >Диагностика и программирование  датчика</td><td >10 руб.</td><td >35 руб.</td></tr><tr>'+
  '<td >Диагностика и программирование  датчика с выездом к клиенту в пределах МКАД</td><td >20 руб.</td><td >45 руб.</td></tr>'+
  '<tr><th>Артикул</th><th>Товар</th><th>Цена за датчик</th></tr>';

for (var i = 0; i < sensors.length; i++){
  text+='<tr>'+
  '<td>'+sensors[i].article+'</td>'+
  '<td>'+sensors[i].name+'</td>'+
  '<td>'+sensors[i].price+'</td></tr>';
  }
text+='</table>';


document.getElementById('cont').innerHTML=text;
}












