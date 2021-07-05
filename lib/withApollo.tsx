import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"
import { offsetLimitPagination } from "@apollo/client/utilities"
import nextWithApollo from "next-with-apollo"
import { useRouter } from "next/dist/client/router"

export const withApollo = nextWithApollo(
    ({ initialState, headers }) => {
        return new ApolloClient({
            ssrMode: typeof window === "undefined",
            link: new HttpLink({
                uri: "https://spacexdata.herokuapp.com/graphql"
            }),
            headers: {
                ...(headers as Record<string, string>)
            },
            cache: new InMemoryCache({
                typePolicies: {
                    Query: {
                        fields: {
                            history: offsetLimitPagination()
                        }
                    }
                }
            }).restore(initialState || {})
        })
    }, {
        render: ({ Page, props }) => {
            const router = useRouter()
            return (
                <ApolloProvider client={props.apollo}>
                    <Page {...props} {...router} />
                </ApolloProvider>
            )
        }
    }
)



