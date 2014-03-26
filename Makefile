.SECONDEXPANSION:

ASCIIDOCTOR=asciidoctor -a stylesheet=css/main.css -a docinfo1 -a revision=`git rev-parse default`

pasberth.github.io: \
	$(addsuffix .html, $(subst src, pasberth.github.io, $(basename $(shell find src -name index.adoc)))) \
	$(patsubst src/%/static, pasberth.github.io/%/raw, $(shell find src -name static)) \
	pasberth.github.io/.nojekyll

pasberth.github.io/index.html: src/index.adoc css/main.css
	$(ASCIIDOCTOR) src/index.adoc -o $@

pasberth.github.io/%/index.html: src/%/index.adoc css/main.css src/%/docinfo.html src/%/docinfo-footer.html $$(shell find src/%/static -not -type d 2>/dev/null)
	mkdir -p `dirname $@`
	$(ASCIIDOCTOR) $(patsubst pasberth.github.io/%/index.html, src/%/index.adoc, $@) -o $@

pasberth.github.io/%/raw: $$(shell find src/%/static -not -type d)
	rm -rf $@
	cp -R $(patsubst pasberth.github.io/%/raw, src/%/static, $@) $@

src/%/docinfo.html: docinfo/docinfo.html
	cp $^ $@

src/%/docinfo-footer.html: docinfo/docinfo-footer.html
	cp $^ $@

pasberth.github.io/.nojekyll:
	touch pasberth.github.io/.nojekyll

css/main.css: scss/main.scss scss/_pygments-css.scss
	mkdir -p css
	sass --unix-newlines \
		--scss \
		-I`ruby -rcompass -e 'puts Compass.base_directory'`/frameworks/compass/stylesheets/ \
		scss/main.scss \
		css/main.css