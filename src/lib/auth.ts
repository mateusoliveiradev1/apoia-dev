import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

const requireEnv = (key: string) => {
  const v = process.env[key];
  if (!v) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return v;
};

const github = GitHub({
  clientId: requireEnv("AUTH_GITHUB_ID"),
  clientSecret: requireEnv("AUTH_GITHUB_SECRET"),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: requireEnv("AUTH_SECRET"),
  trustHost: true,
  adapter: PrismaAdapter(prisma),
  providers: [github],
});
