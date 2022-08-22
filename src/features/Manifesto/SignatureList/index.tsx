import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { listSignatures, SignatureListSlice } from "features/Manifesto/api";
import { css, cx } from "linaria";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { green40, hunterGreen, offWhite } from "shared/styles/color-palette";
import { bodySmallSegment18 } from "shared/styles/fonts";
import { sectionNarrowWidth } from "shared/styles/lengths";
import { SignatureListHeader } from "./SignatureListHeader";
import { SignatureListPage } from "./SignatureListPage";

dayjs.extend(relativeTime);

const pageSize = 10;

export function SignatureList() {
  const { data, isLoading, error } = useSignatureListPage(null);

  return (
    <>
      {data && data.totalCount > 0 && (
        <div
          className={css`
            display: flex;
            flex-flow: column;
            gap: 1rem;
            max-width: ${sectionNarrowWidth};
            margin: 0 auto;
          `}
        >
          <SignatureListHeader data={data} />
          <SignatureListPageList firstPageData={data} />
        </div>
      )}
    </>
  );
}

interface SignaturePage {
  number: number;
  before: number;
}

function SignatureListPageList({
  firstPageData,
}: {
  firstPageData: SignatureListSlice;
}) {
  const { totalCount } = firstPageData;

  const allPages = Array.from({ length: Math.ceil(totalCount / pageSize) }).map(
    (unused, index): SignaturePage => ({
      number: index + 1,
      before: totalCount - index * pageSize,
    })
  );

  if (allPages.length === 0) throw new Error(`unexpected empty list`);

  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const currentPage = allPages[currentPageNumber - 1] ?? allPages[0];

  return (
    <>
      <SignatureListPage before={currentPage.before} />
      {allPages.length > 1 && (
        <SignaturePaginationPanel
          allPages={allPages}
          currentPage={currentPage}
          setCurrentPageNumber={setCurrentPageNumber}
        />
      )}
    </>
  );
}

function SignaturePaginationPanel({
  allPages,
  currentPage,
  setCurrentPageNumber,
}: {
  allPages: SignaturePage[];
  currentPage: SignaturePage;
  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: flex-end;
        margin: 2rem 0;
      `}
    >
      {ellipsizePages(allPages, currentPage).map((page) =>
        page === "ellipsis" ? (
          <span
            className={css`
              display: flex;
              align-items: center;
              justify-content: center;
              width: 2.5rem;
              height: 2.5rem;
              font: ${bodySmallSegment18};
            `}
          >
            &hellip;
          </span>
        ) : (
          <button
            key={page.number}
            className={cx(
              css`
                display: flex;
                align-items: center;
                justify-content: center;
                width: 2.5rem;
                height: 2.5rem;
                border: none;
                border-radius: 2.5rem;
                font: ${bodySmallSegment18};
              `,
              page === currentPage
                ? css`
                    background: ${green40};
                    color: ${offWhite};
                  `
                : css`
                    background: transparent;
                    color: ${hunterGreen};
                    cursor: pointer;
                  `
            )}
            onClick={() => setCurrentPageNumber(page.number)}
          >
            {page.number}
          </button>
        )
      )}
    </div>
  );
}

function ellipsizePages(
  allPages: SignaturePage[],
  currentPage: SignaturePage
): Array<SignaturePage | "ellipsis"> {
  const fullLimit = 7;

  const sidePages = 5;
  const sideLimit = 4;

  const middlePagesPerSide = 1;

  const firstPage = allPages[0];
  const lastPage = allPages[allPages.length - 1];

  return allPages.length <= fullLimit
    ? allPages
    : currentPage.number <= sideLimit
    ? [...allPages.slice(0, sidePages), "ellipsis", lastPage]
    : currentPage.number >= allPages.length - sideLimit + 1
    ? [
        firstPage,
        "ellipsis",
        ...allPages.slice(allPages.length - sidePages, allPages.length),
      ]
    : [
        firstPage,
        "ellipsis",
        ...allPages.slice(
          currentPage.number - middlePagesPerSide - 1,
          currentPage.number + middlePagesPerSide
        ),
        "ellipsis",
        lastPage,
      ];
}

export function useSignatureListPage(before: number | null) {
  return useQuery(
    ["signatures", before],
    async () => {
      const { data } = await listSignatures({ before, limit: pageSize });
      return data;
    },
    { retry: false, refetchOnWindowFocus: false, cacheTime: 3600 * 1000 }
  );
}
