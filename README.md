# HTML5 Color Code Highlighter

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL3.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)

## Overview

The HTML5 Color Code Highlighter is a JavaScript library crafted for developers to seamlessly manage colors within a webpage. This library simplifies the parsing and manipulation of color codes within the text, offering creative features like dynamic hover animations and underlining for color codes. It's specifically designed to enhance the visual appeal of HTML elements, providing a delightful experience for users.

## Features

- **Color Parsing:** Easily parse and manipulate color codes in the text content of your webpage.
- **HTML Element Integration:** Seamlessly integrate color manipulation functionalities with specific HTML elements, enabling customized styling and dynamic visual effects tailored to different parts of your web application. Tailor the library to work seamlessly with specific HTML elements, such as making vibrant headlines with `<h1>` tags.
- **CMYK Support:** Empower your web development team with the ability to parse and manipulate CMYK color codes, crucial for accurate color representation in print media and graphic design projects.  
- **HSVA Support:** Enhance your web application's color capabilities by integrating HSVA (Hue, Saturation, Value, Alpha) color codes, enabling advanced color manipulation and effects for a more immersive user experience.
- **Dynamic Hover Animations:** Elevate user engagement with captivating animations triggered by hovering over colors, providing an interactive and dynamic browsing experience that keeps users hooked.
- **Underline Effect:** Enhance readability and aesthetics by automatically underlining color codes within text content, ensuring better visibility and a polished appearance for your web pages.
- **Cross-Browser Compatibility:** Ensure broad accessibility and consistent user experiences across different web browsers by optimizing the JavaScript library for compatibility with a wide range of browser environments.
- **Clipboard Integration:** Streamline user workflows with built-in clipboard integration, allowing users to easily copy color codes with a single click, enhancing productivity and convenience.
- **Accessibility Features:** Prioritize inclusivity and accessibility by incorporating features that support colorblind users, such as customizable color contrast options and alternative text descriptions for color-coded elements.
- **Responsive Design Support:** Facilitate seamless color adaptation across various screen sizes and devices with responsive design support, ensuring consistent visual appeal and functionality regardless of the user's device.

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

