export type TBicycle = {
  _id:string
  name: string;
  image:string;
  brand: string;
  price: number;
  type: "Electric" | "Mountain" | "Road" | "Hybrid";
  quantity: number;
  description: string;
};
