import { gql } from '@apollo/client/core';

export const GET_CATEGORIES = gql`
  query {
    getCategoryList {
      items {
        _id
        name
        products {
          _id
          description
          image {
            _id
            sourceUrl
            title
          }
          name
          price
          slug
        }
        slug
      }
      total
    }
  }
`;

export const GET_CATEGORY = gql`
  query ($_id: ID!) {
    getCategory(_id: $_id) {
      _id
      name
      products {
        _id
        description
        image {
          _id
          sourceUrl
          title
        }
        name
        price
        slug
      }
      slug
    }
  }
`;

export const GET_PRODUCTS = gql`
  query {
    getProductList {
      items {
        _id
        description
        image {
          _id
          sourceUrl
          title
        }
        name
        price
        slug
      }
      total
    }
  }
`;

export const GET_PRODUCT = gql`
  query ($_id: ID!) {
    getProduct(_id: $_id) {
      _id
      description
      image {
        _id
        sourceUrl
        title
      }
      name
      price
      slug
    }
  }
`;
