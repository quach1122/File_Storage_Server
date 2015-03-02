/**
 * Created by andy on 2/13/2015.
 */
 document.addEventListener('DOMContentLoaded', function () {
     console.log('Hello World');
        var btn = document.querySelector('button').addEventListener('click',function(){
           var input = document.querySelector('input[type="file"]').files;
            var files = Array.prototype.slice.call(input);
            console.log(files);

            var formdata = new FormData();
            formdata.append('name','Andy');
            formdata.append('file1',files[0]);

            var xhr = new XMLHttpRequest();
            xhr.open('POST','/files');
            xhr.setRequestHeader('accept','application/json');
            xhr.addEventListener('readystatechange',function(){
               if(xhr.readyState === 4 && xhr.status === 200){
                   var obj = JSON.parse(xhr.responseText);
                   console.log('obj ' +obj);
               }
            });
            xhr.send(formdata);
        });
 });