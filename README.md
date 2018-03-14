# node-image-correlation
## Concept ##
Can be check similar two images from nodeJS.

### Function signiture & Processing ###
It's return Similarity/Correlation rate.
```typescript
function correlation(sourceArray: Array, targetArray: Array): float
```

## Install ##
```npm i image-correlation```

## How to use ##
```node
var {correlation} = require("image-correlation");

correlation([1, 2, 3, 4, 5], [0, 6, 2, 10, 4]); // return 0.493196962
```
