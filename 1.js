

var alphabet = "абвгдежзийклмнопрстуфхцчшщъыьэюя";


var lines = [];

for (var i = 0; i < 5; i++)
	lines[i] = new Array(5);




lines[1][0] = "о";
lines[2][1] = "х";
lines[2][2] = "о";
lines[2][3] = "т";
lines[2][4] = "а";
lines[3][2] = "б";
lines[3][3] = "л";
lines[3][4] = "н";
lines[4][1] = "с";
lines[4][3] = "у";

printMas(lines);


//написать прогу подсчета уникальных слов в книге.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






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

		var chainStrings = [];
		createWordsFromTable();


function createWordsFromTable()
	{
		chainStrings.length = 0;
		chainStrings.push("2-1");
		
		
		var a = chainStrings.length;
		var b = chainCreateFunction(0, chainStrings);
		var c = chainCreateFunction(a, chainStrings);
		var d = chainCreateFunction(b, chainStrings);


		var h;
		while(1)
		{
		 
		 h = chainCreateFunction(c, chainStrings);
		 if(h==c)
			 break;
		 c = chainCreateFunction(d, chainStrings);
		 if(c==d)
			 break;
		 d = chainCreateFunction(h, chainStrings);
		 if(d==h)
			 break;		 
		}
		
	document.write("<br>");
		for (var i  =0 ; i < chainStrings.length; i ++)
			document.writeln(replaceChainString(chainStrings[i]) + "<br>");
	
	}
	




function isLetter(i,j, string)
{
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
	
	
	var avPosArray = findAvaiblePosition (lines);
function findAvaiblePosition (lists) // create Array with avaible for char insert position
{
	var outMas_i = [];
	var outMas_j = [];
	
	var count = 0;
	
	for(var i = 1; i < 4; i++)
		for(var j = 1; j < 4; j++)	
			if(lines[i][j] == undefined)
				 	if(lines[i+1][j] != undefined || lines[i-1][j] != undefined || lines[i][j+1] != undefined || lines[i][j-1] != undefined )
					{outMas_i.push(i);
					 outMas_j.push(j);
						//alert("first " + i + " " + j);
						}
		 
	
	for(var j = 1; j < 4; j++)	
		if(lines[0][j] == undefined)
			if(lines[1][j] != undefined || lines[0][j] != undefined || lines[0][j+1] != undefined || lines[0][j-1] != undefined)	 
			{outMas_i.push(0);
			 outMas_j.push(j);
		//alert("second 0 " + j);
		}
	
	for(var i = 1; i < 4; i++)	
		if(lines[i][0] == undefined)
			if(lines[i+1][0] != undefined || lines[i-1][0] != undefined || lines[i][1] != undefined || lines[i][0] != undefined )	
			{outMas_i.push(i);
			 outMas_j.push(0);
		//alert("third " + i + " 0");
		}
			
			
	for(var j = 1; j < 4; j++)	
		if(lines[4][j] == undefined)
			if(lines[3][j] != undefined || lines[4][j] != undefined || lines[4][j+1] != undefined || lines[4][j-1] != undefined)	 
			{outMas_i.push(4);
			 outMas_j.push(j);
		//alert("fouth 4 " + j);
		}
	
	for(var i = 1; i < 4; i++)	
		if(lines[i][4] == undefined)
			if(lines[i+1][4] != undefined || lines[i-1][4] != undefined || lines[i][4] != undefined || lines[i][3] != undefined )	
			{outMas_i.push(i);
			 outMas_j.push(4);
		//alert("fifth " + i + " 4");
		}				
			
		
	if(lines[0][0] == undefined)
		if(lines[1][0] != undefined || lines[0][1] != undefined) 
		{
		 outMas_i.push(0);
		 outMas_j.push(0);	
		}
		
		
		if(lines[4][4] == undefined)
		if(lines[4][3] != undefined || lines[3][4] != undefined) 
		{
		 outMas_i.push(4);
		 outMas_j.push(4);	
		}
		
		if(lines[0][4] == undefined)
		if(lines[0][3] != undefined || lines[1][4] != undefined) 
		{
		 outMas_i.push(0);
		 outMas_j.push(4);	
		}
		
		if(lines[4][0] == undefined)
		if(lines[3][0] != undefined || lines[4][1] != undefined) 
		{
		 outMas_i.push(4);
		 outMas_j.push(0);	
		}
		
			
		
		return [outMas_i, outMas_j];
}

arraysCreateFromStartArrayAndAvaiblePositionsList(lines, avPosArray, alphabet);



function arraysCreateFromStartArrayAndAvaiblePositionsList (startArray, avaiblePositions, alphabet)
		{
			var arrayOfnewLines = [];
			//alert(avaiblePositions[0]);
			
			for (var l = 0; l < alphabet.length; l++)
			{	
				symbol = alphabet[l];
				for (var i = 0; i < avaiblePositions[0].length; i++)
				{
					var newPosition_i = avaiblePositions[0][i];
					var newPosition_j = avaiblePositions[1][i];
					//var bufArray = [];
					//bufArray = lines;
					lines[newPosition_i][newPosition_j] = symbol;				
					printMas(lines);
					createWordsFromTable();
					lines[newPosition_i][newPosition_j] = undefined;				
				}			
			}
		}
		
		
		
		function printMas(arrayOfnewLines)
		{
			for (var i = 0; i < 5; i++)
			{				
			for (var j = 0; j < 5; j++)
			if(arrayOfnewLines[i][j]==undefined)
				arrayOfnewLines[i][j] = " ";			
			}		
			
			
			document.write("<br>");
			for (var i = 0; i < 5; i++)
			{				
			for (var j = 0; j < 5; j++)
			document.writeln("(" + arrayOfnewLines[i][j] + ")");
			document.write("<br>");
			}	
			
			
			for (var i = 0; i < 5; i++)
			{				
			for (var j = 0; j < 5; j++)
			if(arrayOfnewLines[i][j]== " ")
				arrayOfnewLines[i][j] = undefined;			
			}	
			
		}

//функция ищет все возможные позиции для вставки буквы
//функция вставляет все возможные буквы на все возможные позиции - на выходе массивы lines
