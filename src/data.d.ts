/**
 * Original data
 */
type Data = {
  photoset: Photoset;
};

type Photoset = {
  id: string;
  photo: Photo[];
};

type Photo = {
  id: string;
  secret: string;
  server: string;
};

/**
 * Complete data
 */
type CompleteData = {
  height: number;
  data: Info[];
};

type InfoWrapper = {
  photo: Info;
  i: number;
  handleImageLoaded: Function;
};

type Info = {
  id?: string;
  secret?: string;
  server?: string;
  originalsecret?: string;
  originalformat?: string;
  description?: Description;
  dates?: Dates;
  urls?: Urls;
  tags?: Tags;
};

type Description = {
  _content: string;
};

type Dates = {
  posted: string;
  taken: string;
};

type Urls = {
  url: Url[];
};

type Url = {
  type: string;
  _content: string;
};

type Tags = {
  tag: Tag[];
};

type Tag = {
  _content: string;
};
