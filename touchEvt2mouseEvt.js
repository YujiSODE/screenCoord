//touchEvt2mouseEvt.js
//Copyright (c) 2017 Yuji SODE <yuji.sode@gmail.com>
//Handling clicks with touch event
(function(){
  var slf=window,events=['touchstart','touchmove','touchend'],i=0,n=events.length,
      /*this function simulates mouse event via touch event*/
      touch2MouseEvt=function(e){
        //e is event object
        e.preventDefault();
        if(!!e.changedTouches&&e.changedTouches.length>0){
          var touch0=e.changedTouches[0],
              /*function simulates new mouse event*/
              newMEvt=function(EventName,tObj,tgt){
                //tObj and tgt are touch object and target element
                var E=new MouseEvent(EventName,{
                  'view':window,
                  'bubbles':true,
                  'cancelable':true,
                  'clientX':tObj.clientX,
                  'clientY':tObj.clientY,
                  'ctrlKey':tObj.ctrlKey,
                  'shiftKey':tObj.shiftKey,
                  'altKey':tObj.altKey
                });
                tgt.dispatchEvent(E);
              };
          switch(e.type){
            case 'touchstart':
              newMEvt('mousedown',touch0,e.target);
              break;
            case 'touchmove':
              newMEvt('mousemove',touch0,e.target);
              break;
            case 'touchend':
              newMEvt('mouseup',touch0,e.target);
              break;
          }
        }else{return;}
      };
  while(i<n){slf.addEventListener(events[i],touch2MouseEvt,true),i+=1;}
}());