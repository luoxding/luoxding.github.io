## LaTeX编辑应用

### Pandoc辅助



[Inputting multiple files in LaTeX](https://tex.stackexchange.com/questions/13921/inputting-multiple-files-in-latex)
[`bashful`](http://www.ctan.org/pkg/bashful)

```latex
\documentclass{minimal}
\usepackage{bashful}
\begin{document}
\bash[stdoutFile=inputs.tex]
{ shopt -s nullglob; for file in dir/*.tex; do echo "\\input{$file}"; done; } 
\END
\input{inputs.tex}
\end{document}
```

%%ghoul%%


无论怎么做，都不可能让所有人都满意，做自己就好

