import { NextResponse } from "next/server";
import Pusher from "pusher";

const pusher = new Pusher({
    appId: process.env.NEXT_PUBLIC_PUSHER_APP_ID!,
    key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
    secret: process.env.PUSHER_SECRET!,
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
    useTLS: true,
});

export async function POST(request: Request) {
    const { socket_id, channel_name } = await request.json();

    try {
        const auth = pusher.authenticate(socket_id, channel_name);
        return NextResponse.json(auth);
    } catch (error) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
}
