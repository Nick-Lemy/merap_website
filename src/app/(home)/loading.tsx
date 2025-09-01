import { Loader2 } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Loader2 className="animate-spin" />
    </div>
  );
}
