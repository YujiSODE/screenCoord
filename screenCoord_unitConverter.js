/*screenCoord
* screenCoord_unitConverter.js
*===================================================================
*	Copyright (c) 2018 Yuji SODE <yuji.sode@gmail.com>
*
*	This software is released under the MIT License.
*	See LICENSE or http://opensource.org/licenses/mit-license.php
*===================================================================
* A simple unit converter for "screenCoord".
*=== Synopsis ===
* `var converter=screenCoord_unitConverter(textLog,value,?unit?);`
* this function returns a unit converter based on given text log
*--- Parameters ---
* - textLog: a csv formatted text log (`x1,y1,x2,y2,length [px]`)
* - value: a numerical value that corresponds to average length in `textLog`
* - unit: an optional unit character with default characters of "unit"
*
*=== Returned converter and its propertiy ===
* this converter returns csv formatted text log as follows:
*	- `converter(log);` returns converted results in csv format (`length [px],length [unit]`)
*	  - log: csv formatted text log (`x1,y1,x2,y2,length [px]`)
*	- `converter.calcLog;` is a log of conversion in csv format (`n,average length [px],value [unit],C [unit/px]`)
*/
//===================================================================
function screenCoord_unitConverter(textLog,value,unit){
	// - textLog: a csv formatted text log: `x1,y1,x2,y2,length`
	// - value: a numerical value that corresponds to average length in `textLog`
	// - unit: an optional unit character with default characters of "unit"
	unit=!unit?"unit":unit;
	value=Math.abs(value);
	//C: coefficient of conversion [unit/px]
	var L=[],l,log=textLog.split(/\n/),n=log.length,i=0,N=0,C=0.0,calcLog=`n,average length [px],value [${unit}],C [${unit}/px]`,converter;
	//average of valid length values
	while(i<n){
		//l: individual length value
		l=log[i].split(/,/)[4];
		L.push(/^(?:[0-9]*\.)?[0-9]+$/.test(l)?+l:0.0);
		N+=/^(?:[0-9]*\.)?[0-9]+$/.test(l)?1:0;
		i+=1;
	}
	L=Math.lSum(L);
	L=N!=0?L/N:0;
	//L: average length corresponds to `value` argument unless L is 0.0
	//C: coefficient of conversion [unit/px]
	C=L!=0?+value/L:0.0;
	calcLog+=`\n${N},${L},${value},${C}`;
	//returned function
	converter=function(Log){
		// - Log: a csv formatted text log: `x1,y1,x2,y2,length [px]`
		var l,log=Log.split(/\n/),n=log.length,i=1,output=`length [px],length [${unit}]`;
			while(i<n){
				//l: individual length value
				l=log[i].split(/,/)[4];
				output+=/^(?:[0-9]*\.)?[0-9]+$/.test(l)?`\n${l},${+l*C}`:`\n${l},undefined`;
				i+=1;
			}
		return output;
	};
	converter.calcLog=calcLog;
	return converter;
}
