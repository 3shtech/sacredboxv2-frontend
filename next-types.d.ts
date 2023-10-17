// search form field types
type searchFormFieldType = {
  keyword: string;
  address?: string;
  category?: string;
};

type filterFormFieldType = {
  date?: string;
  availability?: string;
  keyword?: string;
  address?: string;
  category?: string;
  filterRadius?: number;
};

// provider types
type Location = {
  address: string;
  city: string;
  zipcode: number;
  country: string;
};

type provider = {
  id: string;
  profilePicture: string;
  name: string;
  services: string[];
  bio: string;
  experience: number;
  languages: string[];
  location: Location;
};
