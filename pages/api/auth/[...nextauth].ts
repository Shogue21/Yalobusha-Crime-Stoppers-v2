import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import {PrismaAdapter} from "@next-auth/prisma-adapter"

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    Providers.Credentials({
      name: "Custom Sign In",
      credentials: {
        email: {label: "Email", type: "text"},
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials, req) {
        const user = {credentials}

        const admin = await prisma.user.findUnique({
          where: {
            email: "admin@administrator.com",
          }
        })
          
        if (credentials.email == admin.email && credentials.password == admin.password) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    jwt: true,
  },
  callbacks: {
    session(session, payload) {
      if (payload.account) session.user = payload.account
      return session
    },
    jwt(token, account, user, userInfo) {
      if (userInfo) token.account = userInfo
      return token
    },
  },
};