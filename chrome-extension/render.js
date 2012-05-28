
    var d = document,
        html = [];

    html.push('<!DOCTYPE html>');
    html.push('<html>');
    html.push('<head>');
    html.push('<meta charset="UTF-8">');
    html.push('<title>' + d.title + ' - Responsive test</title>');
    html.push('<script>window.resbook = {}</script>');
    html.push('</head>');
    html.push('<body>');
        html.push('<header>');
            html.push('<div class="close"><a href="#">&times;</a></div>');
            html.push('<div id="size"></div>');
            html.push('<div class="keyboard"><a href="#">I</a></div>');
            html.push('<div class="cssrefresh"><a href="#">I</a></div>');
            html.push('<div id="devices">');
                html.push('<a href="#" class="tablet-portrait"><span>Tablet Portrait</span></a>');
                html.push('<a href="#" class="tablet-landscape"><span>Tablet Landscape</span></a>');
                html.push('<a href="#" class="smartphone-landscape"><span>iPhone Landscape</span></a>');
                html.push('<a href="#" class="smartphone-portrait"><span>iPhone Portrait</span></a>');
                html.push('<a href="#" class="auto active"><span>Auto</span></a>');
            html.push('</div>');
        html.push('</header>');
        html.push('<section>');
            html.push('<div id="wrapper">');
                //html.push('<iframe src="' + d.URL + '" onLoad="resbook.changeUrl(this.contentWindow.location,this.contentDocument.title);"></iframe>');
                html.push('<iframe src="' + d.URL + '"></iframe>');
                html.push('<span class="keyboard-bg"></span>');
            html.push('</div>');
        html.push('</section>');
    html.push('</body>');
    html.push('</html>');
    d.write( html.join('') );


