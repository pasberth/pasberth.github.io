ASCIIDOCTOR=asciidoctor -a revision=`git rev-parse default`

pasberth.github.io: \
	pasberth.github.io/index.html \
	pasberth.github.io/readme \
	pasberth.github.io/read \
	pasberth.github.io/diary

pasberth.github.io/index.html: css/main.css index.adoc docinfo.html docinfo-footer.html index-docinfo.html
	$(ASCIIDOCTOR) -a githubroute=blob -a path=index.adoc index.adoc -o pasberth.github.io/index.html

pasberth.github.io/readme: css/main.css README.adoc docinfo.html docinfo-footer.html
	mkdir -p  pasberth.github.io/readme
	$(ASCIIDOCTOR) -a githubroute=blob -a path=README.adoc README.adoc -o pasberth.github.io/readme/index.html

pasberth.github.io/read: css/main.css read.adoc docinfo.html docinfo-footer.html
	mkdir -p  pasberth.github.io/read
	$(ASCIIDOCTOR) -a githubroute=blob -a path=read.adoc read.adoc -o pasberth.github.io/read/index.html

pasberth.github.io/diary: css/main.css diary.adoc docinfo.html docinfo-footer.html
	mkdir -p  pasberth.github.io/diary
	$(ASCIIDOCTOR) -a githubroute=blob -a path=diary.adoc diary.adoc -o pasberth.github.io/diary/index.html

css/main.css: scss/main.scss
	sass --unix-newlines \
		--scss \
		-I`ruby -rcompass -e 'puts Compass.base_directory'`/frameworks/compass/stylesheets/ \
		scss/main.scss \
		css/main.css