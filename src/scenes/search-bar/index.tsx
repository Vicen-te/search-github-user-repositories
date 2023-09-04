import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

type Props = {
  text: string;
  setText: (value: string) => void;
};

const SearchBar = ({ text, setText }: Props) => {
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    setInputText(text == undefined ? "" : text);
  }, []);

  // Update user to search
  const updateUser = () => {
    setText(inputText);
  };

  return (<>
    <input
      className="h-11 w-full rounded-3xl border-0 bg-gray-100 px-5 text-base outline-0"
      type="text"
      placeholder="Search User"
      value={inputText}
      onChange={(e) => {
        setInputText(e.target.value);
        // Update content as you type instead of pressing enter or clicking a button
        // Will make many requests to github API -> Error 403
        // setText(e.target.value);
      }}
      onKeyDown={event => {
        if(event.code === "Enter") updateUser();
      }}
    />

    {/* Animated Button */}
    <motion.button
      className="-ml-11 h-11 w-11 border-none bg-none outline-none"
      type="submit"
      onClick={updateUser}
      whileHover={{ scale: 1.1, x: 1 }}
      whileTap={{ scale: 0.9, x: -0.5 }}
    >
      <MagnifyingGlassIcon className="w-6 h-6"/>
    </motion.button>
  </>);
};

export default SearchBar;
