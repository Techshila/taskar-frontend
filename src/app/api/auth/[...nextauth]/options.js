import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
    providers : [CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
    
          if (user) {
            return user
          } else {
            return null
          }
        }
      }) , 
        GoogleProvider({
            profile(profile) {
              console.log("Profile Google: ", profile);
                
              let userRole = "user";
              if (profile?.email == "diy2903@gmail.com") //for store manager
              {
                userRole = "manager";
              }
              if (profile?.email == "fiit2903@gmail.com") //for ceo
              {
                userRole = "ceo";
              }
              return {
                ...profile,
                id: profile.sub,
                role: userRole,
              };
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_Secret,
          }),


    ],
    pages: {
        signIn: "/login",
      },
    callbacks:{
        callbacks: {
            async jwt({ token, user }) {
              if (user) token.role = user.role;
              return token;
            },
            async session({ session, token }) {
              if (session?.user) session.user.role = token.role;
              return session;
            },
    }
    }}