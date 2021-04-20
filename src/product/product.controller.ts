import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Product } from './product';
import { ProductService } from './product.service';

@Crud({
  model: {
    type: Product,
  },
})
@Controller('products')

export class ProductController {
    constructor(public service: ProductService) {}
}
