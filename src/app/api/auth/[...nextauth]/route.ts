import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl + '/dashboard'
    }
  }
}
const handler = NextAuth(options)

export { handler as GET, handler as POST }