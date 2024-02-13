import type {AuthOptions, User} from "next-auth";
import GoggleProvider from 'next-auth/providers/google';
import Credentials from "next-auth/providers/credentials";

const users = [
    { email: 'test@test.com', password: 'test' }
]

export const authConfig: AuthOptions = {
    providers: [
        GoggleProvider({
            clientId: '',
            clientSecret: ''
        }),
        Credentials({
            credentials: {
                email: { label: 'Email', type: 'email', required: true },
                password: { label: 'Password', type: 'password', required: true },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null;

                const currentUser = users.find(user => user.email === credentials.email)

                if (currentUser && currentUser.password === credentials.password) {
                    const {password, ...userWithoutPassword} = currentUser;

                    return userWithoutPassword as User;
                }

                return null
            }
        })
    ]
}