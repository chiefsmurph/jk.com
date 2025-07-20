import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import styles from "./Guestbook.module.css";
import { Glitch } from "@/components/Glitch";
import clsx from "clsx";

export default function Guestbook() {
  const [showModal, setShowModal] = useState(false);
  const [entries, setEntries] = useState<
    { name: string; favorite: string; inspiration: string; timestamp: string }[]
  >([]);

  useEffect(() => {
    fetch("/api/guestbook")
      .then((res) => res.json())
      .then((data) => setEntries(data.reverse())); // show latest at top
  }, []);
  return (
    <>
      <Glitch delay={9} className={clsx(styles.guestbookContainer)}>
        <button
          onClick={() => setShowModal(true)}
          className={styles.signGuestbookButton}
        >
          Sign the Johnny Keeys Guestbook
        </button>
        <div className={styles.entries}>
          <h3>Guestbook Entries 💬</h3>
          {entries.length === 0 ? (
            <p>No entries yet.</p>
          ) : (
            <ul>
              {[...entries, ...entries, ...entries, ...entries].map((entry, i) => (
                <li key={i} className={styles.entry}>
                  <p>
                    <strong>{entry.name}</strong> wrote:
                  </p>
                  <p>💛 {entry.favorite}</p>
                  <p>🌟 Inspired by: {entry.inspiration}</p>
                  <p className={styles.timestamp}>
                    {new Date(entry.timestamp).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Glitch>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Sign the Johnny Keeys Guestbook"
      >
        <form
          className={styles.guestbookModal}
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const data = {
              name: (form.elements.namedItem("name") as HTMLInputElement).value,
              favorite: (
                form.elements.namedItem("favorite") as HTMLInputElement
              ).value,
              inspiration: (
                form.elements.namedItem("inspiration") as HTMLInputElement
              ).value,
            };
            console.log({ form, data });

            fetch("/api/guestbook", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            }).then((res) => {
              if (res.ok) {
                alert(
                  "Thanks for signing!  Your responses won't show up now, but if Johnny gives it the green light you should see it live soon."
                );
                form.reset();
              } else {
                alert("Error saving your entry.");
              }
              setShowModal(false);
            });
          }}
        >
          <label>
            My name is...
            <input type="text" name="name" />
          </label>

          <label>
            My favorite thing about Johnny Keeys is ...
            <input type="text" name="favorite" />
          </label>

          <label>
            Two people that inspire me to do what I love are ...
            <input type="text" name="inspiration" />
          </label>

          <button type="submit">Submit!</button>
        </form>
      </Modal>
    </>
  );
}
