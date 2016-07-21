

//функция определяет, какой элемент для текущего является правым\левым\верхним\нижним

var lines = [];

for (var i = 0; i < 5; i++)
	lines[i] = new Array(5);

/*for (var i = 0; i < 5; i++)
	for (var j = 0; j < 5; j++)
		lines[i][j] = i+" "+j+888;
*/


lines[2][1] = "о";
lines[2][2] = "х";
lines[2][3] = "о";
lines[2][4] = "т";
lines[3][1] = "а";
lines[3][2] = "б";
//lines[3][3] = "л";
//lines[3][4] = "н";
//lines[4][1] = "с";
//lines[4][3] = "у";

for (var i = 0; i < 5; i++)
{	
	for (var j = 0; j < 5; j++)
		document.writeln("(" + lines[i][j] + ")");
	document.write("<br>");
}


//написать прогу подсчета уникальных слов в книге.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var chainStrings = [];
chainStrings.push("2-1");



function createChain (string)
{
	var flag = false;
	var i,j;
	if(string.length >= 3)
		{
			i = Number(string[string.length-3]); //last i, j in sequence
			j = Number(string[string.length-1]);		
		}

if(isLetter(i+1,j, string))
		flag = chainStrings.push(string + "@" + (Number(i)+1) + "-" + j);
if(isLetter(i-1,j, string))
		flag = chainStrings.push(string + "@" + (Number(i)-1) + "-" + j);
if(isLetter(i,j+1, string))
		flag = chainStrings.push(string + "@" + i + "-" + (Number(j)+1));
if(isLetter(i,j-1, string))
		flag = chainStrings.push(string + "@" + i + "-" + (Number(j)-1));
		
}

//createChain(chainStrings[0]);

var a = chainStrings.length;
var b = chainCreateFunction(0, chainStrings);
var c = chainCreateFunction(a, chainStrings);
var d = chainCreateFunction(b, chainStrings);
var e = chainCreateFunction(c, chainStrings);
var f = chainCreateFunction(d, chainStrings);
var g = chainCreateFunction(e, chainStrings);


var h,k,l;
while(1)
{
 
 h = chainCreateFunction(f, chainStrings);
 if(h==f)
	 break;
 f = chainCreateFunction(g, chainStrings);
 if(f==g)
	 break;
 g = chainCreateFunction(h, chainStrings);
 if(g==h)
	 break;
 
 //alert(h + " " + f + " " + g);
}




document.write("<br>");
for (var i  =0 ; i < chainStrings.length; i ++)
	document.writeln(replaceChainString(chainStrings[i]) + "<br>");




function isLetter(i,j, string)
{
	//alert(string.indexOf(i + "-" + j));
	//alert(i +"="+ j + string)
	
	if(i >= 0 && i <5 && j >= 0 && j < 5)
	if(lines[i][j] != undefined)
	if(string.indexOf(i + "-" + j) == -1)	
		return true;
		
	return false;
}


function chainCreateFunction (startPosition , chainMas)
{
	var a = chainMas.length;

	for(var i = startPosition; i < a; i++)
		createChain(chainMas[i]);
	
	
	
	return chainStrings.length;
}


function replaceChainString(string)
{
	var mas = string.split("@");
	var str = "";
	
	for(var i =0; i < mas.length; i++)
	str += lines[Number((mas[i])[0])][Number((mas[i][2]))];
	return str;
}

//функция ищет все возможные позиции для вставки буквы

//функция вставляет все возможные буквы на все возможные позиции - на выходе массивы lines
