
   
        function color() {
            var i = document.getElementsByClassName("input");
            for (var x = 0; x < i.length; x++) {
                if (i[x].style.backgroundColor == "black") {
                    i[x].style.backgroundColor = "white";
                    i[x].style.color = "black";
                }
                else {
                    i[x].style.backgroundColor = "black";
                    i[x].style.color = "white";
                }

            }

        }

    