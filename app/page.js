import { Suspense } from "react";
import ClientHome from "./ClientHome";

export default function Home() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <ClientHome />
    </Suspense>
  );
}
