import React, { Dispatch, SetStateAction, useState } from "react";

interface PageProperties {
  rowsPerPage: number;
  page: number;
  pageRange: number[];
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  setPage: Dispatch<SetStateAction<number>>;
}

const PageScroll = ({
  rowsPerPage,
  setRowsPerPage,
  page,
  setPage,
  pageRange,
}: PageProperties) => {
  const [pageRangeToggle, setPageRangeToggle] = useState(false);

  return (
    <div className="page-scroll">
      <div className="page-scroll-left">
        <span className="scroll-text">Scrolling</span>
        <div className="page-range-container">
          <div
            className="scroll-amount-container active-option"
            onClick={() => {
              setPageRangeToggle(!pageRangeToggle);
            }}
          >
            <span className="scroll-amount">{rowsPerPage}</span>
            <span className="arrow-down-icon">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0573 0.993783C10.8984 0.152691 12.1595 1.45644 11.3184 2.25487L6.56759 7.00563C6.23127 7.38407 5.64282 7.38407 5.3065 7.00563L0.640017 2.38129C-0.158963 1.5402 1.10267 0.279055 1.94322 1.1202L5.937 5.11398L10.0573 0.993783Z"
                  fill="#213F7D"
                />
              </svg>
            </span>
          </div>
          <div
            className={
              pageRangeToggle ? "page-range-select show" : "page-range-select"
            }
          >
            <div
              className="scroll-amount-container select-option"
              onClick={() => {
                setRowsPerPage(10);
                setPageRangeToggle(false);
              }}
            >
              <span className="scroll-amount">10</span>
            </div>
            <div
              className="scroll-amount-container select-option"
              onClick={() => {
                setRowsPerPage(20);
                setPageRangeToggle(false);
              }}
            >
              <span className="scroll-amount">20</span>
            </div>
            <div
              className="scroll-amount-container select-option"
              onClick={() => {
                setRowsPerPage(50);
                setPageRangeToggle(false);
              }}
            >
              <span className="scroll-amount">50</span>
            </div>
            <div
              className="scroll-amount-container select-option"
              onClick={() => {
                setRowsPerPage(100);
                setPageRangeToggle(false);
              }}
            >
              <span className="scroll-amount">100</span>
            </div>
          </div>
        </div>
        <span className="scroll-text">out of 100</span>
      </div>
      <div className="page-scroll-right">
        <div
          className="arrow-left-container"
          onClick={() => page > 1 && setPage(page - 1)}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00609 10.0573C7.84719 10.8984 6.54344 12.1595 5.745 11.3184L0.994244 6.56759C0.61581 6.23127 0.61581 5.64282 0.994244 5.3065L5.61858 0.640017C6.45967 -0.158963 7.72082 1.10267 6.87967 1.94322L2.8859 5.937L7.00609 10.0573Z"
              fill="#213F7D"
            />
          </svg>
        </div>
        {pageRange.map((range: number, index: number) => {
          if (pageRange.length <= 5) {
            return (
              <div className="scroll-page" key={index}>
                <span
                  className={
                    page === range
                      ? "scroll-page-number active"
                      : "scroll-page-number"
                  }
                  onClick={() => setPage(range)}
                >
                  {range}
                </span>
              </div>
            );
          } else if (page < 5) {
            if (range <= 5 || range > pageRange.length - 2) {
              return (
                <div className="scroll-page" key={index}>
                  <span
                    className={
                      page === range
                        ? "scroll-page-number active"
                        : "scroll-page-number"
                    }
                    onClick={() => setPage(range)}
                  >
                    {range}
                  </span>
                </div>
              );
            } else if (range === 6) {
              return (
                <div className="scroll-page" key={index}>
                  <span className="scroll-page-number">...</span>
                </div>
              );
            }
          } else if (page > pageRange.length - 5) {
            if (range < 3 || range > pageRange.length - 5) {
              return (
                <div className="scroll-page" key={index}>
                  <span
                    className={
                      page === range
                        ? "scroll-page-number active"
                        : "scroll-page-number"
                    }
                    onClick={() => setPage(range)}
                  >
                    {range}
                  </span>
                </div>
              );
            } else if (range === 5) {
              return (
                <div className="scroll-page" key={index}>
                  <span className="scroll-page-number">...</span>
                </div>
              );
            }
          } else {
            if (
              range < 3 ||
              range === page - 1 ||
              range === page ||
              range === page + 1 ||
              range > pageRange.length - 2
            ) {
              return (
                <div className="scroll-page" key={index}>
                  <span
                    className={
                      page === range
                        ? "scroll-page-number active"
                        : "scroll-page-number"
                    }
                    onClick={() => setPage(range)}
                  >
                    {range}
                  </span>
                </div>
              );
            } else if (range === page + 2 || range === page - 2) {
              return (
                <div className="scroll-page" key={index}>
                  <span className="scroll-page-number">...</span>
                </div>
              );
            }
          }
        })}
        <div
          className="arrow-right-container"
          onClick={() => page < pageRange.length && setPage(page + 1)}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.993905 1.94274C0.152813 1.10165 1.45656 -0.159498 2.255 0.68165L7.00576 5.43241C7.38419 5.76873 7.38419 6.35718 7.00576 6.6935L2.38142 11.36C1.54033 12.159 0.279177 10.8973 1.12033 10.0568L5.1141 6.063L0.993905 1.94274Z"
              fill="#213F7D"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PageScroll;
