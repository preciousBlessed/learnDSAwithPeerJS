function randiArray(n, min, max) {
  /***
   * @n {number}
   * @min {number}
   * @max {number}
   *
   * This function will return the array with n integers between min and max
   * Use it to test the sorting algorithms...
   */

  const result = [];
  for (let i = 0; i < n; i++) {
    let randi = min + Math.round((max - min) * Math.random());
    result.push(randi);
  }
  return result;
}

// console.log(randiArray(20, -50, 50)); //generate 20 numbers between -50 and 50 inclusive...
export { randiArray };
