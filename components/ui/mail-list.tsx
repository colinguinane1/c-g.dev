'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button"; // your existing button
import { Check, X, Loader2 } from "lucide-react"; // icons

export default function MailList() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 2000);
    } else {
        console.log(res)
       const errorData = await res.json();
    setMessage(errorData.error);

      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border px-3 py-2 rounded"
      />

      <Button
        type="submit"
        className="bg-primary text-white w-24 py-2 rounded relative overflow-hidden"
        disabled={status === "loading"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "idle" && (
            <motion.span
              key="text"
              initial={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              Join Beta
            </motion.span>
          )}

          {status === "loading" && (
            <motion.span
              key="spinner"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center"
            >
              <Loader2 className="h-4 w-4 animate-spin" />
            </motion.span>
          )}

          {status === "success" && (
            <motion.span
              key="check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center text-green-500"
            >
              <Check className="h-4 w-4" />
            </motion.span>
          )}

          {status === "error" && (
            <motion.span
              key="error"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center text-red-500"
            >
              <X className="h-4 w-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </form>
  );
}
