---
title: "Git"
description: "This section contains notes on git."
---

## Useful commands

### Initialize a repository

```zsh
git init
```

### Clone a remote repository

```zsh
git clone <remoteUrl>
```

### Stage files for commit

```zsh
git add <relativePathToFile> <relativePathToDirectory>
```

### Commit files

```zsh
git commit -m "Line 1 description" -m "Line 2 description"
```

### Add a remote repository

```zsh
git remote add <remoteName> <remoteUrl>
```

### Fetch remote changes

```zsh
git fetch <remoteName>
```

### Fetch and merges remote changes

```zsh
git pull <remoteName> <remoteBranch>
```

### Reset your local branch

```zsh
git reset [--hard]
```

### Create a new local branch

```zsh
git checkout -b <newBranch/Name>
# or
git switch -c <newBranch/Name>
```

### Push a local branch to a remote repository

```zsh
git push # current branch

git push -u <remoteName> <branchName> # any branch

git push --force # overwrite all changes
```

### Stash your uncommitted changes

```zsh
git stash [pop|drop]
```

### Rename a branch

```zsh
git branch -m <oldBranchName> <newBranchName> # local

git branch -m <remoteName> :<oldBranchName> <newBranchName> # remote
```

### Show a commit log

```zsh
git log
```

## Resources

- [Udemy course by Jad Khalili](https://www.udemy.com/share/101tpK2@PkdjVEtSSVIKdkRKBmJNfj4=/)
- [Git for Professionals Tutorial by freeCodeCamp.org](https://youtu.be/Uszj_k0DGsg)
- [w3schools](https://www.w3schools.com/git/default.asp)
- [Connect git to GitHub](https://kbroman.org/github_tutorial/pages/first_time.html)
