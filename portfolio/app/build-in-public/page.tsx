/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export default function CVTailorLandingPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic formatting validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Veuillez entrer une adresse email valide.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setStatus("success");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Une erreur est survenue. Veuillez réessayer.");
    }
  };

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.noise}></div>
      
      <motion.div 
        className={styles.content}
        variants={containerVars}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVars} className={styles.headline}>
          Ton CV réécrit par l&apos;IA pour chaque offre <strong>d&apos;alternance</strong>, de <strong>stage</strong>, ou <strong>d&apos;emploi</strong>
        </motion.h1>
        
        <motion.p variants={itemVars} className={styles.subheadline}>
          Accès beta gratuit.
        </motion.p>
        
        <motion.form variants={itemVars} className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="marie.dupont@email.com"
              className={styles.input}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              disabled={status === "loading" || status === "success"}
              required
            />
          </div>
          <button 
            type="submit" 
            className={styles.button}
            disabled={status === "loading" || status === "success" || !email}
          >
            {status === "loading" ? (
              <div className={styles.spinner}></div>
            ) : status === "success" ? (
              "Inscrit"
            ) : (
              <>
                Accéder à la beta gratuite
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </motion.form>

        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`${styles.message} ${styles.success}`}
            >
              Merci ! Tu fais maintenant partie de la beta 🔥
            </motion.div>
          )}

          {status === "error" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`${styles.message} ${styles.error}`}
            >
              {errorMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
