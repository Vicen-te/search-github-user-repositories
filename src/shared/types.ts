// Type to make the request easier to read
export type GithubProyectType = {
  key: number;
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

// [for all HTML...]
// This and more is what you can extract by making a request,
// in typescript you must specify it in order to reference it in your code.

export interface owner {
  login: string;
}

export interface license {
  key: string;
  name: string;
  spdx_id: string;
}

export interface HtmlGeneralGithubType {
  id: number;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
  avatar_url: string;
  login: string;
  name: string;
}

export interface HtmlGithubProyectType {
  id: number;
  owner: owner;
  html_url: string;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks: number;
  license: license;
  pushed_at: string;
  size: number;
}