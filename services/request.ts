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

export const fetcherData = async (autToken:string, query: string, isRepository:boolean, after: string) => {
    const queryData = `{
        search(query: ${query}, type: REPOSITORY, first: 10, after: ${after}) {
            edges {
            node {
                ... on Repository {
                id
                name
                }
            }
            }
            pageInfo {
            endCursor
            hasNextPage
            startCursor
            }
        }
    }`;
    client.setHeader('authorization', `Bearer ${autToken}`);
    const data:IDataUser = await client.request(queryData);
    return data;
}