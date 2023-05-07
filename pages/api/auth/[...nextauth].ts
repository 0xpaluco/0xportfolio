import NextAuth, { User } from "next-auth";
import type { NextAuthOptions } from 'next-auth'
import { MoralisNextAuthProvider } from "@moralisweb3/next";

export const authOptions: NextAuthOptions = {
  // your configs
  providers: [MoralisNextAuthProvider()],
  pages: { signIn: '/connect' },
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {      
      if (user) 
        token.user = user;
      return token;
    },
    async session({ session, token }) {      
      session.user = (token.user as User);
      return session;
    },
  },
}

export default NextAuth(authOptions);