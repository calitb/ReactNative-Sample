import { APIInfo, Character } from './redux/reducer';

export async function fetchCharacters(page: number): Promise<{ characters: Character[]; apiInfo: APIInfo } | undefined> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const body = await response.json();
    const { results, info } = body;
    const characters = results.map(characterMapper);

    const apiInfo = infoMapper(info.count, info.pages, info.prev, info.next);

    return { characters, apiInfo };
  } catch (ex) {
    console.log({ ex });
    return undefined;
  }
}

function characterMapper({ id, name, image, species, origin }: any): Character {
  return {
    id,
    name,
    image,
    species,
    origin: origin.name,
  };
}

function infoMapper(count: number, pages: number, prev?: string, next?: string): APIInfo {
  return {
    count,
    pages,
    prev: prev ? parseInt(prev.replace('https://rickandmortyapi.com/api/character?page=', '')) : undefined,
    next: next ? parseInt(next.replace('https://rickandmortyapi.com/api/character?page=', '')) : undefined,
  };
}
