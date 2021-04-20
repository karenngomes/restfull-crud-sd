import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async create(Product: Product): Promise<Product> {
    return await this.productRepository.save(Product);
  }

  async update(Product: Product): Promise<UpdateResult> {
    return await this.productRepository.update(Product.id, Product);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.productRepository.delete(id);
  }
}
