import gql from "graphql-tag";

// Mutation to update user
export const UPDATE_USER_MUTATION = gql`
  # The ! after the type means that it is required
  mutation UpdateUser($input: UpdateOneUserInput!) {
    # call the updateOneUser mutation with the input and pass the $input argument
    # $variableName is a convention for GraphQL variables
    updateOneUser(input: $input) {
      id
      name
      avatarUrl
      email
      phone
      jobTitle
    }
  }
`;

//Mutation to create new User - TBD

// Mutation to create company
export const CREATE_COMPANY_MUTATION = gql`
  mutation CreateCompany($input: CreateOneCompanyInput!) {
    createOneCompany(input: $input) {
      id
      salesOwner {
        id
      }
    }
  }
`;

// Mutation to update company details
export const UPDATE_COMPANY_MUTATION = gql`
  mutation UpdateCompany($input: UpdateOneCompanyInput!) {
    updateOneCompany(input: $input) {
      id
      name
      totalRevenue
      industry
      companySize
      businessType
      country
      website
      avatarUrl
      salesOwner {
        id
        name
        avatarUrl
      }
    }
  }
`;

// Mutation to update task stage of a task
export const UPDATE_TASK_STAGE_MUTATION = gql`
  mutation UpdateTaskStage($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
    }
  }
`;

// Mutation to create a new task
export const CREATE_TASK_MUTATION = gql`
  mutation CreateTask($input: CreateOneTaskInput!) {
    createOneTask(input: $input) {
      id
      title
      stage {
        id
        title
      }
    }
  }
`;

// Mutation to update a task details
export const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTask($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
      title
      completed
      description
      dueDate
      stage {
        id
        title
      }
      users {
        id
        name
        avatarUrl
      }
      checklist {
        title
        checked
      }
    }
  }
`;

// mutation to add users
export const ADD_USER_MUTATION = gql`
  mutation AddUsersFromCSV($file: Upload!) {
    addUserFromCSV(file: $file) {
      success
      message
      addedUsers {
        id
        name
        email
        # Any other relevant user fields you want to retrieve
      }
      failedUsers {
        rowNumber
        errorMessage
        rowData {
          # Include the data of the failed user upload for debugging or error reporting
          name
          email
          # Include other fields as needed
        }
      }
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation Register($registerInput: RegisterInput!) {
    register(registerInput: $registerInput) {
      accessToken
      user {
        id
        email
      }
    }
  }
`;
