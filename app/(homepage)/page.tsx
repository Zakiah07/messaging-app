"use client";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/auth/loading";

export default function Home() {
  const store = useMutation(api.users.store);
  const router = useRouter();

  useEffect(() => {
    store({});
    router.push("/new");
  });

  return <Loading />;
}
