"use client";

import { useEffect, useState } from "react";
import { ShortnerForm } from "./shortner-form";
import { UrlList } from "./url-list";
import { toast } from "sonner";

interface URL_TYPE {
  id: string;
  originalUrl: string;
  shortenUrl: string;
  visits: number;
}

export const UrlShortnerContainer = () => {
  const [urls, setUrls] = useState<URL_TYPE[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUrls = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`/api/urls`);
      const data = await resp.json();
      setUrls(data?.URLs || []);
      setLoading(false);
    } catch {
      toast.message("OOPS! Failed to fetch recent shortened URLs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div>
      <ShortnerForm onShortenSuccess={fetchUrls} />
      <UrlList loading={loading} urls={urls} onLinkVisit={fetchUrls} />
    </div>
  );
};
