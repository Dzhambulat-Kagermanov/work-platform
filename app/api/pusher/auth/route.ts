import { pusherServer } from "@/utils/pusher-server";
import { NextResponse } from "next/server";
import { parse } from "querystring";

export async function POST(req: Request) {
    try {
        // Получаем тело запроса как текст
        const bodyText = await req.text();
        console.log("Raw body:", bodyText);

        // Парсим данные в формате application/x-www-form-urlencoded
        const params = new URLSearchParams(bodyText);
        const socket_id = params.get("socket_id");
        const channel_name = params.get("channel_name");

        console.log("Parsed data:", { socket_id, channel_name });

        if (!socket_id || !channel_name) {
            throw new Error(`Missing required fields. Received: ${bodyText}`);
        }

        // Авторизация
        const authResponse = pusherServer.authenticate(socket_id, channel_name);
        console.log("Authentication successful");

        return NextResponse.json(authResponse);
    } catch (error) {
        console.error("Full error:", error);
        return NextResponse.json(
            {
                error: "Authentication failed",
                details: error instanceof Error ? error.message : String(error),
            },
            { status: 403 },
        );
    }
}
