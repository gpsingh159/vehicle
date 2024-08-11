import mongoose from 'mongoose'





const Vehical = mongoose.model('Vehical')
// parent, args->{}, context, info
const resolvers = {
    Query: {
        vehicals: async () => await Vehical.find({}),
      
    },
    Mutation: {
        // first-root or parent, second variable and third context
        addVehical: async (_, { vehicalAdd }) => {
           
            const newVehical = new Vehical({
               user_name : vehicalAdd.user_name,
               vehical_number : vehicalAdd.vehical_number,
               mobile_number: vehicalAdd.mobile_number,
               flat_number: vehicalAdd.flat_number,
               
            })
            await newVehical.save();
            return "Vehical has been saved successfully.";
        }


    }

}

export default resolvers