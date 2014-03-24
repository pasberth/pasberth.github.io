pasberth.github.io: pasberth.github.io/index.html pasberth.github.io/read

pasberth.github.io/index.html: css/main.css index.adoc
	asciidoctor index.adoc -o pasberth.github.io/index.html

pasberth.github.io/read: css/main.css read.adoc
	mkdir -p  pasberth.github.io/read
	asciidoctor read.adoc -o pasberth.github.io/read/index.html