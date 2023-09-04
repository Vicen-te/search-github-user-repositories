import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Page from "./page";

type Props = {
  nPages: number;
  page: number;
  setPage: (value: number) => void;
};

// Change this number to ampliate or reduce the rows to appear on the pagination selection 
const PagesPerRow: number = 5;
const halfPagesPerRow: number = Math.round(PagesPerRow/2);

const Pagination = ({ nPages, page, setPage }: Props) => {

  // Avoid the problem of allocating more margin
  const pagesToRender: number = nPages < PagesPerRow ? nPages : PagesPerRow;
  let actualPage: number = 0;

  // Calculates the rows based on the pages per row and the number of pages in total
  let rows: number = Math.round(nPages/PagesPerRow);
  if (nPages/PagesPerRow % 1 < 0.5 && nPages/PagesPerRow % 1 > 0) rows += 1;

  // Less than or equal to half or does not exceed the first row
  if (page <= halfPagesPerRow || rows == 1) actualPage = halfPagesPerRow;

  // If the page is greater than half of the last row
  else if (page > nPages - (halfPagesPerRow - 1)) 
    actualPage = nPages - (halfPagesPerRow - 1);

  // half
  else 
    actualPage = page;

  // Add
  const addPage = () => {
    if (page === nPages || page + 1 > nPages) return;
    setPage(page + 1);
  };

  // Substract
  const substractPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  return (
    <div className="flex h-16 w-full flex-row flex-wrap content-center items-center justify-center overflow-hidden">

      {/* Substract */}
      <button
        className="h-9 w-9 rounded-lg bg-gray-200"
        type="button"
        onClick={substractPage}
      >
        <ChevronLeftIcon />
      </button>

      {/* Generates the buttons to select pages (the row) */}
      <ul
        className={`mx-2.5 flex child:rounded-lg child:bg-gray-300 child-not-last:mr-2`}
      >
        {Array.from(Array(pagesToRender), (e, i) => {
          return <Page
                    key={i}
                    index={i+1}
                    page={page}
                    actualPage={actualPage + i - halfPagesPerRow + 1}
                    nPages={nPages}
                    setPage={setPage}
                  />
        })}
      </ul>

      {/* Add */}
      <button
        className="h-9 w-9 rounded-lg bg-gray-200"
        type="button"
        onClick={addPage}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
