var numbers=[11,4,58,93,104,98,71,9,5,4,22];
              var tmp;
              for(var i=0;i<numbers.length;i++){
                for (var j=i;j<numbers.length;j++) {
                  if(numbers[j]<numbers[i]){                 
                    tmp=numbers[i]
                    numbers[i]=numbers[j]
                    numbers[j]=tmp
                  }
                }
              }
              console.log(numbers)
              // aler('dddd');
