
import { Category } from './category.type.js';
import { User } from './user.type.js';

export type Offer = {
  title: string;
  description: string;
  typeCity: string;
  postDate: Date;
  image: string;
  premium: boolean;
  rating: number;
  typeOfProperty: string;
  categories: Category[];
  price: number;
  rooms: number;
  guests: number;
  commentsNumber: number;
  coordinate: number;
  user: User;
}
