# Opencart Step Calculator Widget

NPM:

```
npm install oscw
```
CDN:

```
https://cdn.jsdelivr.net/gh/sviniabanditka/oscw/dist/oscw.min.js
```

# Usage

## ES6

```
import OSCW from 'oscw'
let oscw = new OSCW('#oscw')
```

## Plain HTML

```
<!DOCTYPE html>
<html>
<head>...</head>
<body>
  <div id="oscw"></div>
</body>
<script src="https://cdn.jsdelivr.net/gh/sviniabanditka/oscw/dist/oscw.min.js"></script>
<script>
  let oscw = new OSCW('#oscw')
  console.log(oscw);
</script>
</html>
```