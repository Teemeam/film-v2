const divideDataByAspectRatio = (data: FormattedData[]) => {
  // Sort the array based on aspectRatio
  const sortedArray = data.sort((a, b) => a.aspectRatio - b.aspectRatio);

  const array1: FormattedData[] = [];
  const array2: FormattedData[] = [];

  let sum1 = 0;
  let sum2 = 0;

  sortedArray.map((dataItem, i) => {
    if (i === sortedArray.length - 2 && sum1 < sum2 + 1 / dataItem.aspectRatio) {
      array1.push(dataItem);
      sum1 += 1 / dataItem.aspectRatio;
    } else if (sum1 <= sum2) {
      array1.push(dataItem);
      sum1 += 1 / dataItem.aspectRatio;
    } else {
      array2.push(dataItem);
      sum2 += 1 / dataItem.aspectRatio;
    }
  });

  return [array1, array2];
};

export default divideDataByAspectRatio;
