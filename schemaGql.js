import gql from 'graphql-tag';

const typeDefs = gql`
type Query{
vehicals:[Vehical]
}

type Vehical{
_id:ID!
user_name:String
mobile_number:String!
flat_number:String!
vehical_number:String!
}

type VehicalType{
user_name:String
mobile_number:String!
flat_number:String!
vehical_number:String!
}
type Mutation{
addVehical(vehicalAdd:VehicalAddInput):String
}

input VehicalAddInput{
user_name:String
mobile_number:String!
flat_number:String!
vehical_number:String
}


`

export default typeDefs