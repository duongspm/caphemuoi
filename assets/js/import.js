
function parts(rootDir, File) {
    $.ajax({
        url: rootDir + "library/" + File,
        cache: false,
        async: false,
        dataType: 'html',
        success: function (html) {
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}
