

//функция определяет, какой элемент для текущего является правым\левым\верхним\нижним



var lines = [];

for (var i = 0; i < 5; i++)
	lines[i] = new Array(5);

for (var i = 0; i < 5; i++)
	for (var j = 0; j < 5; j++)
		lines[i][j] = i+" "+j;


for (var i = 0; i < 5; i++)
{	
	for (var j = 0; j < 5; j++)
		document.writeln("(" + lines[i][j] + ")");
	document.write("<br>");
}


function getCell (i,j, charDirrection)
{
	switch(charDirrection)
	{case "r":	return lines[i][j+1]; break;
	case "l":	return lines[i][j-1]; break;
	case "u":	return lines[i-1][j]; break;
	case "d":	return lines[i+1][j]; break;
	default: return undefined; break;
	}
}

var BigList = new Array();

/*
for(var i = 0; i < BigList.length; i++)
	document.write(BigList[i] + "<br>");
*/

function getChain (i,j, startString)//i,j - start position, function returns array with all posible strings, where first char in start position
{
		//alert(i + " " + j + " " + startString);
		//var outStrings  = [startSymbol,startSymbol,startSymbol,startSymbol];
		var tempMas = [];
		var tempMasi = [];
		var tempMasj = [];
		
		var outLine = startString;
		if(getCell(i,j,"r") != undefined)
		{
			try{ 
			outLine += "-(" +getCell(i,j,"r") + ")";
			BigList.push(outLine);
			tempMas.push(outLine);
			tempMasi.push(i);
			tempMasj.push(j+1);
			}catch(a1){alert(a1, "111111111111111");}
		}
		
		 outLine = startString;
		if(getCell(i,j,"d") != undefined)
		{
			try{
			outLine += "-(" + getCell(i,j,"d") + ")"; 
			BigList.push(outLine);
			tempMas.push(outLine);
			tempMasi.push(i+1);
			tempMasj.push(j);
			}catch(a2){alert(a2, "gghryhythy5t");}
		}
		
		outLine = startString;
		if(getCell(i,j,"u") != undefined)
		{
			outLine += "hg" + getCell(i,j,"u"); 
			BigList.push(outLine)
			getChain(i-1,j,outLine);
			tempMasi.push(i-1);
			tempMasj.push(j);
		}
		
		outLine = startString;
		if(getCell(i,j,"l") != undefined)
		{
			outLine += "hg" + getCell(i,j,"l");
			BigList.push(outLine)
			getChain(i,j-1,outLine);
			tempMasi.push(i);
			tempMasj.push(j-1);
		}
		
		//if(tempMas.length==1)
			//alert("111");
		
	try{	
for(var i = 0; i < tempMas.length; i++)
	document.write(tempMas[i] + "<br>");
	}
catch(d){alert(d);}

	
		document.write("length of temp mas is " +tempMas.length +  +tempMasi.length +  +tempMasj.length +"<br>");
		
		
		
			for(var i = 0; i < tempMas.length; i++)
			try{
			getChain(tempMasi[i],tempMasj[i],tempMas[i]);
			}
			catch(eee){alert(eee + "___" + tempMasi[i] + "%%%" + tempMasj[i]  + tempMas[i]);}
		
	
			
}




try{
getChain(2,2,"(2,2)");
}catch(e){
;};
for(var i = 0; i < BigList.length; i++)
	document.write(BigList[i] + "<br>");
//document.writeln("правый элемент для 2,4 - " + getCell (2,4,"d"));