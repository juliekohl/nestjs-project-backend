import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalStrategy } from './local.strategy';
import { User } from './user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.AUTH_SECRET,
        signOptions: { expiresIn: '60m' },
      }),
    }),
  ],
  providers: [LocalStrategy, AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
