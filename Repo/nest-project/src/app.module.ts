import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/users.entity';
import { ProductsModule } from './products/products.module';
import { HospitalsModule } from './hospital/hospitals.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [User],
    //   synchronize: true,
    // }),
    ProductsModule,
    HospitalsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
