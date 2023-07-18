import fs from 'fs';

const generateSafelist = (data: CompleteData[]): void => {
  const sortedData = data.sort((a, b) => b.aspectRatio - a.aspectRatio);

  const safeList = Array.from(
    new Set(sortedData.map((dataItem) => `pb-[${100 / dataItem.aspectRatio}%]`))
  );

  const fileContent = `const safelist = [\n${safeList
    .map((item) => `  '${item}',`)
    .join('\n')}\n];\n\nexport default safelist;\n`;

  fs.writeFileSync('safelist.ts', fileContent);

  console.log('Safelist updated!');
};

export default generateSafelist;
