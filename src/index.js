var getPixels = require("get-pixels");

function averageOfArray(arr) {
  if (arr instanceof Array) {
    var total = arr.reduce(
      (accumulateValue, currentValue) => accumulateValue + currentValue,
    );
    return parseFloat((total / arr.length).toFixed(8));
  }
  throw new Error("Should pass only array");
}

function correlation(arr1, arr2) {
  if (arr1 instanceof Array && arr2 instanceof Array) {
    if (arr1.length === arr2.length) {
      var ln = arr1.length;
      var avg1 = averageOfArray(arr1);
      var avg2 = averageOfArray(arr2);

      var avgAccXY = 0;
      var accX = 0;
      var accY = 0;

      for (var i = 0; i < ln; i++) {
        var x = arr1[i] - avg1;
        var y = arr2[i] - avg2;

        avgAccXY += x * y;
        accX += Math.pow(x, 2);
        accY += Math.pow(y, 2);
      }

      accX = Math.sqrt(accX / (ln - 1));
      accY = Math.sqrt(accY / (ln - 1));

      return parseFloat((avgAccXY / ((ln - 1) * accX * accY)).toFixed(9));
    }
    throw new Error("Should be same length Arr1 and Arr2");
  }

  throw new Error("Should be all parameter are Array");
}

async function getImagePixelArray(image) {
  return new Promise(resolve => {
    getPixels(image, function(err, pixels) {
      if (err) {
        console.error("Bad image path");
        throw "Bad image path";
      }
      resolve(Array.from(pixels.data));
    });
  });
}

async function imageCorrelation(image1, image2) {
  var imgADataArray = await getImagePixelArray(image1);
  var imgBDataArray = await getImagePixelArray(image2);

  return correlation(imgADataArray, imgBDataArray);
}

module.exports = { averageOfArray, correlation, imageCorrelation };
