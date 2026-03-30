document.addEventListener('DOMContentLoaded', () => {
    console.log('Trang web của Lê Trung Nguyên đã load xong!');
    if(window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        alert('Chào mừng bạn đến với Bài kiểm tra giữa kỳ của Lê Trung Nguyên!');
    }
});
