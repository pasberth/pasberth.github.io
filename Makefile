pasberth.github.io: \
	pasberth.github.io/index.html \
	pasberth.github.io/readme \
	pasberth.github.io/read \
	pasberth.github.io/diary

pasberth.github.io/index.html: css/main.css index.adoc
	asciidoctor index.adoc -o pasberth.github.io/index.html

pasberth.github.io/readme: css/main.css README.adoc
	mkdir -p  pasberth.github.io/readme
	asciidoctor README.adoc -o pasberth.github.io/readme/index.html

pasberth.github.io/read: css/main.css read.adoc
	mkdir -p  pasberth.github.io/read
	asciidoctor read.adoc -o pasberth.github.io/read/index.html

pasberth.github.io/diary: css/main.css diary.adoc
	mkdir -p  pasberth.github.io/diary
	asciidoctor diary.adoc -o pasberth.github.io/diary/index.html

css/main.css: scss/main.scss
	sass --unix-newlines \
		--scss \
		-I`ruby -rcompass -e 'puts Compass.base_directory'`/frameworks/compass/stylesheets/ \
		scss/main.scss \
		css/main.css