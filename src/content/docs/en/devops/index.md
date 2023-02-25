---
title: "DevOps"
description: "This section contains notes on DevOps."
---

## Concepts

- ### Continuous Integration

  ***Continuous Integration*** (***CI***) is a cornerstone of modern software development.

  ***Continuous Integration***, in its simplest form, involves a tool that monitors your version control system for changes. Whenever a change is detected, this tool automatically compiles and tests your application.

  If something goes wrong, the tool immediately notifies the developers so that they can fix the issue immediately.

  Basically, ***Continuous Integration*** is about reducing risk by providing faster feedback. First and foremost, it is designed to help identify and fix integration and regression issues faster, resulting in smoother, quicker delivery, and fewer bugs.

- ### Continuous Delivery

  ***Continuous Delivery*** is an extension of ***Continuous Integration*** since it automatically deploys all code changes to a testing and/or production environment after the build stage.

  In other words, on top of automated testing, you have an automated release process and you can deploy your application any time by clicking a button.

- ### Continuous Deployment

  ***Continuous Deployment*** is ***Continuous Delivery*** but better. With this practice, there's no human intervention, and only a failed test will prevent a new change to be deployed to production.

  With ***Continuous Deployment***, there is no *Release Day* anymore. Developers can focus on building software, and they see their work go live minutes after they've finished working on it.

## DevOps tools

- #### [Jenkins](./devops/jenkins)
- #### [GitHub Actions](./devops/github-actions)

## Resources

- [What is DevOps?](https://aws.amazon.com/devops/what-is-devops/)
- [Fuel Growth CI/CD book](https://about.gitlab.com/resources/ebook-fuel-growth-cicd/)
- [Continuous Integration vs. Continuous Delivery vs. Continuous Deployment by Sten Pittet](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)
