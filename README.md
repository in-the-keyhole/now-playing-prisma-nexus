# Now Playing Prisma

This is a demo of the Now Playing reference API done with Prisma and Nexus. Prisma is a TypeScript-based ORM and Nexus is a framework for create code-first GraphQL schemas with TypeScript. Using these together is straightforward, and when put on top of Apollo Server, we can have a simple API up and running quickly.

## Setup

Run `yarn install`

Run `docker compose up -d` to start a local postgres server.

Copy the `dotenv` file and rename the copy to `.env` - the default values can be left for now. They point to the Postgres server setup in the docker-compose file, so if you want to use your own server, update the values.

## Prisma

Prisma is setup out of the gate to work correctly. You can update the `schema.prisma` file to add or change the schema that will be persisted to the database. After making changes, you'll need to run `prisma migrate dev` to create migrations and it will also update the `@prisma/client` in the project to give you the appropriate types to work with. For a quickstart from scratch, check out the [walkthrough](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-typescript-postgres).

## Nexus

Nexus should be running at all times during development. Run `yarn dev` at the root of the project to kick off the TypeScript watcher for the API. Nexus will take the objects and types defined and generate a type-safe GraphQL schema for us. We can use this in combination with Prisma to query our database, with type-safety all the way down. For more on this, check out their [introduction](https://nexusjs.org/docs/getting-started/tutorial/chapter-introduction).

> Note: When investigating this you may run into the `nexus-plugin-prisma` - this is undergoing a substantial rewrite at the moment, so I have purposefully left it out. It will eventually provide things like automatic CRUD operations and easier integration with the resolvers.
