import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { D as DEntity } from './d.entity';
import { D } from './d.model';

import { DService } from './d.service';

@Resolver(of => D)
export class DResolver {
  constructor(@Inject(DService) private dService: DService) {}

  @Query(returns => [D])
  async getD(
    @Args('isPalindrome', { nullable: true }) isPalindrome: boolean = false,
  ): Promise<DEntity[]> {
    return await this.dService.getAll(isPalindrome);
  }

  @Mutation(returns => D)
  async createD(@Args('d') d: string): Promise<DEntity> {
    return await this.dService.create({ d });
  }

  @Mutation(returns => D)
  async updateD(
    @Args('id') id: number,
    @Args('d') d: string,
  ): Promise<{ message: string }> {
    return await this.dService.update(id, { d });
  }

  @Mutation(returns => D)
  async deleteD(@Args('id') id: number): Promise<{ message: string }> {
    return await this.dService.remove(id);
  }
}
