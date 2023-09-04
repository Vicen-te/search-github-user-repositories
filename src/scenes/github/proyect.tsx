import {
  StarIcon,
  CodeBracketIcon,
  ScaleIcon,
  ClockIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

import GitForkIcon from "@/assets/git-fork.svg";
import { license } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  username: string;
  url: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  license: license;
  pushed_at: string;
  size: number;
};

const Proyect = ({
  username,
  url,
  name,
  description,
  language,
  stars,
  forks,
  license,
  pushed_at,
  size,
}: Props) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      className="m-6 block flex-wrap rounded-lg bg-gray-200 p-6 duration-150 hover:bg-white hover:drop-shadow-lg child-not-last:mb-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -7.5 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h1 className="text-xl font-medium">
        {username} / {name}
      </h1>

      <p>{description}</p>

      <div className="m-0 child-child:inline-block items-center p-0 child:mr-3 child:inline-block child:items-center child-first-child:mr-1 child-first-child:h-6 child-first-child:w-6">
        <div>
          <CodeBracketIcon />
          <p>{language === null ? "None" : language}</p>
        </div>

        <div>
          <StarIcon />
          <p>{stars}</p>
        </div>

        <div>
          <img src={GitForkIcon} />
          <p>{forks}</p>
        </div>

        <div>
          <ScaleIcon />
          {<p>{license === null ? "None" : license.name}</p>}
        </div>

        <div>
          <ClockIcon />
          <p>{pushed_at.split("T")[0]}</p>
        </div>

        <div>
          <CubeIcon />
          <p>{size} MB</p>
        </div>
        
      </div>
    </motion.a>
  );
};

export default Proyect;
