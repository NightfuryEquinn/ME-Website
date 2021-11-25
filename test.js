function scrollFunction() {
    if (document.documentElement.scrollTop < 200) {
        document.getElementsByClassName('first')[0].style.display = 'block';
        document.getElementsByClassName('second')[0].style.display = 'none';
    } else if (document.documentElement.scrollTop < 400) {
        document.getElementsByClassName('first')[0].style.display = 'none';
        document.getElementsByClassName('second')[0].style.display = 'block';
    }
}

window.onscroll = scrollFunction;