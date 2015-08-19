BASENAME=dissertation
NAME=dissertation.tex
pdflatex $NAME
bibtex $NAME
makeglossaries $BASENAME
pdflatex $NAME
pdflatex $NAME
