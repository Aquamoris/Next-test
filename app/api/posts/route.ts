import {NextResponse} from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req: Request) {


    return NextResponse.json({ message: 'Hello world' });
}

export async function POST(req: Request) {
    const body = await req.json()

    const cookesList = cookies()
    const cookieFoo = cookesList.get('foo');

    return NextResponse.json({ body, cookieFoo });
}