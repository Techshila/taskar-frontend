import GoogleProvider from "next-auth/providers/google"

export const options = {
    providers : [
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