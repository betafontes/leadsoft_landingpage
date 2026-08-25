import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';
import { env } from '../config/env.js';
import { IAdminRepository } from '../domain/ports/IAdminRepository.js';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  admin: { id: string; name: string; email: string };
  token: string;
}

export class LoginUseCase {
  constructor(private adminRepository: IAdminRepository) {}

  async execute({ email, password }: LoginRequest): Promise<LoginResponse> {
    const admin = await this.adminRepository.findByEmail(email);

    if (!admin) {
      throw new Error('E-mail ou senha incorretos.');
    }

    const isPasswordValid = await bcrypt.compare(password, admin.passwordHash);

    if (!isPasswordValid) {
      throw new Error('E-mail ou senha incorretos.');
    }

    const secret = new TextEncoder().encode(env.JWT_SECRET);
    const token = await new SignJWT({ sub: admin.id!, email: admin.email })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(env.JWT_EXPIRES_IN)
      .sign(secret);

    return {
      admin: {
        id: admin.id!,
        name: admin.name,
        email: admin.email,
      },
      token,
    };
  }
}
