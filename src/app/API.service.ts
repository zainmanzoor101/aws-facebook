/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreatePost: OnCreatePostSubscription;
  onUpdatePost: OnUpdatePostSubscription;
  onDeletePost: OnDeletePostSubscription;
  onCreateComment: OnCreateCommentSubscription;
  onUpdateComment: OnUpdateCommentSubscription;
  onDeleteComment: OnDeleteCommentSubscription;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  content?: string | null;
  creatorId?: string | null;
  creatorName?: string | null;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  creatorId?: ModelStringInput | null;
  creatorName?: ModelStringInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Post = {
  __typename: "Post";
  id: string;
  title: string;
  content?: string | null;
  creatorId?: string | null;
  creatorName?: string | null;
  comments?: ModelCommentConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection";
  items?: Array<Comment | null> | null;
  nextToken?: string | null;
};

export type Comment = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  creatorId?: string | null;
  creatorName?: string | null;
  post?: Post | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  content?: string | null;
  creatorId?: string | null;
  creatorName?: string | null;
};

export type DeletePostInput = {
  id: string;
};

export type CreateCommentInput = {
  id?: string | null;
  postID: string;
  content: string;
  creatorId?: string | null;
  creatorName?: string | null;
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  creatorId?: ModelStringInput | null;
  creatorName?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateCommentInput = {
  id: string;
  postID?: string | null;
  content?: string | null;
  creatorId?: string | null;
  creatorName?: string | null;
};

export type DeleteCommentInput = {
  id: string;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  creatorId?: ModelStringInput | null;
  creatorName?: ModelStringInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection";
  items?: Array<Post | null> | null;
  nextToken?: string | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  creatorId?: ModelStringInput | null;
  creatorName?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content?: string | null;
  creatorId?: string | null;
  creatorName?: string | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      creatorId?: string | null;
      creatorName?: string | null;
      post?: {
        __typename: "Post";
        id: string;
        title: string;
        content?: string | null;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content?: string | null;
  creatorId?: string | null;
  creatorName?: string | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      creatorId?: string | null;
      creatorName?: string | null;
      post?: {
        __typename: "Post";
        id: string;
        title: string;
        content?: string | null;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content?: string | null;
  creatorId?: string | null;
  creatorName?: string | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      creatorId?: string | null;
      creatorName?: string | null;
      post?: {
        __typename: "Post";
        id: string;
        title: string;
        content?: string | null;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  creatorId?: string | null;
  creatorName?: string | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    content?: string | null;
    creatorId?: string | null;
    creatorName?: string | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items?: Array<{
        __typename: "Comment";
        id: string;
        postID: string;
        content: string;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  creatorId?: string | null;
  creatorName?: string | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    content?: string | null;
    creatorId?: string | null;
    creatorName?: string | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items?: Array<{
        __typename: "Comment";
        id: string;
        postID: string;
        content: string;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  creatorId?: string | null;
  creatorName?: string | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    content?: string | null;
    creatorId?: string | null;
    creatorName?: string | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items?: Array<{
        __typename: "Comment";
        id: string;
        postID: string;
        content: string;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  content?: string | null;
  creatorId?: string | null;
  creatorName?: string | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      creatorId?: string | null;
      creatorName?: string | null;
      post?: {
        __typename: "Post";
        id: string;
        title: string;
        content?: string | null;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items?: Array<{
    __typename: "Post";
    id: string;
    title: string;
    content?: string | null;
    creatorId?: string | null;
    creatorName?: string | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items?: Array<{
        __typename: "Comment";
        id: string;
        postID: string;
        content: string;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  creatorId?: string | null;
  creatorName?: string | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    content?: string | null;
    creatorId?: string | null;
    creatorName?: string | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items?: Array<{
        __typename: "Comment";
        id: string;
        postID: string;
        content: string;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items?: Array<{
    __typename: "Comment";
    id: string;
    postID: string;
    content: string;
    creatorId?: string | null;
    creatorName?: string | null;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      content?: string | null;
      creatorId?: string | null;
      creatorName?: string | null;
      comments?: {
        __typename: "ModelCommentConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type ListByPostIdsQuery = {
  __typename: "ModelPostConnection";
  items?: Array<{
    __typename: "Post";
    id: string;
    title: string;
    content?: string | null;
    creatorId?: string | null;
    creatorName?: string | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items?: Array<{
        __typename: "Comment";
        id: string;
        postID: string;
        content: string;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type ListByPostCommentsQuery = {
  __typename: "ModelCommentConnection";
  items?: Array<{
    __typename: "Comment";
    id: string;
    postID: string;
    content: string;
    creatorId?: string | null;
    creatorName?: string | null;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      content?: string | null;
      creatorId?: string | null;
      creatorName?: string | null;
      comments?: {
        __typename: "ModelCommentConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content?: string | null;
  creatorId?: string | null;
  creatorName?: string | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      creatorId?: string | null;
      creatorName?: string | null;
      post?: {
        __typename: "Post";
        id: string;
        title: string;
        content?: string | null;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content?: string | null;
  creatorId?: string | null;
  creatorName?: string | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      creatorId?: string | null;
      creatorName?: string | null;
      post?: {
        __typename: "Post";
        id: string;
        title: string;
        content?: string | null;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content?: string | null;
  creatorId?: string | null;
  creatorName?: string | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      creatorId?: string | null;
      creatorName?: string | null;
      post?: {
        __typename: "Post";
        id: string;
        title: string;
        content?: string | null;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  creatorId?: string | null;
  creatorName?: string | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    content?: string | null;
    creatorId?: string | null;
    creatorName?: string | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items?: Array<{
        __typename: "Comment";
        id: string;
        postID: string;
        content: string;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  creatorId?: string | null;
  creatorName?: string | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    content?: string | null;
    creatorId?: string | null;
    creatorName?: string | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items?: Array<{
        __typename: "Comment";
        id: string;
        postID: string;
        content: string;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  creatorId?: string | null;
  creatorName?: string | null;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    content?: string | null;
    creatorId?: string | null;
    creatorName?: string | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items?: Array<{
        __typename: "Comment";
        id: string;
        postID: string;
        content: string;
        creatorId?: string | null;
        creatorName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          creatorId
          creatorName
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              creatorId
              creatorName
              post {
                __typename
                id
                title
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          creatorId
          creatorName
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              creatorId
              creatorName
              post {
                __typename
                id
                title
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          creatorId
          creatorName
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              creatorId
              creatorName
              post {
                __typename
                id
                title
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          content
          creatorId
          creatorName
          post {
            __typename
            id
            title
            content
            creatorId
            creatorName
            comments {
              __typename
              items {
                __typename
                id
                postID
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          content
          creatorId
          creatorName
          post {
            __typename
            id
            title
            content
            creatorId
            creatorName
            comments {
              __typename
              items {
                __typename
                id
                postID
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          content
          creatorId
          creatorName
          post {
            __typename
            id
            title
            content
            creatorId
            creatorName
            comments {
              __typename
              items {
                __typename
                id
                postID
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          content
          creatorId
          creatorName
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              creatorId
              creatorName
              post {
                __typename
                id
                title
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            content
            creatorId
            creatorName
            comments {
              __typename
              items {
                __typename
                id
                postID
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          postID
          content
          creatorId
          creatorName
          post {
            __typename
            id
            title
            content
            creatorId
            creatorName
            comments {
              __typename
              items {
                __typename
                id
                postID
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            postID
            content
            creatorId
            creatorName
            post {
              __typename
              id
              title
              content
              creatorId
              creatorName
              comments {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  async ListByPostIds(
    id?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListByPostIdsQuery> {
    const statement = `query ListByPostIds($id: ID, $sortDirection: ModelSortDirection, $filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listByPostIds(id: $id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            content
            creatorId
            creatorName
            comments {
              __typename
              items {
                __typename
                id
                postID
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListByPostIdsQuery>response.data.listByPostIds;
  }
  async ListByPostComments(
    postID?: string,
    content?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListByPostCommentsQuery> {
    const statement = `query ListByPostComments($postID: ID, $content: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listByPostComments(postID: $postID, content: $content, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            postID
            content
            creatorId
            creatorName
            post {
              __typename
              id
              title
              content
              creatorId
              creatorName
              comments {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (postID) {
      gqlAPIServiceArguments.postID = postID;
    }
    if (content) {
      gqlAPIServiceArguments.content = content;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListByPostCommentsQuery>response.data.listByPostComments;
  }
  OnCreatePostListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePost">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          title
          content
          creatorId
          creatorName
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              creatorId
              creatorName
              post {
                __typename
                id
                title
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePost">>
  >;

  OnUpdatePostListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePost">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          title
          content
          creatorId
          creatorName
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              creatorId
              creatorName
              post {
                __typename
                id
                title
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePost">>
  >;

  OnDeletePostListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePost">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          title
          content
          creatorId
          creatorName
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              creatorId
              creatorName
              post {
                __typename
                id
                title
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePost">>
  >;

  OnCreateCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          postID
          content
          creatorId
          creatorName
          post {
            __typename
            id
            title
            content
            creatorId
            creatorName
            comments {
              __typename
              items {
                __typename
                id
                postID
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
  >;

  OnUpdateCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          postID
          content
          creatorId
          creatorName
          post {
            __typename
            id
            title
            content
            creatorId
            creatorName
            comments {
              __typename
              items {
                __typename
                id
                postID
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
  >;

  OnDeleteCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          postID
          content
          creatorId
          creatorName
          post {
            __typename
            id
            title
            content
            creatorId
            creatorName
            comments {
              __typename
              items {
                __typename
                id
                postID
                content
                creatorId
                creatorName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
  >;
}
