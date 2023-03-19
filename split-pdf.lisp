(defun split-pdf (pdf-file)
  "Split the PDF file into individual pages."
  (interactive "fPDF file to split: ")
  (let* ((base-name (file-name-sans-extension pdf-file))
         (output-file-format (concat base-name "-%d.pdf")))
    (call-process "pdftk" nil nil nil pdf-file "burst" "output" output-file-format)))
