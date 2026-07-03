function publishSite() {
    // إخفاء الشاشات وإظهار شاشة النشر
    document.getElementById('main-interface').style.display = 'none';
    document.getElementById('publish-screen').style.display = 'block';
    
    // هذا الرابط هو الذي سيكون "شغالاً" بعد رفع ملفاتك على GitHub
    const repoUrl = "https://your-github-username.github.io/my-project/";
    document.getElementById('site-link').innerText = repoUrl;
}
