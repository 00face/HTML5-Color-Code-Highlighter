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
    <script src="colorcodes.js" defer></script>


Certainly! Here's a template you can use for your GitHub page:

```markdown
# HTML5 Color Code Highlighter

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

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
   <script src="path/to/color-code-highlighter.js"></script>
   ```

2. **Initialize the Library:**
   Use the library to process and enhance color codes on your webpage.

   ```javascript
   // Example initialization
   document.addEventListener("DOMContentLoaded", function() {
       processAndHighlightColors(document.body);
   });
   ```

   or

   ```html5
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Codes</title>
    <script src="colorcodes.js" defer></script>
  </head>
  <body>
    <!--Working-->
    <p>Working:</p>
    <p> #C4C6BF </p>
    <p>#C4C6BB; </p>
    <p>red;</p>
    <p>rgb(255,255,55,.5);</p>
    <p>rgba(255, 0, 0, 0.5);</p>
    <p>hsl(0deg, 100%, 50%);</p>
    <p>hwb(12 50% 0%);</p>
    <p>#C4C6BF;</p>
    <p>cmyk(100%, 50%, 50%, 50%);</p>
    <p>hsva(360, 100%, 100%, 70%);</p>
    <p>purple</p>
    <h1>This is a heading with a color code: #C4C6BF;</h1>
    <p>This is a paragraph with a #C4C6BB; <span style="color: #C4C6BB;">color code</span> inside. </p>
    <p>This is another paragraph with a red <span class="blob" style="color: red;">color code</span> inside. </p>
    <p>This is a nested paragraph with a rgb(255,255,55,.5); <span style="color: rgb(255,255,55,.5);">color code</span> inside. </p>
    <p>This is a nested paragraph with a rgba(255, 0, 0, 0.5); <span style="color: rgba(255, 0, 0, 0.5);">color code</span> inside. </p>
  </div>
  <p>This is a paragraph with a CMYK color code: cmyk(100%, 50%, 50%, 50%);</p>
  <p>This is a paragraph with an HSVA color code: hsva(360, 100%, 100%, 70%);.
    <p>This is a paragraph with an HSL color code: hsl(240, 100%, 50%);</p>
    <p>This is a paragraph with an HWB color code: hwb(180 50% 0%);</p>
        <pre>
      <code>This is a code window with a #C4C6BF; color code.</code>
    </pre>
    <!-- Excluded -->
    <p>Excluded elements</p>
    <input type="text" value="#00000; This is an input field with text."></input>
  </body>
   ```

4. **Customize as Needed:**
   Tailor the library to your requirements, and integrate it seamlessly with your HTML elements.

   ```javascript
   // Example customization
   var h1Elements = document.querySelectorAll("h1");
   for (var h1Element of h1Elements) {
       splitColorCodes(h1Element);
   }
   ```

## License

This project is licensed under the [GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0) - see the [LICENSE.md](LICENSE.md) file for details.
