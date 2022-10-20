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

interface IPropertyPhoto {
  id: number;
  externalID: string;
  url: string;
  orderIndex: number;
  nimaScore: number;
}

interface IPropertyAmenity {
  text: string;
}

interface IPropertyPhoneNumber {
  mobile: string;
  phone: string;
  whatsapp: string;
  proxyMobile: string;
}

interface IPropertyGeography {
  lat: number;
  lng: number;
}

export interface IPropertyDetails {
  id: number;
  price: number;
  rentFrequency: string | null;
  rooms: number;
  title: string;
  baths: number;
  area: number;
  agency: IAgencyForProperty;
  contactName: string;
  phoneNumber: IPropertyPhoneNumber;
  isVerified: boolean;
  description: string;
  type: string;
  purpose: string;
  furnishingStatus: null | string;
  amenities: Array<IPropertyAmenity>;
  photos: Array<IPropertyPhoto>;
  geography: IPropertyGeography;
}
