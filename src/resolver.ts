import { Query, Resolver } from "type-graphql";

@Resolver()
export class ExampleResolver {
  @Query(() => String)
  greeting() {
    return "hello from typegraphql";
  }
}
