import subprocess
import os

def split_pdf(pdf_file):
    """Split the PDF file into individual pages."""
    base_name = os.path.splitext(pdf_file)[0]
    output_file_format = base_name + "-%d.pdf"
    subprocess.call(["pdftk", pdf_file, "burst", "output", output_file_format])

split_pdf('filename')
