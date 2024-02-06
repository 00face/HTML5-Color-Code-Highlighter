/* eslint-env es6 */
// Function to check if a string is a valid color code
function isColor(strColor) {
    // Try to parse as HSV/HSVA
    if (
        /^hsva?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d*(?:\.\d+)?)%\s*)?\)$/i.test(
            strColor,
        )
    ) {
        return 'hsva';
    }
    // Parse as CMYK
    if (
        /^cmyk\(\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/.test(
            strColor,
        )
    ) {
        return 'cmyk';
    }
    // Check if it's a valid hex color with or without a semicolon
    if (/#([0-9A-Fa-f]{6})(?:;|$)/.test(strColor)) {
        return 'hex';
    }
    // Check if it's a valid CSS color name
    const e = document.createElement('div');
    e.style.color = strColor;
    return e.style.color ? 'named' : false;
}

// Function to convert CMYK to Hex
function convertCMYKToHex(c, m, y, k) {
    // CMYK (Cyan, Magenta, Yellow, Key/Black) is a color model used primarily in printing.
    // It represents the four ink colors used in printing processes, along with a key (black) component for depth and contrast.

    // Calculate red component based on CMYK values
    const r = Math.round(255 * (1 - c / 100) * (1 - k / 100));
    // Calculate green component based on CMYK values
    const g = Math.round(255 * (1 - m / 100) * (1 - k / 100));
    // Calculate blue component based on CMYK values
    const b = Math.round(255 * (1 - y / 100) * (1 - k / 100));
    // Generate hexadecimal representation of the color
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

// Function to convert HSVA to RGBA
function convertHSVAtoRGBA(h, s, v, a = 1) {
    // Calculate the chroma (color intensity) based on saturation and value
    const chroma = (v * s) / 100;
    // Normalize hue to simplify calculations
    const hPrime = h / 60;
    // Calculate the intermediate value 'x' based on chroma and hue
    const x = chroma * (1 - Math.abs((hPrime % 2) - 1));
    // Calculate the minimum brightness 'm'
    const m = v / 100 - chroma;
    let r;
    let g;
    let b;

    // Determine which sector of the color wheel the hue falls into and set RGB values accordingly
    if (hPrime >= 0 && hPrime < 1) {
        // Red dominant sector
        [r, g, b] = [chroma, x, 0];
    } else if (hPrime >= 1 && hPrime < 2) {
        // Yellow dominant sector
        [r, g, b] = [x, chroma, 0];
    } else if (hPrime >= 2 && hPrime < 3) {
        // Green dominant sector
        [r, g, b] = [0, chroma, x];
    } else if (hPrime >= 3 && hPrime < 4) {
        // Cyan dominant sector
        [r, g, b] = [0, x, chroma];
    } else if (hPrime >= 4 && hPrime < 5) {
        // Blue dominant sector
        [r, g, b] = [x, 0, chroma];
    } else {
        // Magenta dominant sector
        [r, g, b] = [chroma, 0, x];
    }

    // Adjust and round RGB values to fit within the 8-bit range (0-255)
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    // Return the RGBA color string
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// Function to add the blob animation effect to the circle when hovering
function makeMorphy(element, rectangle) {
    const supportsAnimation = typeof CSS !== 'undefined' && CSS.supports('animation: name');
    const supportsTransition = typeof CSS !== 'undefined' && CSS.supports('transition: property');

    // Initialize shapeIndex outside the function to retain its state
    let shapeIndex = 0;

    if (supportsAnimation && supportsTransition) {
        // Use CSS animations and transitions if supported
        rectangle.classList.add('shape-morph');
    } else {
        // Fallback for very old browsers
        rectangle.classList.add('no-animation');

        // Fallback for very old browsers
        rectangle.classList.add('no-animation');

        var animateFallback = function() {
            switch (shapeIndex) {
                case 0:
                    rectangle.style.borderRadius = '50%';
                    break;
                case 1:
                    rectangle.style.borderRadius = '0';
                    break;
                case 2:
                    // Assuming an equilateral triangle
                    rectangle.style.borderBottomLeftRadius = '50%';
                    rectangle.style.borderBottomRightRadius = '50%';
                    rectangle.style.borderTopLeftRadius = '50%';
                    rectangle.style.borderTopRightRadius = '50%';
                    rectangle.style.transform = 'rotate(60deg)';
                    break;
            }

            shapeIndex = (shapeIndex + 1) % 3;
            requestAnimationFrame(animateFallback);
        };

        animateFallback(); // Start the animation
    }

    if (supportsAnimation) {
        // Use CSS keyframe animation for modern browsers
        const morphyKeyframes = [{
            borderRadius: '50%',
            transform: 'rotate(0deg)'
        }, {
            borderRadius: '0',
            transform: 'rotate(0deg)'
        }, {
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            transform: 'rotate(60deg)',
        }, ];

        const morphyTiming = {
            duration: 1000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',
        };

        rectangle.animate(morphyKeyframes, morphyTiming);
    } else {
        // Fallback for browsers that don't support CSS animations
        // (e.g., Internet Explorer 11)
        const morphyInterval = setInterval(() => {
            switch (shapeIndex) {
                case 0:
                    rectangle.style.borderRadius = '50%';
                    break;
                case 1:
                    rectangle.style.borderRadius = '0';
                    break;
                case 2:
                    // Assuming an equilateral triangle
                    rectangle.style.borderBottomLeftRadius = '50%';
                    rectangle.style.borderBottomRightRadius = '50%';
                    rectangle.style.borderTopLeftRadius = '50%';
                    rectangle.style.borderTopRightRadius = '50%';
                    rectangle.style.transform = 'rotate(60deg)';
                    break;
            }

            shapeIndex = (shapeIndex + 1) % 3;
        }, 1000);

        element.addEventListener('mouseout', () => {
            clearInterval(morphyInterval);
            rectangle.style.borderRadius = '50%';
            rectangle.style.transform = 'rotate(0deg)';
        });
    }

    element.addEventListener('mouseover', () => {
        if (supportsAnimation) {
            // Use CSS animation if supported
            rectangle.classList.add('shape-morph-animation');
        }
    });

    element.addEventListener('mouseout', () => {
        if (supportsAnimation) {
            // Use CSS animation if supported
            rectangle.classList.remove('shape-morph-animation');
        }
    });
}

// Call processAndSplitColorCodes for the entire document body
processAndSplitColorCodes(document.documentElement);

// Function to recursively process and highlight colors within a node
function processAndHighlightColors(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        // This is a text node, so process and highlight the color
        const text = node.textContent.trim().replace(/;/g, ''); // Trim whitespace and remove semicolons

        const colorType = isColor(text);

        if (colorType) {
            // Create a new span element for the underline and rectangle
            const span = document.createElement('span');
            span.textContent = text;
            span.style.position = 'relative';
            span.style.display = 'inline-block';

            // Create the underline
            const underline = document.createElement('div');
            underline.style.height = '5px';
            underline.style.width = '100%';
            underline.style.backgroundColor = text;
            underline.style.position = 'absolute';
            underline.style.bottom = '0';
            span.appendChild(underline);

            // Create the rectangle
            const rectangle = document.createElement('div');
            rectangle.style.height = '5px';
            rectangle.style.width = '5px';
            rectangle.style.borderRadius = '40px';
            rectangle.style.backgroundColor = text;
            rectangle.style.position = 'absolute';
            rectangle.style.bottom = '0';
            rectangle.style.left = '0';
            rectangle.style.transition = 'all 0.3s ease';
            span.appendChild(rectangle);

            // Event listeners for the hover animation
            let timeout;
            span.addEventListener('mouseover', () => {
                timeout = setTimeout(() => {
                    rectangle.style.width = '30px';
                    rectangle.style.height = '30px';
                    rectangle.style.bottom = '25px';
                    rectangle.style.borderRadius = '20px';
                    makeMorphy(span, rectangle);
                }, 1000);
            });

            span.addEventListener('mouseout', () => {
                clearTimeout(timeout);
                rectangle.style.width = '5px';
                rectangle.style.height = '5px';
                rectangle.style.bottom = '0';
                rectangle.style.borderRadius = '0';
                rectangle.style.transform = 'none';
            });

            // Handle different color types
            switch (colorType) {
                case 'cmyk':
                    var cmykMatch = /cmyk\(\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)/.exec(
                        text,
                    );
                    if (cmykMatch) {
                        var hexColor = convertCMYKToHex(
                            parseFloat(cmykMatch[1]),
                            parseFloat(cmykMatch[2]),
                            parseFloat(cmykMatch[3]),
                            parseFloat(cmykMatch[4]),
                        );
                        underline.style.backgroundColor = hexColor;
                        rectangle.style.backgroundColor = hexColor;
                    }
                    break;
                case 'hsva':
                    var hsvaMatch = /hsva?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d*(?:\.\d+)?)%\s*)?\)/.exec(
                        text,
                    );
                    if (hsvaMatch) {
                        const rgbaColor = convertHSVAtoRGBA(
                            parseFloat(hsvaMatch[1]),
                            parseFloat(hsvaMatch[2]),
                            parseFloat(hsvaMatch[3]),
                            parseFloat(hsvaMatch[4]) / 100,
                        );
                        underline.style.backgroundColor = rgbaColor;
                        rectangle.style.backgroundColor = rgbaColor;
                    }
                    break;
                case 'hex':
                    var hexMatch = /#([0-9A-Fa-f]{6})/.exec(text);
                    if (hexMatch) {
                        var hexColor = hexMatch[0];
                        underline.style.backgroundColor = hexColor;
                        rectangle.style.backgroundColor = hexColor;
                    }
                    break;
                case 'named':
                    var namedColor = text;
                    underline.style.backgroundColor = namedColor;
                    rectangle.style.backgroundColor = namedColor;
                    break;
                default:
                    break;
            }

            // Check if the parent node exists before replacing
            if (node.parentNode) {
                // Replace the original text node content with the new span element
                node.parentNode.replaceChild(span, node);
            }
        }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        // This is an element node, so process its children
        for (const childNode of node.childNodes) {
            processAndHighlightColors(childNode);
        }
    }
}

