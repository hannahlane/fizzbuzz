<html>
<body>

<script type="text/javascript">

for (h=1; h<=100; h++) { 
    document.write("<br />");
  
if (h % 3 === 0 && h % 5 === 0) {
    document.write("FizzBuzz"); 
    
} else if (h % 3 === 0 ) { 
    document.write("Fizz");

} else if (h % 5 === 0) {
    document.write ("Buzz");
        
} else  
  {document.write(h);
  }
}

</script>


</body>
</html>
