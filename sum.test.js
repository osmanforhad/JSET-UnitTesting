//const fetchPromise = require("./sum");
//const fetchData = require("./sum");
//const myFunction = require("./sum");
//const sum = require("./sum");
/**
 * test function cotain a description
 * and
 * a arrow function
 */

//Mathcer Testing Technique

//writing test case for numaric addition
// test('to pluse to is four', () => {
//     expect(sum(1, 2)).toBe(3); //to be used for premitive value like number boolian true false
// });

/**
 * test function cotain a description
 * and
 * a arrow function
 */
//writing test case for numaric addition
// test('to pluse to is four', () => {
//     expect(2+2).toBe(4); //tobe used for premitive value like number boolian true false
// });

//writing test case for equal value
// test("object assignment", () => {
//   const data = { one: 1 };
//   data["two"] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

//writing test case for false value
// test("null is falsy", () => {
//   const n = null;
//   expect(n).toBeFalsy();
// });

//writing test case for true value
// test("one is truthy", () => {
//   const n = 1;
//   expect(n).toBeTruthy();
// });

//writing test case for throw error
// test("throws on invalid input", () => {
//   expect(() => {
//     myFunction("jhfjhsfh");
//   }).toThrow();
// });

/**
 * Asynchronous Testing Technique
 */

//writing test case for call back function
// test("the data is Mauntain Deu", (done) => {
//   function callback(data) {
//     try {
//       expect(data).toBe("Mauntain Deu");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }
//   fetchData(callback);
// });

//writing test case for promise based function
// test("the data is Mauntain Deu", () => {
//   return expect(fetchPromise()).resolves.toBe("Mauntain Deu");
// });
//writing test case if promise reject
// test("the fetch fails with an error", () => {
//   return expect(fetchPromise()).rejects.toThrow("error");
// });

//writing test case for async await
// test("the data is Mauntain Deu", async () => {
//   const data = await fetchPromise();
//   expect(data).toBe("Mauntain Deu");
// });

/**
 * Mock functin Testing Technique
 */
// test("implemention of a basic mock function", () => {
//   const mock = jest.fn((x) => 42 + x);
//   expect(mock(1)).toBe(43);
//passing argument for mock function
//   expect(mock).toHaveBeenCalledWith(1);
// });

//writing test case for Spies
test("spying on a method of an object", () => {
  const video = {
    play() {
      return true;
    },
  };
  const spy = jest.spyOn(video, "play");
  video.play();
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
