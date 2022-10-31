import Image from "next/image";
import clsx from "clsx";
import * as Dialog from "@radix-ui/react-dialog";

import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Dialog.Root open={open} onOpenChange={setOpen} modal>
          <Dialog.Overlay>
            <div className="backdrop-blur fixed inset-0 bg-black bg-opacity-30 animate-fadeIn" />
          </Dialog.Overlay>
          <Dialog.Content asChild>
            <div
              className={clsx(
                "p-4",
                "bg-surface-1",
                "text-theme-text",
                "rounded-3xl",
                "top",
                "animate-fadeIn",
                "transition-colors",
                "duration-500",
                "border-dark-only"
              )}
              style={{
                position: "fixed",
                top: "30%",
                left: "50%",
                transform: "translate(-50%)",
                width: "90vw",
                maxWidth: "44rem",
              }}
            ></div>
          </Dialog.Content>
        </Dialog.Root>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
