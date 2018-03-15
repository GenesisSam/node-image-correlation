var { imageCorrelation, averageOfArray, correlation } = require(".");
var { imageA, imageB } = require("../mocks/mock");

describe("CorrelationNodeJs", () => {
  describe("averageOfArray()", () => {
    describe("[1,2,3,4,5,6,7,8,9,10]", () => {
      it("should return 5.5", () => {
        var val = averageOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(val).toBe(5.5);
      });
    });

    describe("[12,33.3,23.1,112,32.3,60.9]", () => {
      it("should return 45.6", () => {
        var val = averageOfArray([12, 33.3, 23.1, 112, 32.3, 60.9]);
        expect(val).toBe(45.6);
      });
    });
  });

  describe("correlation()", () => {
    describe("[1,2,3,4,5], [0,6,2,10,4]", () => {
      it("should return 0.49319...", () => {
        var val = correlation([1, 2, 3, 4, 5], [0, 6, 2, 10, 4]);
        expect(val).toBe(0.493196962);
      });
    });
  });

  describe("imageCorrelation()", () => {
    describe("when give same image", () => {
      it("should return 1", async () => {
        var val = await imageCorrelation(imageA, imageA);
        expect(val).toBe(1);
      });
    });

    describe("when give similar image", () => {
      it("should return 0.920361324", async () => {
        var val = await imageCorrelation(imageA, imageB);
        expect(val).toBe(0.920361324);
      });
    });
  });
});
