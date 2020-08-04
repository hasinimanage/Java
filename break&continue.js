for (i = 0; i <= 10; i++) {
    if (i == 5) {
      break; 
    }
    document.write(i + "<br />");
 }
 //output
//  0
//  1
//  2
//  3
//  4

for (i = 0; i <= 10; i++) {
    if (i == 5) {
       continue; 
    }
    document.write(i + "<br />");
 }
 //output (0,1,2,.......,10)