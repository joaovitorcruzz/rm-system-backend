import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Rota para registrar um novo usuário
  @Post('register')
  async register(
    @Body() body: { name: string; email: string, password: string },
  ) {
    const { name, email, password } = body;
    return this.authService.register(name, email, password);
  }

  // Rota para login de um usuário
  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
  ) {
    const { email, password } = body;
    const user = await this.authService.login(email, password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return { message: 'Login successful', user };
  }
}
