import { IsNotEmpty, IsNumber, IsString, isNotEmpty } from 'class-validator';

export class OrderDto {
  @IsString()
  @IsNotEmpty()
  customer_id: string;

  @IsString()
  @IsNotEmpty()
  staff_id: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  shipping_fee?: number;

  @IsNumber()
  total?: number;

  @IsString()
  @IsNotEmpty()
  coupon_id: string;

  canceled_at?: string;

  completed_at?: string;

  delivery_at?: string;
}
