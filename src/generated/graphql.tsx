import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum SortByKey {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<CreateUser>;
  addEditCustomer?: Maybe<AddEditCustomer>;
  loginUser?: Maybe<LoginUser>;
  completeUserProfile?: Maybe<Success>;
  forgotPassword?: Maybe<Success>;
  resetPassword?: Maybe<Success>;
  editProfile?: Maybe<Success>;
  changePassword?: Maybe<Success>;
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  displayName: Scalars['String'];
  accountType: Scalars['String'];
};


export type MutationAddEditCustomerArgs = {
  id?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressIn>;
  notificationSms?: Maybe<Scalars['Boolean']>;
  notificationEmail?: Maybe<Scalars['Boolean']>;
};


export type MutationLoginUserArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCompleteUserProfileArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  token: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationEditProfileArgs = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};


export type MutationChangePasswordArgs = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  roles: Array<Roles>;
  customers: Customers;
  profile?: Maybe<Profile>;
  logout?: Maybe<Success>;
};


export type QueryRolesArgs = {
  status?: Maybe<Scalars['String']>;
};


export type QueryCustomersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<SortOrder>;
  sortByKey?: Maybe<SortByKey>;
};


export type QueryProfileArgs = {
  ukey: Scalars['String'];
};

export type CreateUser = {
  __typename?: 'CreateUser';
  id: Scalars['String'];
  email: Scalars['String'];
  displayName: Scalars['String'];
  accountType: Scalars['String'];
};

export type Roles = {
  __typename?: 'Roles';
  id?: Maybe<Scalars['ID']>;
  role?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['String']>;
};

export type AddressIn = {
  id?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  postal?: Maybe<Scalars['String']>;
};

export type Address = {
  __typename?: 'Address';
  id?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  postal?: Maybe<Scalars['String']>;
};

export type AddEditCustomer = {
  __typename?: 'AddEditCustomer';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  notificationSms?: Maybe<Scalars['Boolean']>;
  notificationEmail?: Maybe<Scalars['Boolean']>;
};

export type Profile = {
  __typename?: 'Profile';
  ukey?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};

export type LoginUser = {
  __typename?: 'LoginUser';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  _role?: Maybe<Role>;
};

export type Role = {
  __typename?: 'Role';
  id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['String']>;
};

export type CustomerPageInfo = {
  __typename?: 'CustomerPageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type Customer = {
  __typename?: 'Customer';
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  addressData?: Maybe<Address>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CustomerEdge = {
  __typename?: 'CustomerEdge';
  cursor: Scalars['String'];
  node: Customer;
};

export type Customers = {
  __typename?: 'Customers';
  edges: Array<Maybe<CustomerEdge>>;
  pageInfo: CustomerPageInfo;
  totalCount: Scalars['Int'];
};

export type Success = {
  __typename?: 'Success';
  message: Scalars['String'];
};

export type GetCustomersTableQueryVariables = Exact<{
  pageSize?: Maybe<Scalars['Int']>;
  sortDirection?: Maybe<SortOrder>;
  search?: Maybe<Scalars['String']>;
}>;


export type GetCustomersTableQuery = (
  { __typename?: 'Query' }
  & { customers: (
    { __typename?: 'Customers' }
    & Pick<Customers, 'totalCount'>
    & { edges: Array<Maybe<(
      { __typename?: 'CustomerEdge' }
      & Pick<CustomerEdge, 'cursor'>
      & { node: (
        { __typename?: 'Customer' }
        & Pick<Customer, 'id' | 'firstName' | 'lastName' | 'email' | 'phoneNumber'>
      ) }
    )>>, pageInfo: (
      { __typename?: 'CustomerPageInfo' }
      & Pick<CustomerPageInfo, 'endCursor' | 'startCursor' | 'hasNextPage' | 'hasPreviousPage'>
    ) }
  ) }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { loginUser?: Maybe<(
    { __typename: 'LoginUser' }
    & Pick<LoginUser, 'id' | 'email' | 'displayName' | 'username' | 'accountType' | 'accessToken'>
    & { _role?: Maybe<(
      { __typename?: 'Role' }
      & Pick<Role, 'id' | 'role' | 'permissions'>
    )> }
  )> }
);


export const GetCustomersTableDocument = gql`
    query GetCustomersTable($pageSize: Int, $sortDirection: SortOrder, $search: String) {
  customers(first: $pageSize, sortOrder: $sortDirection, search: $search) {
    edges {
      cursor
      node {
        id
        firstName
        lastName
        email
        phoneNumber
      }
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
    totalCount
  }
}
    `;

/**
 * __useGetCustomersTableQuery__
 *
 * To run a query within a React component, call `useGetCustomersTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersTableQuery({
 *   variables: {
 *      pageSize: // value for 'pageSize'
 *      sortDirection: // value for 'sortDirection'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetCustomersTableQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomersTableQuery, GetCustomersTableQueryVariables>) {
        return Apollo.useQuery<GetCustomersTableQuery, GetCustomersTableQueryVariables>(GetCustomersTableDocument, baseOptions);
      }
export function useGetCustomersTableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomersTableQuery, GetCustomersTableQueryVariables>) {
          return Apollo.useLazyQuery<GetCustomersTableQuery, GetCustomersTableQueryVariables>(GetCustomersTableDocument, baseOptions);
        }
export type GetCustomersTableQueryHookResult = ReturnType<typeof useGetCustomersTableQuery>;
export type GetCustomersTableLazyQueryHookResult = ReturnType<typeof useGetCustomersTableLazyQuery>;
export type GetCustomersTableQueryResult = Apollo.QueryResult<GetCustomersTableQuery, GetCustomersTableQueryVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  loginUser(username: $username, password: $password) {
    id
    email
    displayName
    username
    accountType
    accessToken
    _role {
      id
      role
      permissions
    }
    __typename
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;