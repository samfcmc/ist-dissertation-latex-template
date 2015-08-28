# ist-dissertation-latex-template
Master dissertation Latex template for [Instituto Superior Técnico](http://tecnico.ulisboa.pt/) (Portugal).
If you are a student in IST and you want to write your dissertation using Latex, this can be a good starting point.
This template tries to follow this school's specification that you can get here:
* [Dissertation guidelines](http://da.tecnico.ulisboa.pt/files/sites/33/guia-preparacao-dissertacao-13_14_2.pdf)

I cannot guarantee you that this template is 100% right.
I recommend that you talk to your advisors to check it first.
I am not responsible for something going wrong, if you choose to use this template.

Focus on your thesis and not on the template.

## Requirements:
* Latex: This will depend on your Operating System. You have to check how to install all Latex packages for your OS.
* Any text editor (I use [Atom](https://atom.io/))
* Latex plugins for your text editor (this is optional, but it will make your life easier).
I use the following ones for Atom:
  * [language-latex](https://atom.io/packages/language-latex)
  * [latex](https://atom.io/packages/latex)
  * [latexer](https://atom.io/packages/latexer)

## Usage
To use this template, you can simply fork this repo and start working on it.

If you don't want to fork, you can download a zip of the repo.

Once you have a copy of this repo, you can start creating sections, add a bibliography, etc.

### Variables
Some values, for instance, the dissertation's title, are defined in a file called ```variables.tex```.
For instance, if you want to change the title, open this file and look for title's definition:
```latex
...
\newcommand {\Title} {My Title}
```
Replace "My Title" by your actual title.

You can also add your own variables.
To define a new variable all you need to do is just to add a new line like this:
```latex
\newcommand {\VariableName} {Value}
```
Replace "VariableName" by its name and "Value" by the actual value.
To use this variable in your document:
```latex
\VariableName
```

If you know how to define macros in Latex you can define as many as you want and anyway you want in this file.

### Cover
The cover file (```cover.tex```) has information such as title, supervisors, examination committee, etc.
This file has the cover's layout.
The values of title, subtitle, etc are defined in a file called ```variables.tex```.
Edit that file according to what makes sense in your dissertation.

### Abstract
According to the specification you have to write the abstract in english and portuguese.
The english is located at ```abstract/abstract-en.tex``` and the portuguese ```abstract/abstract-pt.tex```.
Just edit those files.

### Acknowledgments
Along the way, some people helped you.
If you want to show them some love, this is the right place for it.
Open the file ```acknowledgments/acknowledgments.tex```and say thanks to everyone.

Anyway, this is optional. If you don't want to have this on your dissertation, just open ```variables.tex``` file and put 0 as the value of the ```includeAcknowledgments``` definition:
```latex
...
% Include or not include acknowledgments
\def \includeAcknowledgments{0}
```

Also, it would be nice if you buy, at least, a beer to whoever supported you :)
(Including the one that provided you this awesome template)

### Chapters
Chapters are located at ```chapters```folder.
To create a new chapter, you first need to create a file in this folder.
The easiest way to do this, is to create a copy of ```chapters/new_chapter_template.tex``` file:
```
$ cp chapters/new_chapter_template.tex chapters/mychapter.tex
```

In the new file, change the section's title and label.

Now you just need to include this new chapter in the main file in ```chapters``` folder.
Open ```chapters/main.tex``` file and add the include for the new chapter

```latex
% Chapters
...
\include{chapters/mychapter}
...
```

Now get some inspiration and write its content.

### Images
Image files go to ```images``` directory.
Place your files here and include them in wherever makes sense.

### Bibliography
The bibliography is in a bib file located at ```bibliography/dissertation.bib```.
Put your bibliography there and cite it anywhere.

### Appendix
Appendix chapters are located at ```appendix```folder.
To create an appendix chapter, create a file in this folder. The easiest way is to copy the ```new_appendix_chapter_template.tex``` file.
```
$ cp appendix/new_appendix_chapter_template.tex appendix/mynewchapter.tex
```

Edit this file to set the chapter's title and create its content.

Now you have to include this new file in the main file (```appendix/main.tex```). Open it and include the new chapter's file below the appendix beginning
```latex
...
% Appendix chapters entry point
% Include the chapters below
...
\include{appendix/mynewchapter}
...
```
### Acronyms
Acronyms definitions are located in the ```acronyms``` directory.
To add a new acronym in your document you must define the new entry in the ```acronyms.tex``` file:
```latex
\newacronym{<label>}{<abbreviation>}{<full>}
```
To reference an acronym you can use
```latex
\gls{<label>}
```
to cite the acronym in the singular form, or
```latex
\glspl{<label>}
```
if you want to cite the acronym in the plural form.

### Glossary
Glossary definitions are located in the ```glossary``` directory.
To add a new term in the glossary of your document you must define the new entry in the ```glossary.tex``` file:
```latex
\newglossaryentry{<label>}{<settings>}
```
The most common settings of a glossary entry are the ```name```, ```description``` and ```symbol```, as illustrated in this example:
```latex
 \newglossaryentry{<label>}{ name={name},
                            description={description},
                            symbol={symbol}}
```
To reference a term defined in your glossary you can use the command ```\gls{<label>}``` to cite the term in the singular form, or ```\glspl{<label>}``` if you want to cite the term in the plural form. To cite the description or symbol of an entry you can use the ```\glsdesc{<label>}``` and ```\glssymbol{<label>}```.

Since this is not mandatory, by default, it is not being included. If you want to include it in your dissertation, just set the value of ```includeGlossary``` variable in ```variables.tex``` file to ```1```.
```latex
...
% Include or not include glossary
\def \includeGlossary{1}
```

## Compile
You have three ways to create the final pdf:

### Using the text editor
It depends on the text editor you are using.
If you are using atom and the latex plugin, just press
<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>B</kbd>

### Using the provided scripts
If you have the complete Latex environment installed, you can run the ```toPDF.sh``` script to generate the PDF (```dissertation.pdf```):
```
$ sh toPDF.sh
```

To clean all the mess (files generated by the compilation process), you can run ```clean.sh``` script:
```
$ sh clean.sh
```

### Using Grunt
Using Grunt is option, but if you choose to use these option you will make the development of you document much more efficient, since that each time that a ``.tex`` file is saved, the whole document is compiled again. The requirements to use Grunt are:

- [NodeJS](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Grunt-CLI](http://gruntjs.com/)

After install this components you need to change to the project's root directory and install
the project dependencies by running:
```
$ npm install
```
And then you already can run Grunt:
```
$ grunt
```
Now you can edit you LaTex document. When you save the changes, your document will be compiled automatically.

NOTE: If you are using grunt you must not delete the ```toPDF.sh``` and ```clean.sh``` because it uses those scripts.

### Using an online tool
If you don't want to install anything and just want to use an online editor you can also use this template.

For instance, [Overleaf](https://www.overleaf.com) is a latex online editor. You just need to create an account and import the files on this template to it.

You can use any other online latex editor, but it must support glossaries package, that is being used to generate the acronyms list.

## Contribute ;)
Thanks to [@mvpgomes](https://github.com/mvpgomes) that started this template and did most of the work.
I am just publishing it on github and improving its structure a bit.

If you notice that something is missing, you can open an issue and make a pull request.
Feel free to contribute :)
