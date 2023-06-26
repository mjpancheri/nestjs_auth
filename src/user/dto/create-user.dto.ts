import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'email@example.com',
    description: 'email of user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'secretPassword1',
    description: 'password of user',
    minLength: 8,
    maxLength: 32,
  })
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'name of user',
    maxLength: 255,
  })
  @IsString()
  @MaxLength(255)
  name: string;
}