// Call processAndHighlightColors for the entire document body
processAndHighlightColors(document.documentElement);

// Function to split color codes into their own span elements
function splitColorCodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        // This is a text node, so split color codes into spans
        const text = node.textContent;
        const colorRegex = /#[0-9A-Fa-f]{6}|rgb\(.+?\)|rgba\(.+?\)|hsva?\(.+?\)|hsv\(.+?\)|cmyk\(.+?\)|hsl\(.+?\)|hwb\(.+?\)|\b\w+\b(?:\(.+?\))?;?/g;
        const colorMatches = text.match(colorRegex);

        if (colorMatches) {
            const textParts = text.split(colorRegex);
            textParts.forEach((textPart, index) => {
                const span = document.createElement('span');
                span.textContent = textPart;
                node.parentNode.insertBefore(span, node);

                if (colorMatches[index]) {
                    const colorSpan = document.createElement('span');
                    colorSpan.textContent = colorMatches[index];
                    colorSpan.style.position = 'relative';
                    colorSpan.style.display = 'inline-block';

                    // Create the underline
                    const underline = document.createElement('div');
                    underline.style.height = '5px';
                    underline.style.width = '100%';
                    underline.style.backgroundColor = colorMatches[index];
                    underline.style.position = 'absolute';
                    underline.style.bottom = '0';
                    colorSpan.appendChild(underline);

                    // Create the rectangle
                    const rectangle = document.createElement('div');
                    rectangle.style.height = '5px';
                    rectangle.style.width = '5px';
                    rectangle.style.borderRadius = '0';
                    rectangle.style.backgroundColor = colorMatches[index];
                    rectangle.style.position = 'absolute';
                    rectangle.style.bottom = '0';
                    rectangle.style.left = '0';
                    rectangle.style.transition = 'all 0.3s ease';
                    rectangle.style.webkitTransition = 'all 0.3s ease'; // Webkit prefix
                    rectangle.style.mozTransition = 'all 0.3s ease'; // Moz prefix
                    rectangle.style.msTransition = 'all 0.3s ease'; // MS prefix
                    rectangle.style.oTransition = 'all 0.3s ease'; // Opera prefix
                    colorSpan.appendChild(rectangle);

                    // Event listeners for the hover animation
                    let timeout;
                    colorSpan.addEventListener('mouseover', () => {
                        timeout = setTimeout(() => {
                            rectangle.style.width = '30px';
                            rectangle.style.height = '30px';
                            rectangle.style.bottom = '25px';
                            rectangle.style.borderRadius = '20px';
                            makeMorphy(colorSpan, rectangle);
                        }, 1000);
                    });

                    colorSpan.addEventListener('mouseout', () => {
                        clearTimeout(timeout);
                        rectangle.style.width = '5px';
                        rectangle.style.height = '5px';
                        rectangle.style.bottom = '0';
                        rectangle.style.borderRadius = '0';
                        rectangle.style.transform = 'none';
                    });

                    // Add event listener to copy color value when span is clicked
                    colorSpan.addEventListener('click', () => {
                        const input = document.createElement('input');
                        input.value = colorMatches[index];
                        document.body.appendChild(input);
                        input.select();
                        document.execCommand('copy');
                        document.body.removeChild(input);

                        const tooltip = document.createElement('span');
                        tooltip.innerHTML = 'Copied!';
                        tooltip.style.position = 'absolute';
                        tooltip.style.bottom = '35px';
                        tooltip.style.left = '0';
                        tooltip.style.color = 'white';
                        tooltip.style.fontSize = '10px';
                        tooltip.style.padding = '2px 5px';
                        tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                        tooltip.style.borderRadius = '5px';
                        tooltip.style.transition = 'all 0.3s ease';
                        colorSpan.appendChild(tooltip);

                        setTimeout(() => {
                            tooltip.style.opacity = '0';
                        }, 1000);
                    });

                    node.parentNode.insertBefore(colorSpan, node);
                }
            });

            // Remove the original text node
            node.parentNode.removeChild(node);
        }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        // This is an element node, so process its children
        const childNodes = Array.from(node.childNodes);
        for (const childNode of childNodes) {
            splitColorCodes(childNode);
        }
    }
}
// Function to recursively process and split color codes within a node
function processAndSplitColorCodes(node) {
    splitColorCodes(node);
}
