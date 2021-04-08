import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class D {
  @Field(type => ID)
  id: string;

  @Field()
  d: string;

  @Field()
  isPalindrome: boolean;
}
