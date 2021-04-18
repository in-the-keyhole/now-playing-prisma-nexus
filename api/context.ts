import { PrismaClient } from ".prisma/client";
import { client } from "../prisma";

export interface Context {
  client: PrismaClient;
}
export const context = {
  client,
};
