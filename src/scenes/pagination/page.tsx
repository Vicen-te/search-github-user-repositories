type Props = {
  index: number;
  page: number;
  nPages: number;
  setPage: (value: number) => void;
  actualPage: number;
};

const Page = ({ index, page, actualPage, nPages, setPage }: Props) => {
  const checkColor = (customPage: number) => {
    if (customPage == page) return "bg-white";
  };

  const checkVisisbility = (customPage: number) => {
    if (customPage > nPages) return "hidden";
    return "max-xs:hidden";
  };

  return (
    <li
      className={checkVisisbility(index) + " child:h-12 child:w-12 child:rounded-lg"}
    >
      <button
        className={checkColor(actualPage)}
        onClick={() => setPage(actualPage)}
      >
        <strong>{actualPage}</strong>
      </button>
    </li>
  );
};

export default Page;
