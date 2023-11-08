import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Cart_Item_Dto {
  @IsString()
  @IsNotEmpty()
  cart_id: string;

  @IsString()
  @IsNotEmpty()
  product_id: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
