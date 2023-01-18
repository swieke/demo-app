import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
    secret: '123',
    providers: [
        CredentialsProvider({
            name: "Custom Provider",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const response = await axios.post('https://63c77b825c0760f69ab850b2.mockapi.io/login', credentials)
                if (response) {
                    console.log(response)
                    return response.data
                }
            },
        })],
    session: { strategy: "jwt" },
})