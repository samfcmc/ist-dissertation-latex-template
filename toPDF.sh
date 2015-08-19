NAME=dissertation.tex
pdflatex $NAME
bibtex $NAME
pdflatex $NAME
pdflatex $NAME
sh clean.sh
