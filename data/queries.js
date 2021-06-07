import { gql, GraphQLClient } from "graphql-request";

const endpoint = process.env.GRAPHQL_URL_ENDPOINT;

const graphQLClient = new GraphQLClient(endpoint);

export const getPostsAndProjects = async () => {
  const query = gql`
    {
      projects(first: 3, orderBy: date_DESC) {
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
      }
      posts(first: 3, orderBy: date_DESC) {
        title
        slug
        description
        date
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getProjectItems = async () => {
  const query = gql`
    {
      projects(orderBy: date_DESC) {
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getPosts = async () => {
  const query = gql`
    {
      posts(orderBy: date_DESC) {
        title
        slug
        description
        date
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getProjectItem = async (slug) => {
  const query = gql`
    query getProject($slug: String!) {
      projects(where: { slug: $slug }) {
        title
        tags
        slug
        description
        date
        demoUrl
        githubUrl
        coverImage {
          url
          width
          height
        }
        content
      }
    }
  `;

  const variables = {
    slug,
  };

  return await graphQLClient.request(query, variables);
};

export const getProjectSlugs = async () => {
  const query = gql`
    {
      projects {
        slug
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getBlogSlugs = async () => {
  const query = gql`
    {
      posts {
        slug
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getAbout = async () => {
  const query = gql`
    query getAbout {
      abouts {
        content
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getPost = async (slug) => {
  const query = gql`
    query getPost($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        slug
        description
        date
        content
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  return await graphQLClient.request(query, variables);
};
