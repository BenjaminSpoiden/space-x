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

export const SPACEX_HISTORY = gql`
  query History($limit: Int, $offset: Int) {
  history(limit: $limit, order: desc, offset: $offset) {
    title
    details
    event_date_utc
    links {
      article
      wikipedia
      reddit
    }
  }
}
`

export const ROCKET = gql`
  query Rocket($rocketName: String!) {
  rocket(id: $rocketName) {
    id
    active
    stages
    boosters
    first_flight
    cost_per_launch
    success_rate_pct
    flickr_images
    description
    wikipedia
    height {
      meters
      feet
    }
    landing_legs {
      material
      number
    }
    diameter {
      meters
      feet
    }
    mass {
      kg
      lb
    }
    payload_weights {
      id
      name
    }
    rocket_name
    rocket_type
    second_stage {
      engines
      fuel_amount_tons
    }
  } 
}

`