function toogleMode() {
    console.log('hello')
    
    const html = document.documentElement
    const btnTheme = document.querySelector('.btnTheme')
    if(html.classList.contains('light')){
        html.classList.remove('light')
        btnTheme.style.transform = 'translate(0%, -50%)';
       
        
        // right: 0;
        // left: initial;
    }else{
        html.classList.add('light')
        btnTheme.style.transform = 'translate(100%, -50%)';
        //  left: 0;
    }
}
