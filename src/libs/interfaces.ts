export interface IHeaderCard {
  title: string;
  info: string;
  url: string;
}

export interface ICardArduino {
  name: string;
  image: string;
  info: string[];
}

export interface ICardProject {
  _id: string;
  name: string;
  image: string;
  url: string;
  info: string;
}

export interface IDataReceivePOST {
  name: string;
  image: string;
  url: string;
  info: string;
}