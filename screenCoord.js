/*screenCoord
*screenCoord.js
*===================================================================
*	Copyright (c) 2018 Yuji SODE <yuji.sode@gmail.com>
*
*	This software is released under the MIT License.
*	See LICENSE or http://opensource.org/licenses/mit-license.php
*===================================================================
* A simple tool for estimating length on HTML in CSS pixels
*=== Synopsis ===
* `var f=screenCoord(?zIndex?);`
* this function generates a folding canvas and returns a function that returns text log
*--- Parameters ---
* - zIndex: an optional integer value for z-index with default value of 1000
* --- Text log format ---
* function that generated using `screenCoord(?zIndex?)` returns csv formatted text log as follows:
*	`x1,y1,x2,y2,length [px]`
*/
//===================================================================
/*=== lSum.js (Yuji SODE, 2018): https://gist.github.com/YujiSODE/ad3ab35235b1648c9f8e08f6a35e8439 ===
* This is implementation of "lSum.tcl" in JavaScript
* [References]
* - Sode, Y. 2018. lSum.tcl; https://gist.github.com/YujiSODE/1f9a4e2729212691972b196a76ba9bd0
* - Iri, M., and Fujino., Y. 1985. Suchi keisan no joshiki (in Japanese). Kyoritsu Shuppan Co., Ltd.; ISBN 978-4-320-01343-8
*/
Math.lSum=function(Arr){var n=Arr.length,i=0,S=0.0,R=0.0,T=0.0;while(i<n){R+=+Arr[i];T=S;S+=R;T=S-T;R-=T;i+=1;}return S;};
//it generates a folding canvas and returns a function that returns text log
function screenCoord(zIndex){
	// - zIndex: an optional integer value for z-index with default value of 1000
	var slf=window,div,color,sizeB={},moveB,logB,clearB,closeB,details,summary,area,log='x1,y1,x2,y2,length [px]',elemGen,x0=0.0,y0=0.0,i=0;
	zIndex=!(/^[0-9]+$/.test(zIndex))?1000:zIndex;
		//### element generator ###
		elemGen=function(element){
			//element: a name of element
			var E=slf.document.createElement(element);
			E.id='gen'+Math.floor(10000*Math.random());
			E.style.padding=0;
			E.style.margin=0;
			return E;
		};
		div=elemGen('div');
		div.style.position='fixed';
		div.style.top=0;
		div.style.bottom='auto';
		div.style.left=0;
		div.style.right='auto';
		div.style.border='2px solid #00ff';
		div.style["z-index"]=zIndex;
			//color
			color=elemGen('input');
			color.type='color';
			color.value='#ff0000';
			//minus button
			sizeB.minus=elemGen('button');
			sizeB.minus.type='button';
			sizeB.minus.textContent='[\u002d]';
			//plus button
			sizeB.plus=elemGen('button');
			sizeB.plus.type='button';
			sizeB.plus.textContent='[\u002b]';
			//move button
			moveB=elemGen('button');
			moveB.type='button';
			moveB.textContent='[<=>]';
			//log button
			logB=elemGen('button');
			logB.type='button';
			logB.textContent='[Log]';
			//clear button
			clearB=elemGen('button');
			clearB.type='button';
			clearB.textContent='[Clear]';
			//close button
			closeB=elemGen('button');
			closeB.type='button';
			closeB.textContent='[X]';
		div.appendChild(color);
		div.appendChild(sizeB.minus);
		div.appendChild(sizeB.plus);
		div.appendChild(moveB);
		div.appendChild(logB);
		div.appendChild(clearB);
		div.appendChild(closeB);
			//folding canvas and text log
			details=elemGen('details');
			details.open=!0;
				summary=elemGen('summary');
				summary.textContent='Available area';
				summary.style.color='#000f';
				summary.style.backgroundColor='#dddf';
				//canvas
				area=elemGen('canvas');
				area.width=100;
				area.height=100;
				area.style.backgroundColor='#ff00003f';
				area.style["z-index"]=zIndex;
			details.appendChild(summary);
			details.appendChild(area);
		div.appendChild(details);
	slf.document.body.appendChild(div);
				//### event ###
				//canvas
				area.addEventListener('click',function(e){
					var X=e.clientX,Y=e.clientY;
					x0=i>0?x0:X;
					y0=i>0?y0:Y;
					log+=(i>0?',':'\n')+X+','+Y;
					//Euclidean distance
					log+=i>0?','+Math.sqrt(Math.lSum([x0*x0,X*X,y0*y0,Y*Y,-2*x0*X,-2*y0*Y])):'';
					i=i>0?0:1;
				},false);
			//color
			color.addEventListener('change',function(){
				area.style.backgroundColor=color.value+'3f';
			},false);
			//minus button
			sizeB.minus.addEventListener('click',function(){
				area.width+=area.width>10?-10:0;
				area.height+=area.height>10?-10:0;
			},false);
			//plus button
			sizeB.plus.addEventListener('click',function(){
				area.width+=10;
				area.height+=10;
			},false);
			//move button
			moveB.addEventListener('click',function(){
				var LEFT=div.style.left,RIGHT=div.style.right;
				div.style.left=RIGHT;
				div.style.right=LEFT;
			},false);
			//log button
			logB.addEventListener('click',function(){
				slf.alert(log);
			},false);
			//clear button
			clearB.addEventListener('click',function(){
				log='x1,y1,x2,y2,length [px]';
				x0=0.0,y0=0.0,i=0;
			},false);
			//close button
			closeB.addEventListener('click',function(){
				div.parentNode.removeChild(div);
			},false);
	return function(){return log;};
}
