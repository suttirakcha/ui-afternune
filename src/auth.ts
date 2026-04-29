import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Credentials from "next-auth/providers/credentials";
import client from "./lib/db";

export const { auth, handlers, signIn, signOut } = NextAuth({
  // adapter: MongoDBAdapter(client),
  secret: process.env.BETTER_AUTH_SECRET,
  providers: [
    Credentials({
      credentials: {
        identifier: {},
        password: {},
      },
    }),
  ],
});
