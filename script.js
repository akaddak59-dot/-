function showEditor(lang) {
    document.getElementById('main-interface').style.display = 'none';
    document.getElementById('editor-screen').style.display = 'block';
}

function resetAll() {
    document.getElementById('main-interface').style.display = 'block';
    document.getElementById('editor-screen').style.display = 'none';
    document.getElementById('publish-screen').style.display = 'none';
}

function runCode() {
    alert("تجربة التشغيل...");
    resetAll();
}

function publishSite() {
    document.getElementById('main-interface').style.display = 'none';
    document.getElementById('publish-screen').style.display = 'block';
    document.getElementById('site-link').innerText = "https://your-github-username.github.io/site";
}
