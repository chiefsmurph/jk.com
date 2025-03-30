"use client";
import { useState } from "react";
import styles from "@/styles/Admin.module.css";

export function AdminPanel() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [amount, setAmount] = useState(1);
  const [codes, setCodes] = useState<string[]>([]);

  const login = () => {
    if (password === "alphabetsoup") setUnlocked(true);
  };

  const generate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ count: amount }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setCodes(data.codes);
  };

  return unlocked ? (
    <div className={styles.panel}>
      <h2>Admin Panel</h2>
      <input
        className={styles.input}
        type="number"
        value={amount}
        min={1}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button className={styles.button} onClick={generate}>
        Create Codes
      </button>
      <ul className={styles.ul}>
        {codes.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div className={styles.login}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Admin Password"
      />
      <button onClick={login}>Login</button>
    </div>
  );
}
