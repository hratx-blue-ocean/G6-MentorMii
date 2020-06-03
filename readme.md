# Welcome to MentorMii!

Congratulations and welcome to your first day at Blue Ocean! We are literally an underwater agile software development company.

Let's begin our tour (don't blink!)...

### Trello Board

Trello Board: https://trello.com/b/3TULFMfA/blue-ocean-mentormii

How do you feel today? [![Build Status](https://travis-ci.com/hratx39-blue-ocean/deep-dive.svg?branch=master)](https://travis-ci.com/hratx39-blue-ocean/deep-dive)

By the end of this sprint, be sure to replace your readme and use this template as a guideline:
[Readme Template](https://github.com/hratx-blue-ocean/reading/blob/master/template-readme.md)

## Photos / Videos

## Get Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:9000]to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Contribution Guidelines

We expect our new software engineers to start contributing to our codebase immediately. That doesn't mean we want maverick manatees swimming wild and munching on whatever looks tastiest with no concern for what other herdmates are doing. That means:

1. No code shall be written except that which directly addresses a specific ticket.
2. If you unexpectedly need code which falls outside the scope of your ticket, write a new ticket which requires that code.
3. Blue Ocean is an agile workspace open to exploring any techniques which improve deliverable cycle speed. **We strongly encourage pair programming tickets with high point values.** Freeform collaboration between different teams on an as-needed basis is also encouraged.
4. All commit messages and pull request messages shall include the number of the ticket for which the code was written. That makes tracking the meaning behind changes easier over time.
5. If you have been working on something for several hours and you don't see an end soon in sight, double check the ticket parameters and make sure that you're still coloring within the lines. If that checks out, find a team member to talk with or work with about your ticket. Does it need to be broken into several smaller tickets? Is it too big to be worth working on at this stage of development? Are you approaching the ticket in a sane, process-driven way? Strongly consider pair programming the rest of the ticket if you check any of these boxes.
6. Each pull request will need to pass tests on Travis CI before it can be reviewed for acceptance.

## Git Workflow

   Used the git feature branch workflow for this project and used Trello to manage pending tasks, bugs and provide feedbac


kWe take version control very seriously here at Blue Ocean. You will be expected to:

1. Work on separate branches.
2. Commit often.
3. Write clear, concise, imperative-mood commit messages with leading ticket numbers. For example, "#21: Add list entry component".
4. Submit pull requests when looking to merge with the master branch.
5. **Always pull from master onto your working branch and fix conflicts before submitting a pull request to master.**
6. Use `git rebase` to create a linear commit history when creating a pull request. [See details here](https://www.atlassian.com/git/tutorials/merging-vs-rebasing "Merging v. Rebasing"). Additionally use squashing when you rebase to make commit history more readable.
7. Approve pull requests only if you did not write any of the code submitted for review.

[More git workflow information](https://docs.google.com/document/d/1Kuvpv0rs9He9YRmbB_XVOfNKtakjioRAOjEUaGTqFtU/edit?usp=sharing)

## Codebase Overview

The deep-dive codebase is broken into two major pieces: the client and the server. The codebase has three separate package.json files and you will need to validate existing scripts and write new ones which are able to easily move between the top layer of the repo and the two lower layers to help you manage your Node packages.

## Grading Tickets

We expect all of our software engineers to be capable of assessing the scope of a ticket and grade it on a point scale of difficulty where 1 point is small, 2 is a good size, 3 is large, 5 is huge, and anything above 5 needs to be broken into multiple tickets if possible. This will be tremendously helpful when assigning team members to tickets.

Here are some good practices for arriving at a specific grade when approaching a new topic. You do not need to be familiar with all of these techniques; pick one that works for you and matches with what the rest of your group would pick and stick to it.

## Developer Operations

Now that you're at a real company with many people who might all need simultaneous but separate access to a single deployed instance, it's time to think about SSH operational security and how to manage multiple users through AWS. Not every member of your team will need access to either AWS credentials or to an SSH key-pair (such a broad distribution can create chaos) but you shoud avoid bottlenecking by wisely distributing access across team members.

1. [Consult this page](https://docs.aws.amazon.com/IAM/latest/UserGuide/console.html) about setting up permissions from primary AWS account. You will need to set up Identity and Access Management on the primary account and then distribute login credentials to those members of your team who need them. **You should never share your personal credentials with anyone, including other members of your team.**
2. For SSH access, [review this page](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html). Each team member with an SSH key will be responsible for its security and should review this article on best practices for setting up secure access from your local machine. **You should never share your personal credentials with anyone, including other members of your team.**
3. You will use Travis CI to run tests, compare branches, and generally manage the quality of the code. [Take a look at their docs here](https://docs.travis-ci.com/user/for-beginners/).

// i put these in the fec, put in order as you want

### Challenges

<ul>
<li> Implementing unfamiliar technologies like bootstrap</li>
<li> Integrating server routes while using React router</li>
<li> Implementing a CSS naming convention to prevent clashes</li>  
  <li> Creating a proxy server with create React-App</li>   
</ul>

### Learnings

<ul>
<li> Developing in a time constrained enviroment</li>
<li> Creating a application based on user requirments</li>
<li> Producing an MVP as soon as possible in order to dedicate more time to proper placement and integrate with other applications</li>
</ul>

## Acknowledgments

<ul>
  <li>SEIRS for their time and advice</li>
  <li> </li>
  <li> </li>
 </ul>

## Co-Authors

<ul>
  <li>Marc Rodriguez</li>
  <li>Dalton SoHoo </li>
  <li>Paul Prokopy</li>
  <li>Michael Gonzales</li>
  <li>Tyler Hicks</li>
  <li>Emry Mitchell</li>
 </ul>

## Front-End

React, React Bootstrap

## Back-End

Node.js, Express.js, MySQL
