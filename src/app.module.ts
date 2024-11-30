import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './auth/user.entity'; // Verifique o caminho correto da entidade

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'rm_system',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      driver: require('mysql2'), // Adicione essa linha para especificar o driver MySQL
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
