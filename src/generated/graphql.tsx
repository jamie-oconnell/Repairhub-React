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
  DateTime: any;
};


export enum SortByKey {
  Id = 'ID',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  Name = 'NAME'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum Status {
  Deleted = 'Deleted',
  Blocked = 'Blocked'
}

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<CreateUser>;
  addEditCustomer?: Maybe<Customer>;
  customerActions?: Maybe<Customer>;
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
  businessName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressIn>;
  notificationSms?: Maybe<Scalars['Boolean']>;
  notificationEmail?: Maybe<Scalars['Boolean']>;
};


export type MutationCustomerActionsArgs = {
  id: Scalars['String'];
  status?: Maybe<Status>;
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
  customer?: Maybe<Customer>;
  profile?: Maybe<Profile>;
  me?: Maybe<Me>;
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
  filters?: Maybe<CustomerFilterInput>;
};


export type QueryCustomerArgs = {
  id?: Maybe<Scalars['String']>;
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

export type Profile = {
  __typename?: 'Profile';
  ukey?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};

export type Me = {
  __typename?: 'Me';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  _role?: Maybe<Role>;
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
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  addressData?: Maybe<Address>;
  status?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
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

export type CustomerFilterInput = {
  field?: Maybe<Scalars['String']>;
  createdAt?: Maybe<CreatedAtInput>;
};

export type CreatedAtInput = {
  gte?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
};

export type GetCustomersTableQueryVariables = Exact<{
  pageSize?: Maybe<Scalars['Int']>;
  sortDirection?: Maybe<SortOrder>;
  search?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
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
        & Pick<Customer, 'id' | 'name' | 'email' | 'phoneNumber'>
      ) }
    )>>, pageInfo: (
      { __typename?: 'CustomerPageInfo' }
      & Pick<CustomerPageInfo, 'endCursor' | 'startCursor' | 'hasNextPage' | 'hasPreviousPage'>
    ) }
  ) }
);

export type GetCustomerQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type GetCustomerQuery = (
  { __typename?: 'Query' }
  & { customer?: Maybe<(
    { __typename?: 'Customer' }
    & Pick<Customer, 'id' | 'firstName' | 'lastName' | 'name' | 'email' | 'phoneNumber' | 'alternatePhoneNumber' | 'businessName' | 'createdAt' | 'updatedAt'>
    & { addressData?: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'id' | 'city' | 'country' | 'address1' | 'address2' | 'postal'>
    )> }
  )> }
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

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Me' }
    & Pick<Me, 'id' | 'email' | 'displayName' | 'username' | 'accountType'>
  )> }
);


export const GetCustomersTableDocument = gql`
    query GetCustomersTable($pageSize: Int, $sortDirection: SortOrder, $search: String, $after: String, $before: String) {
  customers(
    first: $pageSize
    sortOrder: $sortDirection
    search: $search
    after: $after
    before: $before
  ) {
    edges {
      cursor
      node {
        id
        name
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
 *      after: // value for 'after'
 *      before: // value for 'before'
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
export const GetCustomerDocument = gql`
    query GetCustomer($id: String) {
  customer(id: $id) {
    id
    firstName
    lastName
    name
    email
    phoneNumber
    alternatePhoneNumber
    businessName
    addressData {
      id
      city
      country
      address1
      address2
      postal
    }
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetCustomerQuery__
 *
 * To run a query within a React component, call `useGetCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCustomerQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>) {
        return Apollo.useQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, baseOptions);
      }
export function useGetCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>) {
          return Apollo.useLazyQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, baseOptions);
        }
export type GetCustomerQueryHookResult = ReturnType<typeof useGetCustomerQuery>;
export type GetCustomerLazyQueryHookResult = ReturnType<typeof useGetCustomerLazyQuery>;
export type GetCustomerQueryResult = Apollo.QueryResult<GetCustomerQuery, GetCustomerQueryVariables>;
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
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    displayName
    username
    accountType
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;