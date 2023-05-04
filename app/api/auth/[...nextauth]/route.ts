import NextAuth from "next-auth";
import AADProvider from "next-auth/providers/azure-ad";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    // AADProvider({
    //   clientId: process.env.AAD_CLIENT_ID,
    //   clientSecret: process.env.AAD_CLIENT_SECRET,
    //   tenantId: process.env.AAD_TENANT_ID,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        return (
          //@ts-ignore
          profile?.email_verified && profile.email?.endsWith("@example.com")
        );
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };
