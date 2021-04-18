import { objectType, extendType } from "nexus";

export const Movie = objectType({
  name: "Movie",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("title");
    t.nonNull.field("createdAt", {
      type: "DateTime",
    });
    t.nonNull.field("updatedAt", {
      type: "DateTime",
    });
  },
});

export const MovieQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("movies", {
      type: "Movie",

      async resolve(_root, _args, ctx) {
        return await ctx.client.movie.findMany();
      },
    });
  },
});

export const SeedMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("seedMovies", {
      type: "String",
      async resolve(_root, _args, ctx) {
        const results = await ctx.client.movie.createMany({
          data: [
            {
              title: "Blade Runner 2049",
            },
            {
              title: "The Fifth Element",
            },
            {
              title: "Contact",
            },
          ],
        });
        return `Seeded ${results.count} movies.`;
      },
    });
  },
});
