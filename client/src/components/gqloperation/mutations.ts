import gql from 'graphql-tag';


export const ADD_VEHICAL =gql`
mutation AddVehical($vehical: VehicalAddInput) {
  vehical:addVehical(vehicalAdd: $vehical)
}
`


