const resolvers = {
  Query: {
    item: (_, { id }, { dataSources }) => {
      return dataSources.newAPI.getItem(id);
    },
    search: (_, { query, tags }, { dataSources }) => {
      console.log(query, tags);
      return dataSources.newAPI.getSearch(query, tags);
    },
  },

  Mutation: {
    createUser: async (_, { name, email, password, role }) => {
      try {
        const user =  {
          name: "John",
          email: "akinalde",
          password: "1234567",
          role: "admin",
          id: "23456"
        };

        return {
          code: 201,
          success: true,
          message: "user successfully created",
          user,
        };
      } catch (error) {
        return {
          code: 400,
          success: false,
          message: "failed to create a user",
          user: null,
        };
      }
    },
  },

  Item: {
    author: ({ author }, _, { dataSources }) => {
      console.log(author);
      return dataSources.newAPI.getUser(author);
    },
  },
};

export default resolvers;
