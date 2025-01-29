'use server';

import {auth} from "../../auth/auth";
import {TokenForm} from "./token-form";
import {SignOut} from "@/components/sign-out";

export default async function ProtectedPage() {
    let session = await auth();

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
            <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
                <div
                    className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
                    <h3 className="text-xl font-semibold">{session?.user?.email}</h3>
                </div>
                <div className={"py-4"}>
                    <TokenForm/>
                </div>
                <div className={"py-4 flex items-center justify-center"}>
                    <SignOut/>
                </div>
            </div>
        </div>
    )
}

