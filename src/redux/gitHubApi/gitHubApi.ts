import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Irepo, Iuser, ServerResponse } from '../../types/type'

  const url = 'https://api.github.com'

  export const gitHubApi = createApi({
    reducerPath: 'gitHubApi',
    baseQuery: fetchBaseQuery({
      baseUrl: url
    }),
    refetchOnFocus: true,
    endpoints: builder => ({
      searchUsers: builder.query<Iuser[], string>({
        query: (search: string) => ({
          url: 'search/users',
          params: {
            q: search,
            per_page: 10
          }
        }),
        transformResponse: (resp: ServerResponse<Iuser>) => resp.items
      }),
      getUserRepos: builder.query<Irepo[], string>({
        query: (username: string) => ({
          url: `users/${username}/repos`
        })
      })
    })
  })

  export const {useSearchUsersQuery, useLazyGetUserReposQuery} = gitHubApi