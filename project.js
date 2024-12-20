
        // Set header height to full screen on page load
        $(document).ready(function(){
            $('.header').height($(window).height());
        });

        var ready = (callback) => {
            if (document.readyState != "loading") callback();
            else document.addEventListener("DOMContentLoaded", callback);
        };

        ready(() => {
            const headerElement = document.querySelector(".header");
            if (headerElement) {
                headerElement.style.height = window.innerHeight + "px";
            }
        });
   