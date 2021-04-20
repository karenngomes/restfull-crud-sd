import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    entities: [Product],
    synchronize: true,
  }) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
