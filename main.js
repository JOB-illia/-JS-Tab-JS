window.addEventListener('DOMContentLoaded', function () {
    'use strike';

    let bodyTabs = document.querySelector('.info-header'), // This is the parent of the click switch.
        tabs = document.querySelectorAll('.info-header-tab'), // These are the tabs that will be clicked.
        contentTabs = document.querySelectorAll('.info-tabcontent'); // Content that will pop up

    function hideTabsContent(a, c) { // Function that hides all content leaving only the first tab
        for (let i = a; i < contentTabs.length; i++){
            contentTabs[i].classList.remove('show');
            contentTabs[i].classList.add('hide');
        }
        for (let i = c; i < tabs.length; i++) {
            tabs[i].classList.remove('info-header-tab-active');
        }
    }
    hideTabsContent(1, 1);
    function showTabsContent(b) { // Function thanks to which a tab will appear when clicked
        if(contentTabs[b].classList.contains('hide')){
            contentTabs[b].classList.add('show');
            contentTabs[b].classList.remove('hide');
            tabs[b].classList.add('info-header-tab-active');
        }
    }
    bodyTabs.addEventListener('click', function (event) { // We hang event delegations
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) { // We track that the click was just for the child
            for (let i = 0; i < tabs.length; i++){
                if(target == tabs[i]) { // Check Index Match
                    hideTabsContent(0, 0); // Hide all content
                    showTabsContent(i); // Show tab
                    break;
                }
            }
        }
    })
});