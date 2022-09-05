import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
// import { refreshAccessToken } from "spotify-web-api-node/src/server-methods"
import { LOGIN_URL } from "../../../lib/Spotify"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.sec.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  // for custome login page
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, account, user}) {
      // initia sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshTOken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000
        }
      }

      // Reeturn previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log("EXISTING ACCESS TOKEN IS VALID...");
        return token;
      }

      // Access token has expired, so we need to refresh it...
      console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING....");
      return await refreshAccessToken(token);
    }
  }
})