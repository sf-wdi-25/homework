# Homework submission

Homework will be turned in to your fork of this repository daily.

## Setup Instructions

To set up your initial homework repository follow these instructions.  You should only need to do this once.  
Note in the below:
- **GIT-USER-NAME** should be replaced with your actual git user name (must be exact)
- **YOUR NAME** should be your actual name.
- **CLONE URL FROM GITHUB** this URL is in a small box on the right-hand side of the main page of each Github Repository.  Copy it and replace this text.

### Fork & Clone
1. Using the github website, fork this repo to create a copy of it on your github account.
2. Clone the forked repo from your github account onto your computer inside your `dev/` directory.  The **clone URL** is in a small text-box on the right-side of a repository's main page.
  ```bash
  cd ~/dev

  git clone {{**CLONE URL FROM GITHUB**}}
  ```
  Note: if you don't have a `dev` directory yet, you may need to create it: `mkdir ~/dev`.
3. `cd` into the newly cloned repo on your computer.
4. Make a copy of the directory template using your github username as the new name.
   ```bash
   cp -a zz_template **GIT-USER-NAME**

   git add .

   git commit -m "created my directory"
   ```
5. `cd **GIT-USER-NAME**`
6.  Change Directories into today's directory.  For example, if today is Tuesday
  ```bash
  cd week-01

  cd day-02
  ```
9. `echo "**YOUR NAME**'s Homework repo" > README.md` to set up your repo's README
8. `git add README.md` to stage your change.
9. `git commit -m "first day"` to have git save your changes.
10. `git push origin master` to put your changes up on github!

Next go on and submit this homework following the below instructions:


## Submit homework

Each day you will submit your homework by doing the following from within your homework repo on your computer:

* Copy any required files into the current week and day of your homework repo directory.
* For each file you need to include: `git add **FILENAME**` to stage your changes.
* `git status` to make sure you've selected the right files.
* `git commit -m "homework commit"` to have git save the changes -- feel free to add to the commit message if you'd like.
* `git push origin master` to put the changes up on github.
* Go to your homework repo's page on your account on `github.com`.
* Create a pull request according to the guidelines below.
* Note that if your previous Pull Request (PR) has not yet been merged, you won't be able to create a new one.  The old one will be automatically updated since it's on the same branch.


### Pull request details

(Must be in this format)

**Title:** `w##d##`

Replace ## with week and day number (eg w01d02  = homework for week 1 day 2)

**Message:**

```
comfort: #
completeness: #

Message about your experience goes here
```

Replace the `#`s next to comfort and completness with a number (1 - 5) to represent how comfortable you are with the topic and how much of the assignment you were able to complete.  A 1 is the lowest (least comfortable / very little complete), and a 5 is the highest (most comfortable / fully complete).

### Cloning other repos.
Throughout this course you'll be asked to clone many other repositories (repos).  When you do so, make sure you first `cd ~/dev`.  If you run `git clone` while inside of another repository, or if you copy one repository inside of another it will create a nested repo.  We cannot easily work with or see the files in nested repos.  

# Command Glossary

* `cd homework/week01` = change directories into the week01 directory in the homework directory.
* `cd ~/dev` = change directories to your dev directory in your home directory.  `~` is a shortcut for your home directory.
* `cp -a from_dir to_dir` = copy everything from `from_dir` to `to_dir`
* `git status` = check which files are changed (red) or changed & staged (green).  Learner's tip: Do this before and after every git command until you are familiar with it.
* `git add solution.md` = stage a change for git.  Staged changes can be committed.
* `git commit -m "completed exercise 2"` = Commit the currently staged changes to git and set the commit-message.
* `git push origin master` = push the commits on branch `master` to the remote `origin`.  Origin is often on github.
