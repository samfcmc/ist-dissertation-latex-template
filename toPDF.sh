NAME=dissertation.tex
pdflatex $NAME
bibtex $NAME
makeglossaries dissertation
pdflatex $NAME
pdflatex $NAME
sh clean.sh
