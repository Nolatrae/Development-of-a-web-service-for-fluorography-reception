import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Password must be at least 6 characters long',
	})
	@IsString()
	password: string

	@IsString()
	firstName: string

	@IsString()
	@IsOptional()
	middleName: string

	@IsString()
	lastName: string

	@IsOptional()
	@IsString()
	group: string
}
