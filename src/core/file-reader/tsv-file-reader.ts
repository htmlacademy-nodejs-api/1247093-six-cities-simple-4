import { readFileSync } from 'node:fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Offer } from '../../types/offer.type.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title, description, typeCity, createdDate, image, premium, rating, typeOfProperty, price, rooms, guests, categories, commentsNumber, coordinate, email, firstname, password, avatarPath, type]) => ({
        title,
        description,
        typeCity,
        postDate: new Date(createdDate),
        image,
        premium: !!premium,
        rating: Number(rating),
        typeOfProperty,
        categories: categories.split(';')
          .map((name) => ({name})),
        price: Number(price),
        rooms: Number(rooms),
        guests:Number(guests),
        commentsNumber: Number(commentsNumber),
        coordinate: Number(coordinate),
        user: {email, firstname, type, avatarPath, password},
      }));
  }
}
