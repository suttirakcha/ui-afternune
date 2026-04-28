import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          user = {
            username: credentials.username,
          };

          return user;
        } catch (error) {
          console.error(error);
        }
      },
    }),
  ],
});
