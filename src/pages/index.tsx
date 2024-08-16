import HeroText from "@/components/hero-text";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/self");
  }, [router.isReady]);

  return (
    <div>
      <a href="http://localhost:3000/self"></a>
    </div>
  );
}
