"use client";

import { Link, Link2, Loader2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const ShortnerForm = ({
  onShortenSuccess,
}: {
  onShortenSuccess: () => void;
}) => {
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setLoading(true);

    try {
      const resp = await fetch(`/api/shorten`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
        }),
      });
      const response = await resp.json();
      setUrl("");
      if (response?.success) {
        toast.message(
          <p className="text-rose-300 font-jet font-semibold tracking-wider ">
            SUCCESS
          </p>,
          {
            description: (
              <p className="text-indigo-200 font-jet underline underline-offset-4">
                Your URL has been Shortened.
              </p>
            ),
          }
        );
        onShortenSuccess();
      }
      setLoading(false);
    } catch {
      toast.message("Try Again!", {
        description: "Some error occurred while shorten your URL.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-5 sm:px-10 py-5 pb-10 md:pb-5 md:py-10">
      <form onSubmit={handleSubmit} className="max-w-xl lg:max-w-3xl mx-auto">
        <div className=" flex sm:flex-row flex-col gap-4 items-center justify-center rounded-md relative w-full">
          <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 items-center">
            <div className="relative w-fit h-fit">
              <Link2 className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-accent p-1 rounded-md shadow-sm shadow-neutral-950 size-7 text-rose-300" />
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste Your URL Here"
                type="url"
                required
                className="pl-12"
              />
            </div>
            <Button disabled={loading} size={"lg"} className="w-full sm:w-auto">
              {loading ? "Shortening" : "Shorten"} URL{" "}
              {loading ? <Loader2Icon className="animate-spin" /> : <Link />}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
