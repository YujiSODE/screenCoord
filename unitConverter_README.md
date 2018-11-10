# screenCoord_unitConverter
`screenCoord/screenCoord_unitConverter.js`  
A simple unit converter for "screenCoord".  
GitHub: https://github.com/YujiSODE/screenCoord  
>Copyright (c) 2018 Yuji SODE \<yuji.sode@gmail.com\>  
>This software is released under the MIT License.  
>See LICENSE or http://opensource.org/licenses/mit-license.php
______
## Synopsis
`var converter=screenCoord_unitConverter(textLog,value,?unit?);`  
This function returns a unit converter based on given text log.

### Parameters
- `textLog`: a csv formatted text log (`x1,y1,x2,y2,length [px]`)
- `value`: a numerical value that corresponds to average length in `textLog`
- `unit`: an optional unit character with default characters of "unit"

### Returned converter and its propertiy
This converter returns csv formatted text log as follows:
- `converter(log);`: converted results in csv format (`length [px],length [unit]`)
  - `log`: csv formatted text log (`x1,y1,x2,y2,length [px]`)
- `converter.calcLog;`: log of conversion in csv format (`n,average length [px],value [unit],C [unit/px]`)
