//** working with dom */
<html>
  <body>
    <div id ="demo">
      <p>some text</p>
      <p>some other text</p>
    </div>

    <script>
     var a = document.getElementById("demo");
     var arr = a.childNodes;
     for(var x=0;x<arr.length;x++) {
       arr[x].innerHTML = "new text";
     }
    </script>

  </body>
</html>

//**changing styles */
<div id="demo" style="width:200px">some text</div>
<script>
  var x = document.getElementById("demo");
  x.style.color = "6600FF";
  x.style.width = "100px";
</script>