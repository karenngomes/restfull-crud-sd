import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(public productService: ProductService) {}

  @Get()
  async getProduct(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async getProductById(@Param('id') id): Promise<Product> {
    const products = await this.productService.findAll();

    return products.find((product) => product.id === Number(id));
  }

  @Post()
  async create(@Body() newProduct: Product): Promise<any> {
    return this.productService.create(newProduct);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() productData: Product): Promise<object> {
    productData.id = Number(id);
    console.log('Updating #', +productData.id);
    await this.productService.update(productData);
    return { message: 'updated' };
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<object> {
    await this.productService.delete(id);
    return { message: 'deleted'};
  }
}
