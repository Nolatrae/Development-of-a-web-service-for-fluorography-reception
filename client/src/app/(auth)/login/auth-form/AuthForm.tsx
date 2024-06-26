'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import authService from '@/services/auth.service'
import { IFormData } from '@/types/types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

interface AuthFormProps {
	isLogin: boolean
}

export function AuthForm() {
	const { register, handleSubmit, reset } = useForm<IFormData>()

	const router = useRouter()

	const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IFormData) => authService.main('login', data),
		onSuccess() {
			reset()
			router.push('/')
		},
	})

	const {
		error,
		mutate: mutateRegister,
		isPending: isRegisterPending,
	} = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IFormData) => authService.main('register', data),
		onSuccess() {
			reset()
			router.push('/')
		},
	})

	const isPending = isLoginPending || isRegisterPending

	const onSubmit: SubmitHandler<IFormData> = data => {
		mutateLogin(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='max-w-sm mx-auto '>
			<div className='grid w-full max-w-sm items-center gap-1.5 mb-4'>
				<Label className='text-gray-600'>
					Email
					<Input
						className='mt-2'
						type='email'
						placeholder='Enter email: '
						{...register('email', { required: true })}
					/>
				</Label>
			</div>

			{error && <p className='text-red-500'>{error.message}</p>}

			<div className='grid w-full max-w-sm items-center gap-1.5 mb-4'>
				<Label className='text-gray-600'>
					Пароль
					<Input
						className='mt-2'
						type='password'
						placeholder='Enter password: '
						{...register('password', { required: true })}
					/>
				</Label>
			</div>

			<div className='grid w-full max-w-sm items-center gap-1.5 mb-4'>
				<Button type='submit' disabled={isPending}>
					Войти
				</Button>
			</div>
		</form>
	)
}
