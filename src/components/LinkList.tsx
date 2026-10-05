"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { Link } from "@/lib/links";

type LinkListProps = {
  links: Link[];
};

export default function LinkList({ links }: LinkListProps) {
  // 데이터를 받기 전에는 모두 0회로 표시
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let ignore = false;
    fetch("/api/clicks", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Record<string, number>) => {
        if (ignore) return;
        // 응답보다 먼저 반영된 클릭이 있으면 더 큰 값을 유지합니다.
        setCounts((prev) => {
          const next = { ...data };
          for (const [id, count] of Object.entries(prev)) {
            next[id] = Math.max(next[id] ?? 0, count);
          }
          return next;
        });
      })
      .catch((error) => console.error("클릭 수 조회 실패:", error));
    return () => {
      ignore = true;
    };
  }, []);

  function handleClick(id: string) {
    // 화면에는 바로 반영하고, 서버 응답이 오면 실제 값으로 맞춥니다.
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { id: string; count: number }) => {
        setCounts((prev) => ({ ...prev, [id]: Math.max(prev[id] ?? 0, data.count) }));
      })
      .catch((error) => {
        console.error("클릭 수 저장 실패:", error);
        setCounts((prev) => ({ ...prev, [id]: Math.max((prev[id] ?? 1) - 1, 0) }));
      });
  }

  return (
    <ul className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
