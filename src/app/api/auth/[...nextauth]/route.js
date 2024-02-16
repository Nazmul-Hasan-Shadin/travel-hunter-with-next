import useAxiosPublic from "@/hooks/useAxiosPublic";
import axios from "axios";
import NextAuth from "next-auth/next";
import credentialsProvider from "next-auth/providers/credentials";

const authOption = {
  pages: {
    signIn: "/login",
  },
  providers: [
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
          console.log(match.data.message);
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
};
const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
