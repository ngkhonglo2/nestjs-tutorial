import { IsEmail, IsInt, IsNotEmpty, IsNotEmptyObject, ValidateNested } from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @ValidateNested()
  // @IsNotEmptyObject()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
