import { UserRole } from '@/services/auth.types'
import { FluoroStatus } from '@/services/fluoro.types'

export interface IUser {
	id: string
	email: string
	firstName: string
	middleName?: string
	lastName: string
	role: UserRole
	group?: string
	fluorography?: IFluorography
}

export interface IChangeUserForm {
	lastName: string
	firstName: string
	email: string
}

export interface IUserFluoro {
	id: string
	firstName: string
	middleName?: string
	lastName: string
	group?: string
	fluorography: IFluorography
}

export interface IFluorography {
	filePath: string
	date: Date
	description: string
	status: FluoroStatus
}

export interface IUserCheckFluoro extends Omit<IUser, 'role' | 'email' | 'id'> {
	Fluorography: IFluorography
}

export interface IFormSendFluoro {
	file: any
	date: Date
	desc: string
}

export interface IFormData extends Pick<IUser, 'email'> {
	password: string
}

export interface IRegisterData {
	email: string
	firstName: string
	middleName?: string
	lastName: string
	group?: string
	password: string
}

export interface IPopupData {
	id?: string
	email?: string
	firstName?: string
	middleName?: string
	lastName?: string
	role?: UserRole
}

export interface IUserData {
	id?: string
	email: string
	firstName: string
	middleName?: string
	lastName: string
	group?: string
	role?: UserRole
}

export interface IChangeRole {
	id: string
	role: UserRole
}
