import { css } from "linaria";
import React, { ReactNode } from "react";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={css`
        margin: 0 auto;
        padding: 6rem 1rem;
        max-width: 60rem;
        color: white;

        background-color: white;
        color: black;

        table {
          border-collapse: collapse;
        }

        td,
        th {
          border: solid 1px black;
          padding: 0.25rem 0.5rem;
        }
      `}
    >
      {children}
    </div>
  );
}
