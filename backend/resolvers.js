import { User, Property } from './models';

export default {
  SearchResult: {
    __resolveType (object) {
      if (object.firstName) return 'User'
      if (object.street) return 'Property'
    }
  },
  Query: {
    search: async (parent, args, context, info) => {
      // TODO lazy loading syntax is unnecessarily long - use eager loading instead
      // TODO not sure what's the syntax to make an OR condition in sequelize so I made several queries instead for now
      var firstNameMatch = await User.findAll({
        where : {
          firstName : args.search_pattern
        }
      });
      firstNameMatch.forEach(user => {
        user.properties = Property.findAll({ where: { userId: user.id}});
      });


      var lastNameMatch = await User.findAll({
        where : {
          lastName : args.search_pattern
        }
      });
      lastNameMatch.forEach(user => {
        user.properties = Property.findAll({ where: { userId: user.id}});
      });
      

      var streetMatch = await Property.findAll({
        where : {
          street : args.search_pattern
        }
      });
      var cityMatch = await Property.findAll({
        where : {
          city : args.search_pattern
        }
      });
      var stateMatch = await Property.findAll({
        where : {
          state : args.search_pattern
        }
      });
      var zipMatch = await Property.findAll({
        where : {
          zip : args.search_pattern
        }
      });
      var rentMatch = await Property.findAll({
        where : {
          rent : args.search_pattern
        }
      });

      return [...firstNameMatch, ...lastNameMatch, ...streetMatch, ...cityMatch, ...stateMatch, ...zipMatch, ...rentMatch];
    },

  },
};

// module.exports = resolvers;
