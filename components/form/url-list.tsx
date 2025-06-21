"use client";

import { CopyCheckIcon, ScanEyeIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const dummyURLs = [
  {
    shortUrl: "http://localhost:3000/B5cWZLZp",
    views: 2,
  },
  {
    shortUrl: "http://localhost:3000/Pj79rNFa",
    views: 3,
  },
  {
    shortUrl: "http://localhost:3000/Ql08GJkD",
    views: 2,
  },
  {
    shortUrl: "http://localhost:3000/TBHtpx96",
    views: 1,
  },
];

export const UrlList = () => {
  return (
    <div className="px-5 md:px-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Recent URLs</h2>
      <ul className="space-y-2.5">
        {dummyURLs.map((url, index) => (
          <li
            key={index}
            className="flex odd:bg-accent/35 even:bg-accent/15 justify-between items-center p-2 rounded-lg"
          >
            <Link
              target="_blank"
              href={url.shortUrl}
              className="text-indigo-400 underline tracking-wide"
            >
              {url.shortUrl}
            </Link>
            <div className="flex items-center gap-5 md:gap-10">
              <Button
                title="Copy Link"
                variant={"outline"}
                className="text-destructive"
                size={"icon"}
                onClick={() => navigator.clipboard.writeText(url.shortUrl)}
              >
                <CopyCheckIcon className="size-5" />
              </Button>
              <span className="flex items-center flex-row gap-x-2">
                <ScanEyeIcon className="text-muted-foreground size-4" />
                {url.views} views
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
