import gql from 'graphql-tag';

export const GET_ALL_VEHICAL = gql`
query vehicals {
  vehicals {
    user_name
    mobile_number
    flat_number
    vehical_number
  }
}
`
