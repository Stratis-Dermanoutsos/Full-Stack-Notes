# Git

- **[Notes](#git---notes)**
- **[Resources](#git---resources)**

## Git - Notes

Useful commands:

- Initialize a repository

      git init
- Clone a remote repository

      git clone <remoteUrl>
- Stage files for commit

      git add <relativePathToFile> <relativePathToDirectory>
- Commit files

      git commit -m "Line 1 description" -m "Line 2 description"
- Add a remote repository

      git remote add <remoteName> <remoteUrl>
- Fetch remote changes

      git fetch <remoteName>
- Fetch and merges remote changes

      git pull <remoteName> <remoteBranch>
- Reset your local branch

      git reset [--hard]
- Create a new local branch

      git checkout -b <newBranch/Name>
      # or
      git switch -c <newBranch/Name>
- Push a local branch to a remote repository

      git push # current branch
      git push -u <remoteName> <branchName> # any branch
      git push --force # overwrite all changes
- Stash your uncommitted changes

      git stash [pop|drop]
- Rename a branch

      git branch -m <oldBranchName> <newBranchName> # local
      git branch -m <remoteName> :<oldBranchName> <newBranchName> # remote
- Show a commit log

      git log

## Git - Resources

- [Udemy course by Jad Khalili](https://www.udemy.com/share/101tpK2@PkdjVEtSSVIKdkRKBmJNfj4=/)
- [w3schools](https://www.w3schools.com/git/default.asp)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-2021#full-stack-roadmap-2021) or [Back to top](#git)