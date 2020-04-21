# -JS-Tab-JS
Переключатели Табов на Нативном JavaScript/Tab Switchers on Native JavaScript

This is the parent of the click switch.

bodyTabs = document.querySelector('.info-header') 





These are the tabs that will be clicked.

tabs = document.querySelectorAll('.info-header-tab')





Content that will pop up

contentTabs = document.querySelectorAll('.info-tabcontent')





func hideTabsContent(a, b) 

Function that hides all content leaving only the first tab
        It takes two parameters.
        a - allows you to substitute the number from which the cycle will begin to hide the content of tabs
        b - How many underlined tabs will there be

func showTabsContent(b) 

Function thanks to which a tab will appear when clicked
        b - index of content and the tab itself





bodyTabs.addEventListener('click', function (event) 

We hang event delegations




if(target && target.classList.contains('info-header-tab')) 

We track that the click was just for the child




if(target == tabs[i]) 
Check Index Match


