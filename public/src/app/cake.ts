export interface Cake {
  name: string,
  img: string,
  _id?: string,
  createdAt?: Date,
  updatedAt?: Date,
  comments?: Comment[],
}

