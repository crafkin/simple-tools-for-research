# simple-tools-for-research
This respository contains simple tools I use for research workflow. Your mileage may vary. 


## Splitting PDFs 
When presenting busy experiment design visualizations in a presentation, it is useful to have the slides populate sequentially. I first create the design visualization in Powerpoint or Google Slides. Then I create different slides that gradually reveal the whole design visualization by deleting elements and saving them as new slides. Then I export to a PDF. The PDF has several pages. It is tedious to manually extract each page and save as a new PDF. The simple command-line utility `split-pdf` can be used to do that for you. You can use python (say) feed a pdf into the utility, which will automatically splits the pdf into individual pages, indexed by numbers. For instance, if you feed it the pdf titled `experiment-design.pdf`, which is 5 pages long, it will generate 5 pdfs in the same directory titled `experiment-design-1.pdf`, `experiment-design-2.pdf`, etc.

- `split-pdf.py`: Simple python implementation. 
- `split-pdf.lisp`: Emacs lisp implementation. Callable via `M-x-split-pdf`, if added to your emacs preferences. 

## Iterating through graphics on Beamer
Beamer is smart enough to handle for loops. This is useful when presenting any visualization that gradually appears. It's better to use for loops, rather than copy-paste and changing the suffix at the end of the pdf names, since doing that can introduce errors.
- iterate-visualization-example.tex: Simple minimal working example. 
