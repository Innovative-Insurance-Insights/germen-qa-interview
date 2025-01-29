'use server';

import {signIn} from "../auth";
import {AuthError} from "next-auth";

export const signInAction = async (formData: FormData) => {
    try {

        await signIn('credentials', {
            redirectTo: '/dashboard',
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        });

        return true;
    } catch (error) {
        if (error instanceof AuthError) {
            return 'Wrong credentials';
        }
        throw error;
    }
}
export const validateToken = async (formData: FormData) => {
    try {
        const inputToken = formData.get('token') as string;

        const baseUrl = process.env.NEXT_PUBLIC_URL ||
            (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

        const response = await fetch(`${baseUrl}/api/token`, {
            method: 'GET',
        });


        if (!response.ok) {
            throw new Error('An error occurred');
        }

        const data = await response.json();

        if(data.token === inputToken) {

            return {
                valid: true,
            }
        }

        return {
            valid: false
        };
    } catch (error) {
        throw error;
    }
}