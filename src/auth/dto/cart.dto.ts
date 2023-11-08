import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CartDto {
  @IsString()
  @IsNotEmpty()
  customer_id: string;
}
