import {NextResponse} from "next/server";

export const GET = async () => {
    return NextResponse.json({
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.fakeToken12345678901234567890'
    });
}