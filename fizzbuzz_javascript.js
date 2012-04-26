<html>
<body>

<script type="text/javascript">

for (i=1; i<=100; i++) { 
document.write("<br />");
  
if (i % 3 === 0 && i % 5 === 0) {
      document.write("FizzBuzz"); 
    
} else if ( i % 3 === 0 ) { 
    document.write("Fizz");

} else if (i % 5 === 0) {
    document.write ("Buzz");
        
} else  
  {document.write(i);
  }
}

</script>


</body>
</html>
