NAME=dissertation.tex
pdflatex $NAME
bibtex $NAME
makeglossaries
pdflatex $NAME
pdflatex $NAME
sh clean.sh
