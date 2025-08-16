'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { Check, X, Loader2, ChevronRight } from "lucide-react";

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
      const errorData = await res.json();
      setMessage(errorData.error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full rounded-lg overflow-hidden border border-border focus-within:ring-2 focus-within:ring-primary/50 transition-all"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-4 w-full py-2 outline-none bg-transparent  text-sm placeholder-gray-400"
      />

      <motion.div
        layout
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <Button
          variant={"outline"}
          type="submit"
          className="border-l border-r-0 w-32 border-t-0 border-b-0 flex items-center justify-center relative overflow-hidden rounded-none rounded-r-lg transition-colors"
          disabled={status === "loading"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === "idle" && (
              <motion.span
                key="text"
                initial={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className=" flex items-center justify-center text-sm whitespace-nowrap"
              >
                Join Mail List <ChevronRight className="ml-1" size={15} />
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
                className="inline-flex items-center text-green-400"
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
                className="inline-flex items-center text-red-400"
              >
                <X className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </form>
  );
}
