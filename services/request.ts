import { gql, GraphQLClient, request } from 'graphql-request'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_API!;
const BASE_URL_TOKEN = process.env.NEXT_PUBLIC_BASE_URL_TOKEN!;
const LIMIT = process.env.NEXT_PUBLIC_LIMIT!;

const client = new GraphQLClient(`${BASE_URL}`);
const queryUser = gql`{
    viewer {
      login
      avatarUrl
      name
      bio
    }
  }`;

export interface IData {
    message:string,
    data: {
        error?: string,
        error_description?: string,
        error_uri?: string,
        access_token?:string,
        token_type?:string,
        scope?:string,
    }
}
export interface IDataUser {
    viewer: {
        avatarUrl?: string,
        bio?: string,
        login?: string,
        name?:string,
    }
}

export interface IDataRepository {
    search: Search;
}

export interface Search {
    edges:           SearchEdge[];
    pageInfo:        PageInfo;
    repositoryCount: number;
}

export interface SearchEdge {
    node: Node;
}

export interface Node {
    id:             string;
    name:           string;
    nameWithOwner:  string;
    owner:          Owner;
    stargazerCount: number;
    languages:      Languages;
    licenseInfo:    LicenseInfo | null;
    updatedAt:      Date;
    description:    string;
}

export interface Languages {
    edges: LanguagesEdge[];
}

export interface LanguagesEdge {
    node: LicenseInfo;
}

export interface LicenseInfo {
    name: string;
}

export interface Owner {
    login: string;
}

export interface PageInfo {
    endCursor:   string;
    hasNextPage: boolean;
    startCursor: string;
}

export interface IDataUsers {
  search: SearchUser;
}

export interface SearchUser {
  pageInfo: PageInfo;
  edges:    Edge[];
}

export interface Edge {
  node: NodeUser;
}

export interface NodeUser {
  id:    string;
  email: string;
  name:  string;
  login: string;
  bio:   string;
}

export const fetcherToken = (code:string) => fetch(`${BASE_URL_TOKEN}`, 
    {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({ code: code })
    }
    ).then((res) => res.json())
    .catch(error => console.error('Error:', error))
    .then((response:IData) => {return response});


export const fetcherUserInfo = async (autToken:string) => {
    client.setHeader('authorization', `Bearer ${autToken}`);
    const data:IDataUser = await client.request(queryUser);
    return data;
}

export const fetcherData = async (autToken:string, query: string, isRepository:boolean, after: string | null = null) => {
    const queryData = `{
        search(query: "${query}", type: REPOSITORY, first: 10${after !== null ? ', after:':''}${after !== null ? after:''}) {
            edges {
                node {
                  ... on Repository {
                    id
                    name
                    nameWithOwner
                    owner {
                      login
                    }
                    stargazerCount
                    languages(first: 1) {
                      edges {
                        node {
                          name
                        }
                      }
                    }
                    licenseInfo {
                      name
                    }
                    updatedAt
                    description
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                startCursor
              }
              repositoryCount
        }
    }`;
    
    client.setHeader('authorization', `Bearer ${autToken}`);
    const data: IDataRepository = await client.request(queryData);
    return data;
}

export const fetcherUsers = async (autToken:string, query: string, isRepository:boolean, after: string | null = null) => {
    const queryData = `{
      search(query: "${query}", type: USER, first: 10${after !== null ? ', after:':''}${after !== null ? after:''}) {
        pageInfo {
          endCursor
          hasNextPage
          startCursor
        }
        edges {
          node {
            ... on User {
              id
              email
              name
              login
              bio
            }
          }
        }
      }
    }`;
    
    client.setHeader('authorization', `Bearer ${autToken}`);
    const data: IDataRepository = await client.request(queryData);
    return data;
}