import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

interface RedirectPageProps {
  params: {
    shortCode: string;
  };
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  const { shortCode } = params;

  const url = await prisma.url.findUnique({
    where: {
      shortenUrl: shortCode,
    },
  });

  if (!url) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-2xl font-bold">
        404 - URL Not Found!
      </div>
    );
  }

  await prisma.url.update({
    where: {
      id: url.id,
    },
    data: {
      visits: {
        increment: 1,
      },
    },
  });

  redirect(url.originalUrl);
}
