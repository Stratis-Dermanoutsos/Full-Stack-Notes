---
title: "GitHub Actions"
description: "This section contains notes on GitHub Actions."
---

## Types of Actions

Actions come in two types:

- (Docker) **container actions**

  They allow the environment to be packaged with the ***GitHub Actions*** code and can only execute in the GitHub-Hosted Linux environment.
- ***JavaScript* actions**

## Workflow Files

Workflows are defined in special files in the *`.github/workflows`* directory, named *`main.yml`*.
Workflows can execute based on your chosen event.
Inside a workflow file, several declarations take place.

- Name

  ```json
  name: workflow_name
  ```

  This name appears on any pull request or in the Actions tab. The name is especially useful when there are multiple workflows in your repository.
- Event

  ```json
  on: event
  ```

  It indicates that your workflow will execute anytime the specified event is triggered.
  For example,

  ```json
  on: push
  ```

- Actions

  Workflows piece together jobs, and jobs piece together steps.
  Actions can be used from within the same repository, from any other public repository, or from a published Docker container image.

  An action block can contain:
  - Jobs

    ```json
    jobs:
    ```

    It is the base component of a workflow run.
  - Build

    ```json
    build:
    ```

    It's the identifier we're attaching to this job.
  - Name

    ```json
    name: action_name
    ```

    It's the name of the job, this is displayed on GitHub when the workflow is running.
  - Runs On

    ```json
    runs-on: ubuntu-latest
    ```

    Defines the type of machine to run the job on. The machine can be either a GitHub-hosted runner or a self-hosted runner.
  - Steps

    ```json
    steps:
    ```

    A linear sequence of operations that make up a job.
  - Uses

    ```json
    uses: actions/checkout@v1
    ```

    Uses a community action called checkout to allow the workflow to access the contents of the repository.

    ```json
    uses: ./dir
    ```

    Provides the relative path to the action in the *`dir`* directory of the repository.
  - Input variables

    ```json
    with:
      VARIABLE_1: "value"
      VARIABLE_2: "val"
    ```

    It's used to specify the input variables that will be available to your action in the runtime environment.

## Following the *GitHub Actions: Hello World* course

I will take note of the procedure of the course to be able to look back at it for any reference I might need.

### Step 1: Add a Dockerfile

- Create a file titled *`action-a/Dockerfile`*
  - Create a new branch. Branches should be named intentionally, so a good name for this branch could be *`first-action`*
  - On the new branch, create a directory: *`action-a`*
  - In the *`action-a`* directory, create a file titled *`Dockerfile`*
- Inside the *`Dockerfile`*, paste

  ```json
  FROM debian:9.5-slim
  ADD entrypoint.sh /entrypoint.sh
  RUN chmod +x /entrypoint.sh
  ENTRYPOINT ["/entrypoint.sh"]
  ```

- Commit your file
- Open a pull request with your new branch against main

### Step 2: Add an entrypoint script

> An entrypoint script must exist in our repository so that Docker has something to execute.

- As a part of this branch and pull request, create a file in the *`action-a`* directory titled *`entrypoint.sh`*
- Inside the *`entrypoint.sh`*, paste

  ```json
  #!/bin/sh -l
  sh -c "echo Hello world my name is $INPUT_MY_NAME"
  ```

  In this file, all we're doing is outputting a "Hello world" message using an environment variable called **MY_NAME**.
- Stage and commit the changes
- Push the changes to GitHub

### Step 3: Add an action metadata file

- As a part of this branch and pull request, create a file titled *`action-a/action.yml`*
- Inside it, paste

  ```json
  name: "Hello Actions"
  description: "Greet someone"
  author: "octocat@github.com"
  inputs:
  MY_NAME:
    description: "Who to greet"
    required: true
    default: "World"
  runs:
  using: "docker"
  image: "Dockerfile"
  branding:
  icon: "mic"
  color: "purple"
  ```

- Stage and commit the changes
- Push the changes to GitHub

### Step 4: Start your workflow file

- Create a file titled *`.github/workflows/main.yml`*
- Inside the file, paste

  ```json
  name: A workflow for my Hello World file
  on: push
  ```

- Stage and commit the changes
- Push the changes to GitHub

### Step 5: Run an action from your workflow file

- As a part of this branch and pull request, edit *`.github/workflows/main.yml`* to append the following content:

  ```json
  jobs:
    build:
      name: Hello world action
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v1
        - uses: ./action-a
          with:
            MY_NAME: "Mona"
  ```

- Stage and commit the changes
- Push the changes to GitHub

### Step 6: Trigger the workflow

- Go to the repository on ***GitHub***
- Navigate to

  ```json
  Actions -> 'Added action to run' -> 'Hello world action' -> 'Run /./action-a'
  ```

- At the bottom of the stdout, you should see the string "Hello world my name is Mona"

### Step 7: Incorporate the workflow

- Merge this pull request
- Delete your branch

## Resources

- [GitHub Actions: Hello World course](https://lab.github.com/githubtraining/github-actions:-hello-world)
- [Github Actions documentation](https://docs.github.com/en/actions/learn-github-actions)
- [Github Actions marketplace](https://github.com/marketplace?type=actions)
- [Official Actions community](https://github.com/actions)
- [awesome-actions repository](https://github.com/sdras/awesome-actions)
- [Github Actions Tutorial video by Fireship](https://youtu.be/eB0nUzAI7M8)