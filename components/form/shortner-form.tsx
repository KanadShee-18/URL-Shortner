"use client";

import { Link } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

export const ShortnerForm = () => {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.log(url);
  };

  return (
    <div className="px-5 sm:px-10 py-10">
      <form onSubmit={handleSubmit} className="max-w-xl lg:max-w-3xl mx-auto">
        <div className=" flex sm:flex-row flex-col gap-4 items-center justify-center">
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste Your URL here for shorten"
            type="url"
            required
          />
          <Button size={"lg"} className="w-full sm:w-auto">
            Shorten URL <Link />{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};
