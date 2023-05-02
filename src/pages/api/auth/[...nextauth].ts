import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import crypto from 'crypto'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: 'offline',
          response_type: 'code'
        }
      }
    }),
  ]
}
// const secret = crypto.randomBytes(32).toString('hex') // GENERATING SECRETE AUTH KEY TO USE IN ENV.LOCAL FILE 
// console.log(secret)

export default NextAuth(authOptions);