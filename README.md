# simple-tools-for-research
This respository contains simple tools I use for research workflow. Your mileage may vary! 

## Qualtrics
I have some simple Qualtrics Javascript hacks for use in surveys [here](q-js/README.md). And [here](q-js/checklist.md) is a short checklist to make sure I'm not forgetting anything before launching a Qualtrics survey. 

## Splitting PDFs 
When presenting busy experiment design visualizations in a presentation, it is useful to have the visualization populate sequentially. I first create the design visualization in Powerpoint or Google Slides. Then I create different slides that gradually reveal the whole design visualization by deleting elements and saving them as new slides. Then I export to a PDF. 

The PDF has several pages. It is tedious to manually extract each page and save as a new PDF. The purpose of the below code is to use the simple command-line utility `split-pdf` to split the pdf and rename each page as a separate pdf. You can use python (say) to feed a pdf into the utility, which will automatically split the pdf into individual pages, indexed by numbers. For instance, if you input the pdf titled `experiment-design.pdf`, which is 5 pages long, it will generate 5 pdfs in the same directory titled `experiment-design-1.pdf`, `experiment-design-2.pdf`, ..., `experiment-design-5.pdf` in one line of code, saving you a few minutes. 

The below code requires having installed `split-pdf`, via `brew install split-pdf`. They just call the utility. 

- [Simple python implementation](split-pdf.py). 
- [Emacs lisp implementation](split-pdf.lisp). Callable via `M-x split-pdf`, if added to your emacs config. 

## Iterating through graphics on Beamer
Beamer is smart enough to handle for loops. This is useful when presenting any graphic or figure that gradually appears. It's better to use for loops, rather than copy-paste and changing the suffix at the end of the pdf names, since doing that can introduce errors.
- [Simple minimal working example](iterate-visualization-example.tex). 

## Uninformative Git
I use Git to sync between Overleaf and code on the server. Any minor
change in Overleaf requires that I enter `git pull origin master`, `git commit
-am`, and then `git push origin master` to push a new figure that Overleaf can see. I
don't need informative comments for this process and want to do it in one line. I defined the aliases `git
pp` and `git ppu` [here](gitconfig) that make this a one-step
process. *Warning: the only Git comment for pushing it will be "update," so use at your
own risk.* 
- Requires that your main branch be called `main` 
- `git ppu` pulls and then pushes
- If there is nothing new to pull from the other side, `git ppu` breaks. Just run `git
  pp`. 
- Also defines the aliases: (i) `git st` for `git status`, and (ii) `git ci` for
  `git commit -am`, which adds anything that has changed and has
  already been committed. 
  

