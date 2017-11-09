<?php
include("./meta.html");
?>
   
   <body id="mark">
<?php
include("./head.html");
?>

   <div id="container">
        <div id="flash">
             <video id="video" width="640"  autoplay="autoplay" controls="controls">
                    <source id="source" src="./movs/bijlme.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
             </video>
	</div>

<?php
include("./strip.php");
?>
  
  </div>



<?php
include("./footer.html");
?>

<script  src="strip.js"></script>

   </body>
</html>

