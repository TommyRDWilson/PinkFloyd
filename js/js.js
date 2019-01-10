// Generate albums for discography
function GenerateAlbums()
{
   //Array of album names
   var albums = ["piper","saucerful","more","ummagumma","atom","meddle",
   "obscured","dark","wish","animals","wall","final","momentary","delicate","division","pulse","endless"];
   var name;
   //Loop through array
   for (i=0; i < albums.length; i++)
   {
      name = albums[i];
      // Image = html code with album name
      var image = '<div class = "blur"><a href="discog\\'+name+".html"+'"><img style = "float: left;"src="media\\albumartworks\\'+name+".jpg"+'" class = "album"></a></div>';
      // Add to site
      document.getElementById('discog').innerHTML = (document.getElementById('discog').innerHTML + image);
   }
}

function GenerateAlbumsSmall()
{
   var albums = ["piper","saucerful","more","ummagumma","atom","meddle",
   "obscured","dark","wish","animals","wall","final","momentary","delicate","division","pulse","endless"];
   var name;
   for (i=0; i < albums.length; i++)
   {
      name = albums[i];
      var image = '<div class = "blur"><a href="'+name+".html"+'"><img style = "float: left; height: 170px; width: 170px;"src="../media\\albumartworks\\'+name+".jpg"+'" class = "album"></a></div>';
      document.getElementById('discog').innerHTML = (document.getElementById('discog').innerHTML + image);
   }
}
// Add <br> tags for background
function Breakpoint(lines)
{
   // Begin loop
   for (x=0; x< lines; x++)
   {
      //Add <br>
      document.getElementById('discog').innerHTML = (document.getElementById('discog').innerHTML + '<br>');
   }
}

// Gallery
function upDate(previewPic){
   // On mouse over, update picture
   var image = document.getElementById("image");
   image.style.background = "url(" + previewPic.src + ") no-repeat center";

   // Display ALT text over image
   image.innerHTML = previewPic.alt;
}

function unDo(){
   // Mouse off, remove image
   var image = document.getElementById("image");
   image.style.background = "#FFFFFF";
   // Remove text
   image.innerHTML = "";
}

// Store
function showinfo(info){
   // On mouse over, show product inferior
   var item = document.getElementById("item");
   item.innerHTML = info.alt;
}
function hideinfo(){
   var item = document.getElementById("item");
   item.innerHTML = "";
}
function dropdownimage(select) {
    selectedvalue=select.value;
    document.getElementById("productimage").src = selectedvalue;
}
