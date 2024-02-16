import useAxiosPublic from "@/hooks/useAxiosPublic";
import axios from "axios";
import NextAuth from "next-auth/next";
import credentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
const authOption = {
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_CLIENT_SEC,
    }),
    credentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        console.log(credentials);
        const userLoginInfo = {
          email: credentials.email,
          password: credentials.password,
        };
        try {
          const match = await axios.post(
            "http://localhost:3001/signIn",
            userLoginInfo
          );
          if (match.data.success === true) {
            return {
              email: match.data.email,
            };
          }
          console.log(match.data.message);
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      console.log({ token, account, profile });
      if (account) {
        token.account = account;
      }
      if (profile) {
        token.profile = profile;
      }
      return token;
    },
  },
};
const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
