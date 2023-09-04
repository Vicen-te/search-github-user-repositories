import { useState, useEffect } from "react";
import { http } from "@/shared/http";
import {
  HtmlGithubProyectType,
  GithubProyectType,
  HtmlGeneralGithubType,
} from "@/shared/types";
import Proyect from "./proyect";
import SearchBar from "@/scenes/search-bar";
import Pagination from "@/scenes/pagination";

type Props = {};
const per_page: number = 20;

const Github = (props: Props) => {
  const [githubProyects, setGithubProyects] = useState<GithubProyectType[]>([]);
  const [user, setUser] = useState<string>("vicen-te");
  const [page, setPage] = useState<number>(1);
  const [nRepo, setNRepo] = useState<number>(0);

  let nPages: number = Math.round(nRepo / per_page);
  if ((nRepo / per_page) % 1 < 0.5) nPages += 1;

  useEffect(()=> {
    setPage(1);
  }, [user])

  useEffect(() => {
    const requestGeneralGithubURL: string =
      "https://api.github.com/users/" + user;

    const requestGithubRepoURL: string =
      requestGeneralGithubURL + "/repos?per_page=" + per_page + "&page=" + page;

    // GET request using fetch inside useEffect React hook
    async function getProyects() {
      let localGithubProyects: GithubProyectType[] = [];

      try {
        const htmlGithubProyects: Array<HtmlGithubProyectType> =
          await http(requestGithubRepoURL);

        const htmlGeneralGithub: HtmlGeneralGithubType = await http(
          requestGeneralGithubURL,
        );

        setNRepo(htmlGeneralGithub.public_repos);

        for (const proyect of htmlGithubProyects) {
          let githubproyect: GithubProyectType = {
            key: proyect.id,
            username: proyect.owner.login,
            url: proyect.html_url,
            name: proyect.name,
            description: proyect.description,
            language: proyect.language,
            stars: proyect.stargazers_count,
            forks: proyect.forks,
            license: proyect.license,
            pushed_at: proyect.pushed_at,
            size: proyect.size / 1000,
          };

          localGithubProyects = [...localGithubProyects, githubproyect];
        }
      } catch (error) {
        console.error(error);
      } finally {
        setGithubProyects(localGithubProyects);
      }
    }

    getProyects();
  }, [user, page]);

  return (
    <>
      <div className="align-center mx-20 mt-5 flex">
        <SearchBar text={user} setText={setUser} />
      </div>

      {githubProyects.map((item: GithubProyectType, index) => (
        <Proyect {...item} />
      ))}

      <div className="mb-5 flex justify-center">
        <Pagination nPages={nPages} page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default Github;
