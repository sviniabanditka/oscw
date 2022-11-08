const initCSS = () => {
  // Create a <link> element
  var link = document.createElement("link");

  // Set the link type to and rel attributes
  link.type = "text/css";
  link.rel = "stylesheet";
  
  if (process.env.NODE_ENV  == 'production') {
    // A CDN link to your production CSS
    link.href = "https://cdn.jsdelivr.net/gh/sviniabanditka/oscw/dist/oscw.min.css";
  } else {
    // Your local CSS for local development
    link.href = "./../dist/oscw.min.css";
  }

  // Append the stylesheet to the <head> of the DOM
  var head = document.head;
  head.appendChild(link);
}

export default initCSS;