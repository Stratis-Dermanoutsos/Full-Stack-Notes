# Markdown

- [Notes](#markdown---notes)
- [Resources](#markdown---resources)

## Markdown - Notes

***Markdown*** is a lightweight *markup language* for creating formatted text using a plain-text editor.

> Actually, this whole repository is built on ***Markdown***.

Every developer has to write documentations, guides and other text material for their projects at some point.

Markdown exists to make this process very easy and quick.

### Where markdown is used

- Documentation
- Contributing guidelines
- Github README
- Blog posts
- Written assignments
- Notes
- ...and many more

### Headings

```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

### Text

```markdown
*italic text*
**bold text**
***bold & italic text***
~~Strikethrough text~~
```

### Blockquotes

```markdown
> This is a blokquote
```

### Horizontal rule

```markdown
---
```

### Lists

```markdown
- First element of unordered list
- Second element of unordered list

1. First element of ordered list
2. Second element of ordered list

- [x] First element of task list
- [ ] Second element of task list
```

### Link

```markdown
[text](URL)
```

### Image

```markdown
![alt](URL)
```

### Table

```markdown
| Aligned left | Aligned center | Aligned Right |
| :-- | :-: | --: |
| R1-C1 | R1-C2 | ... |
| R2-C1 | R2-C2 | ... |
| R3-C1 | R3-C2 | ... |
```

### Code

```markdown
`This is inline code`
```

\`\`\`language

This is code block

\`\`\`

> All of the above examples are writen in code blocks.
>
> This is a blockquote BTW.

### Diagrams

```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```

To create this, you need to take 2 steps:

- Create a code block with *mermaid* as the language.
- Paste the following as content

  ```text
    graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
  ```

## Markdown - Resources

- [Markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/)
- [Markdoc](https://markdoc.io)
- [README.so](https://readme.so/editor)
- [Include diagrams in your Markdown files with Mermaid](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/)
- [Mermaid cheatsheet](https://jojozhuang.github.io/tutorial/mermaid-cheat-sheet/)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#markdown)
