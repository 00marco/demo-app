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
      
      var properties = await Property.findAll();
      return [...firstNameMatch, ...lastNameMatch, ...properties];
    },

  },
};

// module.exports = resolvers;
