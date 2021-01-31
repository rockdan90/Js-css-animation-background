    var lFollowX:number=0,
        lFollowY:number=0,
        x:number=0,
        y:number=0,
        friction:number = 1/30;

        function moveBackground() {
            x+=(lFollowX-x)*friction;
            y+=(lFollowX-y)*friction;

            var translate:string = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

            document.getElementById("contenedor-imagen").setAttribute("style",`-webkit-transform:${translate}`);
            document.getElementById("contenedor-imagen").setAttribute("style",`-moz-transform:${translate}`);
            document.getElementById("contenedor-imagen").setAttribute("style",`transform:${translate}`);
            

            window.requestAnimationFrame(moveBackground);
        }

        onmousemove = (e: MouseEvent) =>{
            var lMouseX:number = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
            var lMouseY:number = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
            lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
            lFollowY = (10 * lMouseY) / 100;
        }

        moveBackground();
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36251023-1']);
        _gaq.push(['_setDomainName', 'jqueryscript.net']);
        _gaq.push(['_trackPageview']);