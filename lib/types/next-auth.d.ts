import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
   type User = {
    address: string;
    signature: string;
    profileId: string;
    expirationTime?: ISODateString;
  };


  interface Session {
    user: TUserData
  }

}