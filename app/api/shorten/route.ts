import { prisma } from "@/lib/db";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        {
          status: false,
          message: "URL is required for generating the shortner.",
        },
        { status: 401 }
      );
    }

    const shortCode = nanoid(8);
    const shortenedUrl = await prisma.url.create({
      data: {
        originalUrl: url,
        shortenUrl: shortCode,
      },
    });

    return NextResponse.json(
      {
        success: true,
        shortCode: shortenedUrl.shortenUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(`Error in server side: ${error}`);
    return NextResponse.json(
      {
        success: false,
        message: "OOPS! Some error occurred in server.",
      },
      { status: 500 }
    );
  }
}
