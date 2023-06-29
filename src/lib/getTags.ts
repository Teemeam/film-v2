const getTags = (tags: Tags) => {
  const tagArray: string[] = [];

  tags.tag.map((tag) => {
    tagArray.push(tag._content);
  });

  return tagArray;
};

export default getTags;
