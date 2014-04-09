.SECONDEXPANSION:

DESTDIR=pasberth.github.io
PARADOCS=./paradocs/dist/build/paradocs/paradocs

$(DESTDIR)/index.html: src/index.pdoc
	mkdir -p $(DESTDIR)
	$(PARADOCS) src/index.pdoc > $(DESTDIR)/index.html

$(DESTDIR)/readme/index.html: src/readme/index.pdoc
	mkdir -p $(DESTDIR)/readme
	$(PARADOCS) src/readme/index.pdoc > $(DESTDIR)/readme/index.html

$(DESTDIR)/read/index.html: src/read/index.pdoc
	mkdir -p $(DESTDIR)/read
	$(PARADOCS) src/read/index.pdoc > $(DESTDIR)/read/index.html

$(DESTDIR)/blog/index.html: src/blog/index.pdoc
	mkdir -p $(DESTDIR)/blog
	$(PARADOCS) src/blog/index.pdoc > $(DESTDIR)/blog/index.html

$(DESTDIR)/blog/use-asciidoctor/index.html: src/blog/use-asciidoctor/index.pdoc
	mkdir -p $(DESTDIR)/blog/use-asciidoctor
	$(PARADOCS) src/blog/use-asciidoctor/index.pdoc > $(DESTDIR)/blog/use-asciidoctor/index.html

$(DESTDIR)/%/raw: $$(shell find src/%/static -not -type d)
	rm -rf $@
	cp -R $(patsubst $(DESTDIR)/%/raw, src/%/static, $@) $@

$(DESTDIR)/css/main.css: scss/main.scss
	mkdir -p $(DESTDIR)/css
	sass --unix-newlines \
		--scss \
		-I`ruby -rcompass -e 'puts Compass.base_directory'`/frameworks/compass/stylesheets/ \
		scss/main.scss \
		$(DESTDIR)/css/main.css