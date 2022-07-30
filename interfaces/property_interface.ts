interface ICoverPhotoForProperty {
  id: number;
  externalID: string;
  title: string | null;
  url: string;
  orderIndex: number;
  nimaScore: number;
  main: boolean;
}

interface IAgencyForProperty {
  id: number;
  objectID: number;
  name: string;
  name_l1: string;
  externalID: string;
  product: string;
  productScore: number;
  logo: {
    id: number;
    url: string;
  };
  slug: string;
  slug_l1: string;
  tier: number;
  createdAt: string;
}

export interface IProperty {
  externalID: string;
  coverPhoto: ICoverPhotoForProperty;
  price: number;
  rentFrequency: string;
  title: string;
  rooms: number;
  baths: number;
  area: number;
  agency: IAgencyForProperty;
  isVerified: boolean;
}
