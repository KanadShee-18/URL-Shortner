"use client";

import {
  ArrowDownUp,
  CheckCheck,
  CopyCheckIcon,
  ScanEyeIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
interface URL_TYPE {
  id: string;
  originalUrl: string;
  shortenUrl: string;
  visits: number;
}

export const UrlList = ({
  urls,
  onLinkVisit,
  loading = false,
}: {
  urls: URL_TYPE[];
  onLinkVisit: () => void;
  loading?: boolean;
}) => {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const shortened_url = (code: string) =>
    `${process.env.NEXT_PUBLIC_BASE_URL!}/${code}`;

  const handleCopyButtonClicked = (short_url: string) => {
    navigator.clipboard.writeText(shortened_url(short_url));
    setCopiedUrl(short_url);
    setTimeout(() => {
      setCopiedUrl(null);
    }, 3000);
    toast.message(
      <p className="text-rose-300 font-jet font-semibold tracking-wider ">
        SUCCESS
      </p>,
      {
        description: (
          <p className="text-indigo-200 font-jet italic">
            Shortened URL has been copied to your clipboard.
          </p>
        ),
      }
    );
  };

  if (loading) {
    return (
      <div className="animate-pulse px-5 max-w-3xl mx-auto">
        <div className="h-8 bg-accent rounded w-1/4 mb-4"></div>
        <ul className="space-y-2">
          {[1, 2, 3].map((num) => (
            <li
              key={num}
              className="flex items-center gap-2 rounded-md border bg-card p-4 text-card-foreground justify-between"
            >
              <div className="h-4 bg-accent rounded w-1/2"></div>
              <div className="flex items-center gap-3 w-1/2">
                <div className="h-5 w-5 bg-accent rounded"></div>
                <span className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-accent rounded"></div>
                  <div className="h-4 bg-accent w-10 rounded"></div>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="px-5 md:px-10 max-w-3xl mx-auto pb-14">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-2xl font-bold bg-gradient-to-b from-slate-100 to-indigo-300 text-transparent bg-clip-text">
          Recent URLs:
        </h2>
        <ArrowDownUp className="size-5 relative" />
      </div>
      <ul className="space-y-2.5">
        {urls.map((url) => (
          <li
            key={url.id}
            className="flex odd:bg-accent/45 even:bg-accent/10 justify-between items-center p-2 px-4 rounded-lg shadow-inner shadow-neutral-950 hover:bg-accent/30 duration-300 transition-all cursor-pointer hover:shadow-md md:flex-row flex-col gap-4"
          >
            <Link
              target="_blank"
              href={`/${url.shortenUrl}`}
              onClick={() => {
                setTimeout(() => {
                  onLinkVisit();
                }, 1500);
              }}
              className="text-indigo-400 underline tracking-wide break-all max-w-full md:max-w-[60%]"
            >
              {shortened_url(url.shortenUrl)}
            </Link>
            <div className="flex items-center gap-5 md:gap-10 flex-nowrap">
              <Button
                title="Copy Link"
                variant={"outline"}
                className="text-rose-500"
                size={"icon"}
                onClick={() => handleCopyButtonClicked(url.shortenUrl)}
              >
                {copiedUrl === url.shortenUrl ? (
                  <CheckCheck className="size-5 text-blue-300" />
                ) : (
                  <CopyCheckIcon className="size-5" />
                )}
              </Button>
              <span className="flex text-indigo-200 items-center flex-row gap-x-2 flex-nowrap">
                <ScanEyeIcon className="size-4 text-indigo-200/70" />
                {url.visits} views
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
