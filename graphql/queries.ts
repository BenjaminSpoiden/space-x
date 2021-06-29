import gql from "graphql-tag"

export const LAUNCHES_QUERY = gql`
    query Launches {
  nextLaunch: launches(order: desc) {
    mission_name
    launch_year
    rocket {
      rocket_name
    }
    launch_success
    links {
      mission_patch
    }
  }
}
`