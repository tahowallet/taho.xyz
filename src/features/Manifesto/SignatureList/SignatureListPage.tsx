import dayjs from "dayjs";
import { css } from "linaria";
import React from "react";
import { green20 } from "shared/styles/color-palette";
import { bodyDarkGreen60, bodyDarkHunterGreen } from "shared/styles/colors";
import { bodySmallSegment18 } from "shared/styles/fonts";
import { AddressDisplay } from "./AddressDisplay";
import { useSignatureListPage } from "./index";

export function SignatureListPage({ before }: { before: number | null }) {
  const { data, isLoading, error } = useSignatureListPage(before);

  if (!data) return null;

  return (
    <div>
      {data.items.map(({ address, signature, timestampUnixMillis }) => (
        <div
          className={css`
            display: flex;
            align-items: center;
            gap: 1rem;
            border-top: 1px solid ${green20};
            padding: 1rem 0;

            &:last-child {
              border-bottom: 1px solid ${green20};
            }
          `}
        >
          <div
            className={css`
              width: 3rem;
            `}
          >
            <img
              className={css`
                width: 3rem;
                height: 3rem;
                border-radius: 1.5rem;
              `}
              src={`https://effigy.im/a/${address}.png`}
            />
          </div>
          <div
            className={css`
              display: flex;
              flex: 1 1 0;
              align-items: center;
              min-width: 0;
              padding: 1rem 0;
              gap: 1rem;
              font: ${bodySmallSegment18};
              color: ${bodyDarkHunterGreen};
              word-break: break-all;
            `}
          >
            <AddressDisplay address={address} />
          </div>
          <div
            className={css`
              flex: 0 0 auto;
              text-align: right;
              padding: 1rem 0;
              font: ${bodySmallSegment18};
              color: ${bodyDarkGreen60};
            `}
          >
            {dayjs(timestampUnixMillis).fromNow()}
          </div>
        </div>
      ))}
    </div>
  );
}
