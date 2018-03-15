# node-image-correlation

## Concept

Can be check similar two images from nodeJS.

### Function signiture & Processing

It's return Similarity/Correlation rate.

```typescript
function correlation(sourceArray: Array, targetArray: Array): float;
```

## Install

`npm i image-correlation`

## How to use

```node
var {imageCorrelation} = require("image-correlation");

imageCorrelation(image, image); // return 0.493196962
```

`image: url is the path to the file. It can be a relative path, an http url, a data url, or an in-memory Buffer.`
