'use client';

import Link from 'next/link';
import {signIn} from "../../auth/auth";
import {Form} from "@/components/form";
import {SubmitButton} from "@/components/submit-button";
import {signInAction} from "../../auth/sign-in/action";
import {useState} from "react";

export default function Login() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    try {
      setError(null);
      const result = await signInAction(formData);

      if (typeof result === 'string') {
        // If result is a string, it's an error message
        setError(result);
      }
      // If result is true, the redirect will happen automatically
    } catch (e) {
      setError('An unexpected error occurred. Please try again.');
    }
  };


  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to sign in
          </p>
        </div>

        {error && <div className="p-4 text-center">{error}</div>}

        <Form
          action={handleSubmit}
        >
          <SubmitButton>Sign in</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {"Don't have an account? "}
            <Link href="/register" className="font-semibold text-gray-800">
              Sign up
            </Link>
            {' for free.'}
          </p>
        </Form>
      </div>
    </div>
  );
}
