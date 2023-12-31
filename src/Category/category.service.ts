import { ForbiddenException, Injectable } from '@nestjs/common';
import { CategoryDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';
// import { Category, Product} from '@prisma/client'
@Injectable({})
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  async getCategory() {
    return await this.prismaService.category.findMany();
  }

  async getCategoryById(id: string) {
    try {
      const category = await this.prismaService.category.findUnique({
        where: {
          id: id,
        },
      });
      if (category) {
        return category;
      }
    } catch (error) {
      throw new ForbiddenException('invalid category !');
    }
  }

  async createNewCategory(dto: CategoryDto) {
    try {
      const updateCategory = await this.prismaService.category.create({
        data: {
          name: dto.name,
          description: dto.description,
          image: dto.image,
          status: dto.status,
        },
      });
      return updateCategory;
    } catch (error) {
      throw new ForbiddenException(
        'invalid create category! please try again!',
      );
    }
  }

  async updateCategory(id: string, dto: CategoryDto) {
    try {
      const update = await this.prismaService.category.update({
        where: {
          id: id,
        },
        data: {
          name: dto.name,
          description: dto.description,
          image: dto.image,
          status: dto.status,
        },
      });
      return update;
    } catch (error) {
      throw new ForbiddenException('can not update category!');
    }
  }

  async deleteCategory(id: string) {
    try {
      await this.prismaService.category.delete({
        where: {
          id: id,
        },
      });
      return {
        msg: 'category deleted',
      };
    } catch (error) {
      throw new ForbiddenException('can not delete category!');
    }
  }
}
