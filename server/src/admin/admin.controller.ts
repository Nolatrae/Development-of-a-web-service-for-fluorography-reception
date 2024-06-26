import {
	Body,
	Controller,
	HttpCode,
	Patch,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { AdminService } from './admin.service'
import { ChangeUserDto } from './dto/admin.dto'

@Controller('admin')
export class AdminController {
	constructor(private readonly adminService: AdminService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Patch('list')
	@Auth(['ADMIN'])
	async updateOtherUserData(@Body() dto: ChangeUserDto) {
		return this.adminService.updateOtherUser(dto)
	}
}
