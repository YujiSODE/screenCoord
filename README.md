# screenCoord
A simple tool for estimating length on HTML in CSS pixel.  
GitHub: https://github.com/YujiSODE/screenCoord  
>Copyright (c) 2018 Yuji SODE \<yuji.sode@gmail.com\>  
>This software is released under the MIT License.  
>See LICENSE or http://opensource.org/licenses/mit-license.php
______
![screenshot of screenCoord.js](https://user-images.githubusercontent.com/19919184/47915340-e3787700-dee5-11e8-8656-26377b5c2a89.png)  
**Figure 1. Screenshot of screenCoord.**  
Length on HTML view is estimated using a distance between two clicked points.  
Clicks on "available area" are detected as above clicked points.  
- colored rectangle: it changes color of `available area`.
- `[-]` and `[+]`: they change size of available area.
- `[<=>]`: it moves these controls.
- `[Log]`: it shows the current log of "screenCoord.js".
- `[Clear]`: it clears the current log of "screenCoord.js".
- `[X]`: it cloes these controls.
- `Available area`: it closes/opens `available area`.
______
## 1. Synopsis
`var f=screenCoord(?zIndex?);`

### Description
This function generates a folding canvas and returns a function that returns text log.

#### Parameter
- `zIndex`: an optional integer value for z-index with default value of 1000.

#### Text log format
Function that generated using `screenCoord(?zIndex?)` returns csv formatted text log as follows:  
`x1,y1,x2,y2,length [px]`

## 2. Scripts
### Main script of screenCoord
- `screenCoord.js`

### Additional modules
- [`screenCoord_unitConverter.js`](unitConverter_README.md)

#### Usage
`<script src="screenCoord.js"></script>`  
`<script src="`name of additional module`"></script>`
