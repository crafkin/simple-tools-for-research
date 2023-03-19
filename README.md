# simple-tools-for-research
This respository contains simple tools I use for research workflow. Your mileage may vary. 

## JS code for Qualtrics
I have a number of Qualtrics Javascript hacks for use in surveys. Extended details (here)[q-js/README.md]. 

Thanks to my collaborators (especially Jenna Anders) and ChatGPT for these. 

## Splitting PDFs 
When presenting busy experiment design visualizations in a presentation, it is useful to have the visualization populate sequentially. I first create the design visualization in Powerpoint or Google Slides. Then I create different slides that gradually reveal the whole design visualization by deleting elements and saving them as new slides. Then I export to a PDF. 

The PDF has several pages. It is tedious to manually extract each page and save as a new PDF. The purpose of the below code is to use the simple command-line utility `split-pdf` to split the pdf and rename each page as a separate pdf. You can use python (say) to feed a pdf into the utility, which will automatically split the pdf into individual pages, indexed by numbers. For instance, if you input the pdf titled `experiment-design.pdf`, which is 5 pages long, it will generate 5 pdfs in the same directory titled `experiment-design-1.pdf`, `experiment-design-2.pdf`, ..., `experiment-design-5.pdf`. 

The below code requires having installed `split-pdf`; they just call the utility. 

- [Simple python implementation](split-pdf.py). 
- [Emacs lisp implementation](split-pdf.lisp). Callable via `M-x-split-pdf`, if added to your emacs preferences. 

## Iterating through graphics on Beamer
Beamer is smart enough to handle for loops. This is useful when presenting any graphic or figure that gradually appears. It's better to use for loops, rather than copy-paste and changing the suffix at the end of the pdf names, since doing that can introduce errors.
- [Simple minimal working example](iterate-visualization-example.tex). 
