# simple-tools-for-research
This respository contains simple tools I use for research workflow. Your mileage may vary. 

- `split-pdf.py` - This is a simple python function that accepts a pdf and splits it into individual pages, indexed by numbers. For instance, if you feed it the pdf titled `experiment-design.pdf`, which is 5 pages long, it will generate 5 pdfs in the same directory titled `experiment-design-1.pdf`, `experiment-design-2.pdf`, etc. This is useful for presenting experiment design visualizations in a presentation; I first create the experiment design visualization in Google Slides, have parts of the design flow populate sequentially, and then split using split-pdf.py to save a few minutes of manually extracting the design. Requires having installed the command-line utility `split-pdf`.  
- `split-pdf.lisp` - emacs lisp code that does the same as the above. Callable via `M-x-split-pdf`, if added to your emacs preferences. 

