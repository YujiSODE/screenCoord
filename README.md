# screenCoord
A simple tool for estimating length on HTML in CSS pixel.  
GitHub: https://github.com/YujiSODE/screenCoord  
>Copyright (c) 2018 Yuji SODE \<yuji.sode@gmail.com\>  
>This software is released under the MIT License.  
>See LICENSE or http://opensource.org/licenses/mit-license.php
______
## 1. Synopsis
`var f=screenCoord(?zIndex?);`  
### Description
This function generates a folding canvas and returns a function that returns text log.  
**Parameter**  
- `zIndex`: an optional integer value for z-index with default value of 1000.

**Text log format**  
Function that generated using `screenCoord(?zIndex?)` returns csv formatted text log as follows:  
`x1,y1,x2,y2,length [px]`

## 2. Scripts
**Main script of screenCoord**
- `screenCoord.js`

**Additional modules**
- `screenCoord_unitConverter.js`

**Usage**  
`<script src="screenCoord.js"></script>`  
`<script src="`name of additional module`"></script>`
