'use client';

import {SubmitButton} from "@/components/submit-button";
import {validateToken} from "../../auth/sign-in/action";
import {useState} from "react";

export const TokenForm = () => {

    const [result, setResult] = useState<{valid: boolean} | null>(null)

    const handleSubmit = async (formData: FormData) => {
        const result = await validateToken(formData);
        setResult(result);
    }

    return (
        <form action={handleSubmit}
              className="flex flex-col space-y-4 bg-gray-50 px-4 sm:px-16">
            <div>
                <label
                    htmlFor="token"
                    className="block text-xs text-gray-600 uppercase"
                >
                    Token
                </label>
                <input
                    id="token"
                    name="token"
                    type="string"
                    required
                    className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                />
            </div>
            {result?.valid && <div className="text-green-500 text-center">Token is valid</div>}
            {result?.valid === false && <div className="text-red-500 text-center">Token is invalid</div>}
            <SubmitButton>Validate token</SubmitButton>
        </form>

    );
}