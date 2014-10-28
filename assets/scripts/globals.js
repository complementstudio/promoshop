/*
    $("#videoHome").click(function () {
        $("#jquery_jplayer_1").jPlayer("pause");
    });

function popuponclick()
{
my_window = window.open("",
  "radio.html", "my window","status=1,width=300,height=200");
}

function closepopup()
{
	if(false == my_window.closed)
	{
	my_window.close();
	}
	else
	{
	alert('Window already closed!');
	}
}
*/


/*
    window.setTimeout(function () {
        if ($.cookie("playtime", { path: "/" }) != null && $.cookie("playtime", { path: "/" }) != "" && $.cookie("currentPlaylistItem", { path: "/" }) != null && $.cookie("playtime", { path: "/" }) != "") {
            playlist.play(parseFloat($.cookie("currentPlaylistItem", { path: "/" })) - 1);
            $("#jquery_jplayer_1").jPlayer("play", parseTimeStringToSeconds($.cookie("playtime", { path: "/" })));
            $(".jp-current-time").html($.cookie("playtime", { path: "/" }));

        }
        else {
            playlist.play();
        }
        musicCookieSaver();
    }, 1000, []);



});
function musicCookieSaver() {
    $.cookie("playtime", $(".jp-current-time").html(), { path: "/"});
    $.cookie("currentPlaylistItem", $(".jp-playlist-current div .jp-playlist-current").html(), { path: "/"});
    window.setTimeout(musicCookieSaver, 1000, []);
}
function parseTimeStringToSeconds(timeString) {
    var minutes = parseFloat(timeString.split(":")[0]);
    var seconds = parseFloat(timeString.split(":")[1]);
    return minutes * 60 + seconds;
}
*/
