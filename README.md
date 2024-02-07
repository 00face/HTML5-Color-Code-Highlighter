# HTML5 Color Code Highlighter

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL3.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)

## Overview

The HTML5 Color Code Highlighter is a JavaScript library crafted for developers to seamlessly manage colors within a webpage. This library simplifies the parsing and manipulation of color codes within the text, offering creative features like dynamic hover animations and underlining for color codes. It's specifically designed to enhance the visual appeal of HTML elements, providing a delightful experience for users.

## Features

- **Color Parsing:** Easily parse and manipulate color codes in the text content of your webpage.
- **Hover Animations:** Implement captivating animations when users hover over colors, adding a dynamic touch to your design.
- **Underline Effect:** Automatically underline color codes for better visibility and a polished look.
- **Element Enhancement:** Tailor the library to work seamlessly with specific HTML elements, such as making vibrant headlines with `<h1>` tags.

## Usage

1. **Include the Library:**
   Add the HTML5 Color Code Highlighter library to your project.

   ```html
   <!-- Include the library script -->
   <script type="text/javascript" src="colorcodes.js" defer></script>
   ```

2. **Initialize the Library:**
   Use the library to process and enhance color codes on your webpage.

   ```javascript
   // Example initialization
   document.addEventListener("DOMContentLoaded", function() {
       processAndHighlightColors(document.body);
   });
   ```

3. **Example HTML with Color Codes:**
   Include HTML content with color codes for the library to process.

   ```html
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Color Codes</title>
     <script src="colorcodes.js" defer></script>
   </head>
   <body>
     <p>This is a paragraph with a CMYK color code: cmyk(100%, 50%, 50%, 50%);</p>
     <p>This is a paragraph with an HSVA color code: hsva(360, 100%, 100%, 70%);.</p>
     <p>This is a paragraph with an HSL color code: hsl(240, 100%, 50%);</p>
     <p>This is a paragraph with an HWB color code: hwb(180 50% 0%);</p>
     <pre>
       <code>This is a code window with a #C4C6BF; color code.</code>
     </pre>
   </body>
   </html>
   ```

4. **Demonstration**
   - Live demonstration: [CodePen](https://codepen.io/thefacebiters/pen/yLxNmoL).
   - Hosted: [GitHub](https://raw.githack.com/00face/HTML5-Color-Code-Highlighter/main/colorcode.html).
   - Recorded demonstration: [Recorded Demonstration](https://s5.gifyu.com/images/Siw3j.gif).

5. **Customize as Needed:**
   Tailor the library to your requirements and integrate it seamlessly with your HTML elements.

   ```javascript
   // Example customization
   var h1Elements = document.querySelectorAll("h1");
   for (var h1Element of h1Elements) {
       splitColorCodes(h1Element);
   ```
   
## License

This project is licensed under the [GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0) - see the [LICENSE.md](LICENSE.md) file for details.

