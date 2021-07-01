import gql from "graphql-tag"

export const LAUNCHES_QUERY = gql`
    query Launches {
 launches(order: desc) {
    flight_number
    mission_name
    rocket {
      rocket_name
      rocket_type
    }
    launch_site {
      site_name
    }
    links {
      mission_patch
    }
    launch_year
  } 
}
`


export const SPACEX_INFO = gql`
  query Info {
  info {
    name
    summary
  }
}
` 