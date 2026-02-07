/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';

@Module({
   imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     host: 'localhost',
  //     port: 5433,
  //     username: 'postgres',
  //     password: '1234',
  //     database: 'flutter_app',        // your pgAdmin DB name
  //     entities: [User],
  //     synchronize: true,
  //   }),
   
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
