import NextAuth, { ISODateString, Session } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import Moralis from 'moralis';

export interface ISession extends Session { }

const provider = CredentialsProvider({
  name: 'MoralisAuth',
  credentials: {
    message: {
      label: 'Message',
      type: 'text',
      placeholder: '0x0',
    },
    signature: {
      label: 'Signature',
      type: 'text',
      placeholder: '0x0',
    },
  },
  async authorize(credentials, req) {
    try {
      // "message" and "signature" are needed for authorization
      // we described them in "credentials" above
      const message = credentials?.message;
      const signature = credentials?.signature;

      await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

      const { address, profileId } = (
        await Moralis.Auth.verify({ message: message!, signature: signature!, network: 'evm' })
      ).raw;

      const user = { address, profileId, signature };
      // returning the user object and creating  a session
      return user;
    } catch (e) {
      console.error(e);
      return null;
    }
  },
})
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options


export default NextAuth({
  providers: [provider],
  pages: {
    signIn: '/connect'
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session.expires = (token as unknown as ISession).user.expirationTime;
      session.user = (token as unknown as ISession).user;
      return session;
    },
  },
});