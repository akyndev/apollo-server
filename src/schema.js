import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    getAllUser: [User!]!
    getUser(id: ID!): User!
    getPosts: [Post!]!
    item(id: ID!): Item!
    search(query: String, tags: String!): Search!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!, role: String!): CreateUser
  }

  type CreateUser {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }

  type Search {
    hits: [SearchItem!]
    nbHits: Int,
    page: Int,
    nbPages: Int,
    hitsPerPage: Int,
    exhaustiveNbHits: Boolean,
    exhaustiveTypo: Boolean,
    query: String,
    params: String,
    serverTimeMS: Int
  }


  type SearchItem {
      created_at: String,
      title: String,
      url: String,
      author: String,
      points: Int,
      story_text: String,
      comment_text: String,
      num_comments: Int,
      story_id: String,
      story_title: String,
      story_url: String,
      parent_id: String,
      created_at_i: Int,
      relevancy_score: Int,
      _tags: [String],
      objectID: Int,
    }

  type Item {
    id: ID!
    created_at: String
    author: Author!
    title: String
    url: String
    text: String
    points: Int
    parent_id: String
    children: [SubItem]
  }

  type SubItem {
    id: ID!
    created_at: String
    author: String
    text: String
    points: Int
    parent_id: String
    children: [SubItem]
  }

  type Author {
    username: String!,
    about: String,
    karma: Int
  }

  type User {
    id: ID!
    "first and last name of user"
    name: String
    "email of user"
    email: String
    "password of user"
    password: String
    "role of user"
    role: String
  }

  type Post {
    id: ID!
    "title of post"
    title: String!
    "content of post"
    content: String!
    "date of post"
    date: String
    "author of post"
    author: User!
  }
`;

export default typeDefs;
