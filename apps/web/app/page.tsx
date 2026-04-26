"use client";

import { TextInput } from "@repo/ui/text-input"
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{
        marginTop: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <TextInput 
         placeholder="Room Id" size="Small"/>
        <button 
          style={{
            background: "purple",
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            padding: 7,
          }}
          onClick={() => {
            router.push("/chat/123")
          }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
