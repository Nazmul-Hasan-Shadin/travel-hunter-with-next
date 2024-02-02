/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
         {   
            hostname: 'i.ibb.co',
           
        
        }
        ]
    },

    publicRuntimeConfig: {
        apiUrl: process.env.URL,
      },
};

export default nextConfig;
