import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const urls = await prisma.url.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    return NextResponse.json(
      {
        success: true,
        URLs: urls,
        message: "Top 5 shortened URL found!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(`Error in server side: ${error}`);
    return NextResponse.json(
      {
        success: false,
        message: "OOPS! Internal Server Error.",
      },
      { status: 500 }
    );
  }
}
